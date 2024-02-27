import java.util.*;

public class SimpleCalendar implements Comparable<SimpleCalendar>{
    public int Year;
    public int Month;
    public int Date;

    public SimpleCalendar(int Year, int Month, int Date) {
        Calendar eC = Calendar.getInstance();
        eC.set(Year, Month, Date);
        eC.set(Calendar.SECOND, 0);
        eC.set(Calendar.MILLISECOND, 0);
        this.Year = Year;
        this.Month = Month;
        this.Date = Date;
    }

    public static void main(String[] args) {
        SimpleCalendar sc1 = new SimpleCalendar(2024, 8, 28);
        SimpleCalendar sc2 = new SimpleCalendar(2023, 8, 28);
        SimpleCalendar sc3 = new SimpleCalendar(2025, 8, 28);


        ArrayList<SimpleCalendar> test_al = new ArrayList<>();
        test_al.add(sc2);
        test_al.add(sc1);
        test_al.add(sc3);

        Collections.sort(test_al);

        System.out.println(test_al);
    }

    public String toString() {
        return this.Month + "/" + this.Date + "/" + this.Year;
    }

    public boolean equals(SimpleCalendar otherCalendar) {
        return this.Year == otherCalendar.Year && this.Month == otherCalendar.Month && this.Date == otherCalendar.Date;
    }

    public int compareTo(SimpleCalendar otherCalendar) {
        if (this.Year < otherCalendar.Year) {
            return -1;
        }

        if (this.Year > otherCalendar.Year) {
            return 1;
        }
        
        // From here: this.Year == that.Year
        
        if (this.Month < otherCalendar.Month) {
            return -1;
        }

        if (this.Month > otherCalendar.Month) {
            return 1;
        }

        // From here: this.Year == that.Year and this.Month == that.Month

        if (this.Date < otherCalendar.Date) {
            return -1;
        }

        if (this.Date > otherCalendar.Date) {
            return 1;
        }
        
        // From here: this.Year == that.Year and this.Month == that.Month and this.Date == that.Date

        return 0;
    }
}
