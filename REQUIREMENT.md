Objective 1: 

Write a command line program that returns the current time using the "Human Friendly text".

**Number Time Human friendly Text**

- 1:00 - One o'clock
- 2:00 - Two o'clock
- 13:00 - One o'clock
- 13:05 - Five past one
- 13:15 - Quatre past one
- 13:45 - Quatre to two
- 00:00 - Midnight
- 00:05 - Quatre past night

Details
- 24-hr clock
- Accept HH:MM
- Output <String>

Steps:
- Take the current time and format it to HH:MM
- Validate the hour (00 to 23) and minute (00 to 59).
- Find out the Hour form 24 hr time
    - If <Hour> - 12 = [0  or <+ve number>] (>=0)
        use that the **output as hour**
        and it is PM 
    - If <Hour> - 12 = <-ve>
        use <Hour>
        and it is AM
- Find out the Minute from 59min time
    - If 00 - "<Minute In Word> o' Clock"
    - If >0 && <30 - "<Minute In Word> past <Hour>"
    - If >31 && <60 - "<Minute In Word> to <Hour>"


**Future enhancement in mind**
- Multiple format input 12 hr and 24 hr format
- Different formatted text (Internationalization)
- Dynamic formatted template 

