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
        SimpleCalendar[] scs = {new SimpleCalendar(2024, 8, 28), 
            new SimpleCalendar(2024, 1, 28),
            new SimpleCalendar(2024, 2, 28),
            new SimpleCalendar(1024, 1, 15), 
            new SimpleCalendar(1024, 1, 12), 
            new SimpleCalendar(1024, 1, 13), 
            new SimpleCalendar(0024, 3, 22)
        };
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

    public static void viewSchedule() {
        System.out.println("Recurring Event Schedule:");
        ArrayList<SimpleCalendar> resKs = new ArrayList<>(RecurringEventStorage.keySet());

        Collections.sort(resKs);
        System.out.println(resKs);
        
        System.out.println("Single Occurrence Event Schedule:");
        ArrayList<SimpleCalendar> sesKs = new ArrayList<>(SingleEventStorage.keySet());

        Collections.sort(sesKs);
        System.out.println(sesKs);

        int continueViewing = expectInt(new String[] {"View Schedule?", "[0] - Return ", "[1] - Show Yearly Schedule", "[2] - Show Monthly Schedule"}, null, 0, 2);
        
        // Yearly Schedule Option
        if (continueViewing == 1) {

            HashMap<Integer, ArrayList<Event>> yearly_storage = new HashMap<>();
            HashMap<Integer, ArrayList<Event>> normal_yearly_storage = new HashMap<>();

            for (SimpleCalendar sc : resKs) {
                if (!yearly_storage.containsKey(sc.Year)) {
                    yearly_storage.put(sc.Year, new ArrayList<>());
                }

                ArrayList<Event> currentList = RecurringEventStorage.get(sc);
                ArrayList<Event> iterationList = yearly_storage.get(sc.Year);
                iterationList.addAll(currentList);
                yearly_storage.put(sc.Year, iterationList);
            }

            for (SimpleCalendar sc : sesKs) {
                if (!normal_yearly_storage.containsKey(sc.Year)) {
                    normal_yearly_storage.put(sc.Year, new ArrayList<>());
                }

                ArrayList<Event> currentList = SingleEventStorage.get(sc);
                ArrayList<Event> iterationList = normal_yearly_storage.get(sc.Year);
                iterationList.addAll(currentList);
                normal_yearly_storage.put(sc.Year, iterationList);
            }
            
            System.out.println("Recurring Yearly Schedule Summary:");
            for (Integer year : yearly_storage.keySet()) {
                System.out.printf("Year : %d | Num Events: %d", year, yearly_storage.get(year).size());
                System.out.println();
            }

            System.out.println("Single Occurence Yearly Schedule Summary:");
            for (Integer year: normal_yearly_storage.keySet()) {
                System.out.printf("Year : %d | Num Events: %d", year, normal_yearly_storage.get(year).size());
                System.out.println();
            }

            int proceed_details = expectInt(new String[] {"Proceed with viewing each event details?", "[0] - No", "[1] - Yes"}, null, 0, 1);

            if (proceed_details == 1) {
                System.out.println("Recurring Yearly Event Details:");
                for ( Integer year : yearly_storage.keySet()) {
                    ArrayList<Event> currentList = yearly_storage.get(year);
                    System.out.printf("Year : %d | Num Events: %d", year, currentList.size());
                    System.out.println();

                    for (Event e : currentList) {
                        System.out.println(e);
                    }
                }

                System.out.println("Single Occurence Yearly Event Details:");
                for ( Integer year : normal_yearly_storage.keySet()) {
                    ArrayList<Event> currentList = normal_yearly_storage.get(year);
                    System.out.printf("Year : %d | Num Events: %d", year, currentList.size());
                    System.out.println();

                    for (Event e : currentList) {
                        System.out.println(e);
                    }
                }


            }



        // Monthly Schedule Option
        } else if (continueViewing == 2) {

                HashMap<String, ArrayList<Event>> monthly_storage = new HashMap<>();
                HashMap<String, ArrayList<Event>> normal_monthly_storage = new HashMap<>();
                
                for (SimpleCalendar sc : resKs) {
                    String month_name = ValidMonths.get(sc.Month);

                    if (!monthly_storage.containsKey(month_name)) {
                        monthly_storage.put(month_name, new ArrayList<>());
                    }

                    ArrayList<Event> currentList = RecurringEventStorage.get(sc);
                    ArrayList<Event> iterationList = monthly_storage.get(month_name);
                    iterationList.addAll(currentList);
                    monthly_storage.put(month_name, iterationList);
                }

                for (SimpleCalendar sc : sesKs) {
                    String month_name = ValidMonths.get(sc.Month);

                    if (!normal_monthly_storage.containsKey(month_name)) {
                        normal_monthly_storage.put(month_name, new ArrayList<>());
                    }

                    ArrayList<Event> currentList = SingleEventStorage.get(sc);
                    ArrayList<Event> iterationList = normal_monthly_storage.get(month_name);
                    iterationList.addAll(currentList);
                    normal_monthly_storage.put(month_name, iterationList);
                }

                System.out.println("Recurring Monthly Schedule Summary:");
                for (String month : monthly_storage.keySet()) {
                    System.out.printf("Month : %s | Num Events: %d", month, monthly_storage.get(month).size());
                    System.out.println();
                }

                System.out.println("Single Monthly Schedule Summary:");
                for (String month : normal_monthly_storage.keySet()) {
                    System.out.printf("Month : %s | Num Events: %d", month, normal_monthly_storage.get(month).size());
                    System.out.println();
                }

                int proceed_details = expectInt(new String[] {"Proceed with viewing each event details?", "[0] - No", "[1] - Yes"}, null, 0, 1);

                if (proceed_details == 1) {
                    System.out.println("Recurring Monthly Event Details:");
                    for (String month : monthly_storage.keySet()) {
                        ArrayList<Event> currentList = monthly_storage.get(month);
                        System.out.printf("Month : %s | Num Events: %d", month, currentList.size());
                        System.out.println();

                        for (Event e : currentList) {
                            System.out.println(e);
                        }
                    }

                    System.out.println("Single Occurence Monthly Event Details:");
                    for (String month : normal_monthly_storage.keySet()) {
                        ArrayList<Event> currentList = normal_monthly_storage.get(month);
                        System.out.printf("Month : %s | Num Events: %d", month, currentList.size());
                        System.out.println();

                        for (Event e : currentList) {
                            System.out.println(e);
                        }
                    }

            } else {
                return;
            }
        }

    }

    public static void modifyEvent() {
        // 0 - None, 1 - Name, 2 - Location, 3 - Attendees, 4 - Year, 5 - Month, 6 - Date
        SearchFilter currentFilter = new SearchFilter();
        boolean loopFlag = true;
        while (loopFlag) {
            int possibleFilter = expectInt(
            new String[] {
                "Select possible event information that you have", 
                "[1] - Name", 
                "[2] - Location",
                "[3] - Attendees", 
                "[4] - Year",
                "[5] - Month", 
                "[6] - Date",
                "[0] - None"
            }, 
            null, 
            0, 
            1);

            switch (possibleFilter) {
                case 0:
                    if (currentFilter.isEmpty()) {
                        System.out.println("No possible search filter, therefore cannot modify an event");
                        loopFlag = false;
                    }
                    break;
                case 1:
                    System.out.println("Current Set Name:" + currentFilter.Name);
                    System.out.println("Enter the possible Name of the event:");
                    currentFilter.Name = scan.nextLine();
                    break;
                case 2:
                    System.out.println("Current Set Location:" + currentFilter.Location);
                    System.out.println("Enter the possible Location of the event:");
                    currentFilter.Location = scan.nextLine();
                    break;
                case 3:
                    System.out.println("Current Set Attendees: " + currentFilter.Attendees);
                    System.out.println("Enter the possible number of Attendees of the event:");
                    currentFilter.Attendees = scan.nextInt();
                    break;
                case 4:
                    System.out.println("Current Set Year: " + currentFilter.Year);
                    System.out.println("Enter the possible Year of the event:");
                    currentFilter.Year = scan.nextInt();
                    break;
                case 5:
                    System.out.println("Current Set Month: " + currentFilter.Month);
                    System.out.println("Enter the possible Month of the event:");
                    currentFilter.Month = scan.nextInt();
                    break;
                case 6:
                    System.out.println("Current Set Date: " + currentFilter.Date);
                    System.out.println("Enter the possible Date of the event:");
                    currentFilter.Date = scan.nextInt();
                    break;
            }

            // Search in Recurring

            



            // Search in Single
            

        }

        
        



        


        

    }
}
