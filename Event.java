public class Event {
    private int Attendees;
    private String Name;
    private String Location;

    public Event() {
        this.Attendees = 0;
        this.Name = "";
        this.Location = "";
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

}