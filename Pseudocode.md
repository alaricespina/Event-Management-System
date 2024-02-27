Start
    Declarations 
        Event January[31]
        Event February[28]
        Event March[31]
        Event April[30]
        Event May[31]
        Event June[30]
        Event July[31]
        Event August[31]
        Event September[30]
        Event October[31]
        Event November[30]
        Event December[31]
        Event Months[12] = {January, February, March, April, May, June, July, August, September, October, November, December}
        int year 
        string action 
        string stop = "exit"
        inputFile EventsData
        outputFile EventsData
        outputFile BackupData

    initialize()
    while action <> stop 
        detailedLoop()
    endwhile 
    endofJob()
Stop

Class Event 
    Declarations
        private num attendees
        private string event 
        private string location 

    public void setEvent(string e)
        this.event = e 
    return 

    public void setLocation(string l)
        this.location = l 
    return 

    public void setnumberOfAttendees(num noa)
        this.attendees = noa 
    return

    public void getEvent()
    return this.event 

    public void getLocation()
    return this.location 

    public void getnumberOfAttendees()
    return this.attendees
endclass 

initialize() 
    Declarations:
        num MAXMONTHS = 12
        num monthindex = 0
        num dateindex = 0
        num maxdate

    while monthindex < MAXMONTHS        
        if monthindex == 0 or monthindex == 2 or monthindex == 4 or monthindex == 6 or monthindex == 7 or monthindex == 9 or monthindex == 11
            maxdate = 31
        else if monthindex == 1
            maxdate = 28
        else
            maxdate = 30
        endif
        
        while dateindex < maxdate 
            Months[prevmonthindex][prevdateindex].setnumberOfAttendees(0)
            Months[prevmonthindex][prevdateindex].setEvent("none")
            Months[prevmonthindex][prevdateindex].setLocation("none")    
            dateindex++ 
        endwhile

        monthindex++
    endwhile 

    output "This program is an event organizer program"
    output "Please type the keyword for the action that you want to do"
    output "[create] Create Event"
    output "[view] View Schedule"
    output "[summary] Print Summary"
    output "[quit] quit"
    output "Input Action: "
    input action 
return 

createEvent()
    Declarations
        string tempevent
        string templocation
        num tempattendees
        num monthindex
        num dateindex

    output "When would the event happen, what month? [Numeric, Ex. January = 1]: "
    input monthindex 
    output "When would the event happen, what date? [Numeric]: "
    input dateindex 
    monthindex = tempmonth - 1
    dateindex = tempdate - 1
    output "What is the event: "
    input tempevent 
    Months[monthindex][dateindex].setEvent(tempevent)
    output "Where would the event be located: "
    input templocation
    Months[monthindex][dateindex].setLocation(templocation)
    output "How many people would attend this event? [Please input the total number of attendees]: "
    input tempattendees
    Months[monthindex][dateindex].setEvent(tempattendees)


return 

viewschedule()
    Declarations:
        num MAXMONTHS = 12
        string monthnames[MAXMONTHS] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}
        num monthindex = 0
        num dateindex = 0
        num maxdate
        string event
        string location 
        num participants
        num date 
        num month 
        string choice
        

    while monthindex < MAXMONTHS        
        output "Viewing Schedule for the month of ", monthnames[monthindex]
        if monthindex == 0 or monthindex == 2 or monthindex == 4 or monthindex == 6 or monthindex == 7 or monthindex == 9 or monthindex == 11
            maxdate = 31
        else if monthindex == 1
            maxdate = 28
        else
            maxdate = 30
        endif
        
        while dateindex < maxdate 
            date = dateindex + 1
            event = Months[monthindex][dateindex].getEvent()
            if event == "none":
                output "There is no scheduled event for this day ", date, "of the month ", monthnames[monthindex]
            else:
                participants = Months[monthindex][dateindex].getnumberOfAttendees()
                location = Months[monthindex][dateindex].getLocation()
                output monthnames[monthindex], date, "Scheduled Event: ", event, "No. of Attendees: ", participants, "Located at: ", location 
        
            dateindex++ 
        endwhile

        monthindex++
    endwhile  

    output "Do you want to modify any of the events listed? Enter your choice based on the choices below"
    output "[Yes] - I want to modify an event"
    output "[Review] - Reprints the entire schedule agagain"
    output "[--Anything--] - I dont want to modify, returns to main menu"
    input choice 

    if choice == "Yes"
        modifyEvent()
    else if choice == "Review"
        viewschedule()
    endif
return

modifyEvent()
    Declarations
        string tempevent
        string templocation
        num tempattendees
        num newmonthindex
        num newdateindex
        num prevdateindex
        num prevmonthindex
        string occupied = "Yes" 
        string prevevent
        string change 

    output "What month did you schedule the event you want to change? [Numeric, Ex. January = 1]: "
    input prevmonthindex
    prevmonthindex = prevmonthindex - 1
    output "What date did you schedule the event you want to change [Numeric]: "
    input prevdateindex
    prevdateindex = prevdateindex - 1
    output "Do you want to delete this event or reschedule the event? [Delete] or [Resched] "
    input change 

    if change == "Delete":
        Months[prevmonthindex][prevdateindex].setnumberOfAttendees(0)
        Months[prevmonthindex][prevdateindex].setEvent("none")
        Months[prevmonthindex][prevdateindex].setLocation("none")
    else if change == "Resched":
        while occupied == "Yes"
            output "What is the new month that you want your event to move into? [Numeric, Ex. January = 1]:"
            input newmonthindex
            newmonthindex = newmonthindex - 1
            output "What date would you like your new event to be scheduled? [Numeric]: "
            input newdateindex
            newdateindex = newdateindex - 1
            prevevent = Month[newmonthindex][newdateindex].getEvent()
            if prevevent == "none":
                output "There is currently no event scheduled for this month and date, you may now continue in filling up other details of the event"
                occupied = "No"
                Months[prevmonthindex][prevdateindex].setnumberOfAttendees(0)
                Months[prevmonthindex][prevdateindex].setEvent("none")
                Months[prevmonthindex][prevdateindex].setLocation("none")

            else:
                output "There is currently an event scheduled for this month and date, please select another month or date"
        endwhile 

        output "What is the event: "
        input tempevent 
        Months[newmonthindex][newdateindex].setEvent(tempevent)
        output "Where would the event be located: "
        input templocation
        Months[newmonthindex][newdateindex].setLocation(templocation)
        output "How many people would attend this event? [Please input the total number of attendees]: "
        input tempattendees
        Months[newmonthindex][newdateindex].setEvent(tempattendees)        
    endif

return

printSummary()
    Declarations:
        num MAXMONTHS = 12
        string monthnames[MAXMONTHS] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}
        num monthindex = 0
        num dateindex = 0
        num maxdate
        string event
        num date     

    while monthindex < MAXMONTHS        
        output "Viewing Schedule for the month of ", monthnames[monthindex]

        if monthindex == 0 or monthindex == 2 or monthindex == 4 or monthindex == 6 or monthindex == 7 or monthindex == 9 or monthindex == 11
            maxdate = 31
        else if monthindex == 1
            maxdate = 28
        else
            maxdate = 30
        endif

        while dateindex < maxdate 
            date = dateindex + 1
            event = Months[monthindex][dateindex].getEvent()
            if event <> "none":
                output monthnames[monthindex], date, "Scheduled Event: ", event
            endif
        
            dateindex++ 
        endwhile

        monthindex++
    endwhile  
return 

saveFile()
    open EventsData "EventsSaveFile.dat"
    open BackupData "EventsBackupFile.dat"

    output Months to EventsData
    output January to EventsData 
    output February to EventsData 
    output March to EventsData 
    output April to EventsData 
    output May to EventsData 
    output June to EventsData 
    output July to EventsData 
    output August to EventsData 
    output September to EventsData 
    output October to EventsData 
    output November to EventsData 
    output December to EventsData 

    output Months to BackupData
    output January to BackupData
    output February to BackupData
    output March to BackupData 
    output April to BackupData
    output May to BackupData 
    output June to BackupData 
    output July to BackupData 
    output August to BackupData
    output September to BackupData 
    output October to BackupData 
    output November to BackupData 
    output December to BackupData

    close EventsData 
    close BackupData
return 

loadFile()
    open EventsData "EventsSaveFile.dat"

    input Months from EventsData 
    input February from EventsData 
    input March from EventsData 
    input April from EventsData 
    input May from EventsData 
    input June from EventsData 
    input July from EventsData 
    input August from EventsData 
    input September from EventsData 
    input October from EventsData 
    input November from EventsData 
    input December from EventsData 

    close EventsData
return         
    
endofJob()
    output "Thank you for using this program"
    output "Saving data -/"
    saveFile()
    output "Data saved -\"
return

detailedLoop()
    if action == "create":
        createEvent()
        saveFile()
    else if action == "view":
        loadFile()
        viewschedule()
        saveFile()
    else if action == "summary":
        loadFile()
        printSummary()
    else: 
        output "Please input a valid choice"
    endif
    output "Input Action: "
    input action 
return