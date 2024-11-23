
# Advanced Enhanced TimeConverter and Scheduling Library with codertime package
 #(ES6 ESM module)

This is a powerful library designed to simplify time conversions and scheduling for your projects, whether in Finance, AI, or any other Node.js application. It provides a range of utilities for converting UNIX timestamps to readable formats, scheduling tasks, and handling complex timing requirements, making your development process smoother and more efficient.

#Github repo
For comprehensive documentation, please refer to the [GitHub Repository](https://github.com/coderxone/codertime).

## Features

- **Time Conversion**: Easily convert UNIX timestamps to human-readable formats, handle different time zones, and perform date calculations.
- **Scheduling**: Schedule tasks to run at specified intervals, such as daily, weekly, or at custom time intervals.
- **RxJS-based Timers**: Use reactive programming for time-based event scheduling, offering flexibility and easy handling of asynchronous tasks.
- **Comprehensive Utility Functions**: Provides a wide variety of time and date-related helper functions, such as getting the start/end of the day, counting passed time, and more.

## Installation

To install the library, you can use npm:

```bash
npm install codertime

#Usage
Import the functions as needed in your project:

# Time Conversion & Scheduling Utility

This package provides a set of functions for converting UNIX timestamps to various readable date and time formats and scheduling tasks using cron jobs and RxJS timers.

## Usage

Import the functions as needed in your project:

```javascript
import {
  timeConverter,
  timeConverter_us,
  timeConverter_us_date,
  getDateStart,
  getDateFinish,
  run_every_day_at8am,
  run_every_minute,
  run_every_5_second,
  run_every_2_second,
  run_every_30_second,
  run_once_through_2_hours,
  run_every_60_second,
  run_every_sunday,
  run_every_day_at9am,
} from 'codertime';`


// Example 1: Convert UNIX timestamp to readable format
const unixTimestamp = 1672531199; // Example UNIX timestamp
console.log("Converted time:", timeConverter(unixTimestamp)); // Format: "1 Jan 2023 0:59:59"
console.log("Converted time (US format):", timeConverter_us(unixTimestamp)); // Format: "01/01/2023 12:59:59"

// Example 2: Get start and end of the day in UNIX format
const startOfDay = getDateStart();
const endOfDay = getDateFinish();
console.log("Start of day (UNIX):", startOfDay);
console.log("End of day (UNIX):", endOfDay);

// Example 3: Run a cron job every day at 8 AM
run_every_day_at8am(8, 0).then((msg) => {
  console.log(msg); // Logs "run" at 8 AM every day
});

// Example 4: Run a cron job every minute
run_every_minute(); // This will log every minute at the 5th second.

// Example 5: Schedule task to run every 5 seconds using RxJS timer
const subscription = run_every_5_second().subscribe(() => {
  console.log("Task running every 5 seconds");
});

// Unsubscribe the timer after 20 seconds to stop the interval
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Stopped the 5-second timer");
}, 20000);


Explanation:
Time Conversions: This code shows how to use timeConverter and timeConverter_us to convert UNIX timestamps to human-readable formats.
Date Start and Finish: getDateStart and getDateFinish provide the start and end of the current day in UNIX format, useful for date-specific operations.
Cron Jobs: run_every_day_at8am runs daily at 8 AM, and run_every_minute runs every minute at the 5th second.
RxJS Timers: run_every_5_second uses an RxJS timer to execute code every 5 seconds.


#API Reference
#Conversion Functions

1.timeConverter
Converts a UNIX timestamp to a human-readable format (e.g., "29 Oct 2024 14:34:15").

const unixTimestamp = 1669748452;
console.log(timeConverter(unixTimestamp));
// Output: "29 Oct 2024 14:34:15"

2.timeConverter_ru
Converts a UNIX timestamp to a Russian date format (e.g., "29 10 2024").

3.timeConverter_us

Formats a UNIX timestamp to "MM/DD/YYYY h:mm
" (e.g., "10/29/2024 2:34:15").

const unixTimestamp = 1669748452000;
console.log(timeConverter_us(unixTimestamp));
// Output: "10/29/2024 2:34:15"

4. timeConverter_us_date
Adds days to a UNIX timestamp and returns "MM/DD/YYYY" format.

const unixTimestamp = 1669748452;
console.log(timeConverter_us_date(unixTimestamp, 2));
// Output: "10/31/2024" (adds 2 days)

5.timeConverter_us_dateSimple
Converts a UNIX timestamp to "MM/DD/YYYY" format.

const unixTimestamp = 1669748452;
console.log(timeConverter_us_dateSimple(unixTimestamp));
// Output: "10/29/2024"

6.timeConverter_us_time

Converts a UNIX timestamp to a time in "hh
A" format (e.g., "02:34 PM").

const unixTimestamp = 1669748452;
console.log(timeConverter_us_time(unixTimestamp));
// Output: "02:34 PM"

7.getDateStart
Gets the UNIX timestamp for the start of the current day.

console.log(getDateStart());
// Output: (start of today’s timestamp, e.g., 1669708800)

8. getDateFinish
Gets the UNIX timestamp for the end of the current day.

console.log(getDateFinish());
// Output: (end of today’s timestamp, e.g., 1669795199)

9. convertToUnix
Converts a JavaScript date to UNIX timestamp.

console.log(convertToUnix("2024-10-29"));
// Output: (e.g., 1720012800)

10. convertPayPalDateToUnix
Converts a PayPal-formatted date string to UNIX timestamp.

console.log(convertPayPalDateToUnix("2024-10-29T12:34:56Z"));
// Output: (e.g., 1720059296)

11. convertToUnixjsGetTime
Converts a JavaScript date to UNIX timestamp.

console.log(convertToUnixjsGetTime("2024-10-29"));
// Output: (e.g., 1720012800)

12. newUnixTimeNow
Gets the current time as a UNIX timestamp.

console.log(newUnixTimeNow());
// Output: (current UNIX timestamp, e.g., 1720059296)

13. converUnixTojsTime
Converts a UNIX timestamp to a human-readable date and time format.

console.log(converUnixTojsTime(1669748452));
// Output: "29 Oct 2024 14:34:15"

14. converUnixTojsTimeByObj
Converts a UNIX timestamp to an object with date and time details.

console.log(converUnixTojsTimeByObj(1669748452));
// Output: { date: 29, month: 'Oct', year: 2024, hour: 14, min: 34, sec: 15 }

15. getUnixfromDate_Time
Converts a formatted date string to a UNIX timestamp.

console.log(getUnixfromDate_Time("10/29/2024 14:34:15"));
// Output: (e.g., 1669748452)

16. countPassedTimeFromUnix
Calculates the hours passed from a UNIX timestamp to now.

const unixTimestamp = 1669748452;
console.log(countPassedTimeFromUnix(unixTimestamp));
// Output: (number of hours passed, e.g., 24)

17. countPassedMinutesFromUnix
Calculates the minutes passed from a UNIX timestamp to now.

console.log(countPassedMinutesFromUnix(1669748452));
// Output: (number of minutes passed, e.g., 1440)

18. getUnixtime
Gets the current UNIX timestamp.

console.log(getUnixtime());
// Output: (current UNIX timestamp, e.g., 1669748452)

19. getunixMonth
Gets the month from a UNIX timestamp.

console.log(getunixMonth(1669748452));
// Output: "Oct"

20. getcurrentMonth
Gets the current month.

console.log(getcurrentMonth());
// Output: "Oct"

21. getUnixDateJS
Gets the day of the month from a UNIX timestamp.

console.log(getUnixDateJS(1669748452));
// Output: "29"

22. getcurrentDate
Gets the current day of the month.

console.log(getcurrentDate());
// Output: "29"

23. getDateTime
Gets the current date and time.

console.log(getDateTime());
// Output: "2024-10-29 14:34:15"

24. getDate
Gets the current date.

console.log(getDate());
// Output: "2024-10-29"

25. getDateminusWeek
Gets the date one week ago.

console.log(getDateminusWeek());
// Output: "2024-10-22"

26. getUnixDate
Gets the current UNIX timestamp.

console.log(getUnixDate());
// Output: (e.g., 1669748452)

27. getUnixDateminusWeek
Gets the UNIX timestamp for a date two weeks ago.

console.log(getUnixDateminusWeek());
// Output: (timestamp for two weeks ago, e.g., 1668571252)

28. getDateminusTwoWeek
Gets the date two weeks ago.

console.log(getDateminusTwoWeek());
// Output: "2024-10-15"


29. getDateminusOneDay
Gets the date one day ago.

console.log(getDateminusOneDay());
// Output: "2024-10-28"

30. convertDateStringToDBdate
Converts a date string to "YYYY-MM-DD" format.

console.log(convertDateStringToDBdate("10/29/2024"));
// Output: "2024-10-29"

31. run_every_day_at8am
Schedules a task to run daily at a specific time

run_every_day_at8am(8, 0).then(console.log);
// Output: "run" (at 8:00 AM every day)

32. run_every_minute
Schedules a task to run every minute.

run_every_minute().subscribe(() => console.log("Task runs every minute"));
// Output: "Task runs every minute"

33. run_every_one_second
Creates an observable that emits every 2 seconds.

run_every_one_second().subscribe(() => console.log("Task runs every 1 seconds"));
// Output: "Task runs every 1 seconds"

33. run_every_2_second
Creates an observable that emits every 2 seconds.

run_every_2_second().subscribe(() => console.log("Task runs every 2 seconds"));
// Output: "Task runs every 2 seconds"

33. run_every_2_second
Creates an observable that emits every 2 seconds.

34. run_every_5_second
run_every_5_second().subscribe(() => console.log("Task runs every 5 seconds"));
// Output: "Task runs every 5 seconds"

35. run_every_30_second
run_every_30_second().subscribe(() => console.log("Task runs every 30 seconds"));
// Output: "Task runs every 30 seconds"

36. run_every_through_30_second
run_every_through_30_second().subscribe(() => console.log("Task runs once 30 seconds"));
// Output: "Task runs once 30 seconds"

37. run_once_through_2_hours
run_once_through_2_hours().subscribe(() => console.log("Task runs through 2 hour"));
// Output: "Task runs through 2 hour"

38. run_every_60_second
run_every_60_second().subscribe(() => console.log("Task runs every 60 second"));
// Output: "Task runs once 60 seconds"

39. run_every_sunday
run_every_sunday().subscribe(() => console.log("Task runs every sunday"));
// Output: "Task runs every sunday"

40. run_every_day at 9am
run_every_day().subscribe(() => console.log("Task runs every day at 9am"));
// Output: "Task runs every day at 9am"




