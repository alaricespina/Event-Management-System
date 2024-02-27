public class EventOrganizer {
    public static void main(String[] args) {
        MenuHelper MH = new MenuHelper();

        MH.addMenu("Main Choice");

        MH.addPrompt("Main Choice", "This program is an event organizer program");
        MH.addPrompt("Main Choice", "Please select what you want to do");
        MH.addChoice("Main Choice", "Create a new Event");
        MH.addChoice("Main Choice", "Edit an Event");
        MH.addChoice("Main Choice", "Print Summary of Events");
        MH.addChoice("Main Choice", "Quit");

        MH.printMenu("Main Choice");

    }
}
