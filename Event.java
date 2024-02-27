public class Event {
    private int Attendees;
    private String Name;
    private String Location;

    public Event() {
        this.Attendees = 0;
        this.Name = "";
        this.Location = "";
    }

    public Event(int numAttendees, String eventName, String eventLocation) {
        this.Attendees = numAttendees;
        this.Name = eventName;
        this.Location = eventLocation;
    }

    public void setEventName(String eventName) {
        this.Name = eventName;
    }

    public void setEventLocation(String eventLocation) {
        this.Location = eventLocation;
    }

    public void setEventAttendees(int eventAttendees){
        this.Attendees = eventAttendees;
    }

    public String getEventName(){
        return this.Name;
    }

    public String getEventLocation(){
        return this.Location;
    }

    public int getEventAttendees(){
        return this.Attendees;
    }

    public Event getEvent(){
        return this;
    }

    public String toString(){
        return this.Name + " @ " + this.Location + " | " + this.Attendees;
    }

}