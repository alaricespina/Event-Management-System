public class SearchFilter {
    public String Name;
    public String Location;
    public int Attendees;
    public int Year;
    public int Month;
    public int Date;

    public SearchFilter() {
        this.Name = "";
        this.Location = "";
        this.Attendees = 0;
        this.Year = 0;
        this.Month = 0;
        this.Date = 0;
    }

    public boolean isEmpty() {
        return (this.Name == "" && this.Location == "" && this.Attendees == 0 && this.Year == 0 && this.Month == 0 && this.Date == 0);
    }

    public void resetFilter() {
        this.Name = "";
        this.Location = "";
        this.Attendees = 0;
        this.Year = 0;
        this.Month = 0;
        this.Date = 0;
    }
}
