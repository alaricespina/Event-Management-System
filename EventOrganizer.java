import java.util.*;

public class EventOrganizer {
    static HashMap<SimpleCalendar, ArrayList<Event>> SingleEventStorage = new HashMap<>();
    static HashMap<SimpleCalendar, ArrayList<Event>> RecurringEventStorage = new HashMap<>();
    static HashMap<Integer, String> ValidMonths = new HashMap<>();
    static HashMap<Integer, Integer> ValidDates = new HashMap<>();
    static Scanner scan = new Scanner(System.in);


    public static void main(String[] args) {
        MenuHelper MH = new MenuHelper();

        MH.addMenu("Main Choice");

        MH.addPrompt("Main Choice", "This program is an event organizer program");
        MH.addPrompt("Main Choice", "Please select what you want to do");
        MH.addChoice("Main Choice", "Create a new Event");
        MH.addChoice("Main Choice", "Edit an Event");
        MH.addChoice("Main Choice", "View Summary of Events");
        MH.addChoice("Main Choice", "Quit");

        MH.printMenu("Main Choice");

        buildCheckers();
        // createEvent();
        createDummyEvents();

        viewSchedule();
    }

    public static void buildCheckers() {
        ValidMonths.put(1, "January");
        ValidMonths.put(2, "February");
        ValidMonths.put(3, "March");
        ValidMonths.put(4, "April");
        ValidMonths.put(5, "May");
        ValidMonths.put(6, "June");
        ValidMonths.put(7, "July");
        ValidMonths.put(8, "August");
        ValidMonths.put(9, "September");
        ValidMonths.put(10, "October");
        ValidMonths.put(11, "November");
        ValidMonths.put(12, "December");

        ValidDates.put(1, 31);
        ValidDates.put(2, 29);
        ValidDates.put(3, 31);
        ValidDates.put(4, 30);
        ValidDates.put(5, 31);
        ValidDates.put(6, 30);
        ValidDates.put(7, 31);
        ValidDates.put(8, 31);
        ValidDates.put(9, 30);
        ValidDates.put(10, 31);
        ValidDates.put(11, 30);
        ValidDates.put(12, 31);
        
    }
    
    public static int expectInt(String[] Prompts, String[] Error_Prompts, int lower_range, int higher_range) {
        while (true) {
            for (String prompt : Prompts) {
                System.out.println(prompt);
            }

            System.out.printf("Possible Range: [%d - %d]", lower_range, higher_range);
            System.out.println();

            int r_var = scan.nextInt();

            if (!(r_var < lower_range || r_var > higher_range)) {
                return r_var;
            } else {
                for (String prompt : Error_Prompts) {
                    System.out.println(prompt);
                }
            }
        }

    }

    public static void createDummyEvents() {
        SimpleCalendar[] scs = {new SimpleCalendar(2024, 8, 28), new SimpleCalendar(1024, 1, 15), new SimpleCalendar(0024, 3, 22)};
        Event e = new Event(100, "Birthday", "Mansion");
        
        for (SimpleCalendar sc : scs) {
            if (!RecurringEventStorage.containsKey(sc)) {
                RecurringEventStorage.put(sc, new ArrayList<>());
            }
    
            ArrayList<Event> currentEvents = RecurringEventStorage.get(sc);
            currentEvents.add(e);
            RecurringEventStorage.put(sc, currentEvents);
        }

        SimpleCalendar[] scs2 = {new SimpleCalendar(2090, 10, 11), new SimpleCalendar(3030, 10, 11), new SimpleCalendar(4030, 10, 11)};
        Event e2 = new Event(1, "Hatdog", "Testing");

        for (SimpleCalendar sc : scs2) {
            if (!SingleEventStorage.containsKey(sc)) {
                SingleEventStorage.put(sc, new ArrayList<>());
            }
    
            ArrayList<Event> currentEvents = SingleEventStorage.get(sc);
            currentEvents.add(e2);
            SingleEventStorage.put(sc, currentEvents);
        }
        
    }

    public static void createEvent() {

        // Get Year
        System.out.println("Create Event");
        System.out.println("Specify the Year of the Event:");

        // Check if Leap Year
        int eventYear = scan.nextInt();
        boolean isLeapYear = eventYear % 4 == 0;

        // Get Month
        String[] _a = new String[] {"Specify the Month of the Event:", "Integer Format -> January = 1"};
        String[] _b = new String[] {"Invalid Month"};
        int eventMonth = expectInt(_a, _b, 1, 12);

        // Get Valid End Date based on Month and Leap Year
        String eventMonthName = ValidMonths.get(eventMonth);
        int endMonthDate = ValidDates.get(eventMonth);
        if (isLeapYear && eventMonth == 2) {
            endMonthDate += 1;
        }

        // Get Date
        _a = new String[] {"Specify the Date of the Event"};
        _b = new String[] {"Invalid Date"};
        System.out.println("Selected Month: " + eventMonthName);
        int eventDate = expectInt(_a, _b, 1, endMonthDate);

        // Ask if Event is recurring
        _a = new String[] {"Is this a recurring event?", "[0] - No", "[1] - Yes"};
        _b = new String[] {"Invalid Option"};
        int isRecurring = expectInt(_a, _b, 0, 1);


        // Event Details
        scan.nextLine();
        System.out.println("What is the name of the event?");
        String eventName = scan.nextLine();
        System.out.println("Where would the event be?");
        String eventLocation = scan.nextLine();
        System.out.println("How many would attend the event?");
        int eventAttendees = scan.nextInt();
        
        // Make Event Object
        Event newEvent = new Event(eventAttendees, eventName, eventLocation);

        // Add to the storage
        SimpleCalendar eventCalendarObject = new SimpleCalendar(eventYear, eventMonth, eventDate);
        System.out.println(eventCalendarObject);

        // Choose between recurring and single instance
        if (isRecurring == 1) {
            if (!RecurringEventStorage.containsKey(eventCalendarObject)) {
                RecurringEventStorage.put(eventCalendarObject, new ArrayList<>());
            }

            ArrayList<Event> currentEvents = RecurringEventStorage.get(eventCalendarObject);
            currentEvents.add(newEvent);
            RecurringEventStorage.put(eventCalendarObject, currentEvents);
        } else {
            if (!SingleEventStorage.containsKey(eventCalendarObject)) {
                SingleEventStorage.put(eventCalendarObject, new ArrayList<>());
            }

            ArrayList<Event> currentEvents = SingleEventStorage.get(eventCalendarObject);
            currentEvents.add(newEvent);
            SingleEventStorage.put(eventCalendarObject, currentEvents);
        }

        System.out.println(RecurringEventStorage);
        System.out.println(SingleEventStorage);
    }

    public static void editEvent() {

    }

    public static void viewEvent() {

    }

    public static void viewSchedule() {
        System.out.println("Recurring Event Schedule:");
        ArrayList<SimpleCalendar> resKs = new ArrayList<>(RecurringEventStorage.keySet());

        Collections.sort(resKs);
        System.out.println(resKs);
        
        System.out.println("Single Occurrence Event Schedule:");
        ArrayList<SimpleCalendar> sesKs = new ArrayList<>(SingleEventStorage.keySet());

        Collections.sort(sesKs);
        System.out.println(sesKs);

        int continueViewing = expectInt(new String[] {"View Schedule of specific dates?", "[0] - No", "[1] - Yes"}, null, 0, 1);

        if (continueViewing == 1)
        for (SimpleCalendar sc : resKs) {
            System.out.println(sc);
        }
    }

    public static void modifyEvent() {
        
    }
}
