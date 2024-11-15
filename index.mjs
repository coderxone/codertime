// import cron from 'node-cron'
import cron from 'node-cron';
import moment from 'moment-timezone';
import rx from 'rxjs';

const cronEveryMinute = new rx.Subject();
const cronSundaySubject = new rx.Subject();

     export const timeConverter = (UNIX_timestamp) => {
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }
     export const timeConverter_ru = (UNIX_timestamp) => {

      var a = new Date(UNIX_timestamp);
      //var months = ['Янв','Фев','Март','Апрель','Май','Июнь','Июль','Авг','Сент','Окт','Нояб','Дек'];
      var year = a.getUTCFullYear() + 1;
      //var month = months[a.getMonth()];
      var month = a.getUTCMonth() + 1;
      var date = a.getUTCDate();
      var hour = a.getUTCHours();
      var min = a.getUTCMinutes();
      var sec = a.getUTCSeconds();

      var converted_month = "0";

      if(month.length > 1){
        converted_month = month;
      }else{
        converted_month = "0" + month;
      }


      //var time = date + ' ' + converted_month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
      var time = date + ' ' + converted_month + ' ' + year + ' ';
      return time;

      //new Date(unix_timestamp * 1000).format('h:i:s')
    }

    export const timeConverter_us = (UNIX_timestamp) => {

      return moment.unix(UNIX_timestamp / 1000).format("MM/DD/YYYY h:mm:ss");

    }


    export const timeConverter_us_date = (UNIX_timestamp,executeDay) => {

      var databaseTime = moment.unix(UNIX_timestamp  + (executeDay * 24 * 60 * 60)).format("MM/DD/YYYY");

      return databaseTime;

    }


    export const timeConverter_us_dateSimple = (UNIX_timestamp) => {

      var databaseTime = moment.unix(UNIX_timestamp).format("MM/DD/YYYY");

      return databaseTime;

    }

    export const timeConverter_us_time = (UNIX_timestamp) => {

      return moment.unix(UNIX_timestamp).format("hh:mm A");

    }


    export const getDateStart = () => {

        //var d = moment().startOf('day').tz('Asia/Almaty').valueOf() / 1000; //return unix timestamp
        var d = moment().startOf('day').valueOf() / 1000; //return unix timestamp

        return d;

    }

    export const getDateFinish = () => {

        //var d = moment().endOf('day').tz('Asia/Almaty').valueOf() / 1000;
        var d = moment().endOf('day').valueOf() / 1000;

        return d;

    }

    export const convertToUnix = (jsdate) => {
        //new Date().getTime()
        //'2012.08.10'
        var converdate = parseInt((new Date(jsdate).getTime() / 1000).toFixed(0));

        return converdate;

    }
    export const convertPayPalDateToUnix = (jsdate) => {
        //new Date().getTime()
        //'2012.08.10'
        var converdate = Date.parse(jsdate);

        return converdate;

    }

    export const convertToUnixjsGetTime = (jsdate) => {
        //new Date().getTime()
        //'2012.08.10'
        var converdate = parseInt((new Date(jsdate).getTime() / 1000).toFixed(0));

        return converdate;

    }
    export const newUnixTimeNow = () => {
        //new Date().getTime()
        //'2012.08.10'
        var converdate = parseInt((Date.now() / 1000).toFixed(0));

        return converdate;

    }

    export const converUnixTojsTime = (UNIX_timestamp) => {

      var a = new Date(UNIX_timestamp);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

      return time;

    }

    export const converUnixTojsTimeByObj = (UNIX_timestamp) => {

      var a = new Date(UNIX_timestamp  * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      var timeObj = {
        date:date,
        month:month,
        year:year,
        hour:hour,
        min:min,
        sec:sec
      }

      return timeObj;

    }

    export const getUnixfromDate_Time = (value) => {

       return moment(value, "MM/dd/yyyy HH:mm:ss").unix();

    }

     //xxx
    export const countPassedTimeFromUnix = (UNIX_timestamp) => {

      //count current time
      const currentTime = currentModule.getUnixtime();
      const currentConvertedTime = currentModule.converUnixTojsTimeByObj(currentTime);
      //count current time

      //count passed time 
      const passedTime = currentModule.converUnixTojsTimeByObj(UNIX_timestamp);

      //count different time
      //const days = currentConvertedTime.date - passedTime.date;
      const hours = currentConvertedTime.hour - passedTime.hour;
      //const mins = currentConvertedTime.min - passedTime.min;
      
      return hours;
 
    }
    export const countPassedMinutesFromUnix = (UNIX_timestamp) => {

      //count current time
      const currentTime = currentModule.getUnixtime();
      const currentConvertedTime = currentModule.converUnixTojsTimeByObj(currentTime);
      //count current time

      //count passed time 
      const passedTime = currentModule.converUnixTojsTimeByObj(UNIX_timestamp);

      //count different time
      //const days = currentConvertedTime.date - passedTime.date;
      //const hours = currentConvertedTime.hour - passedTime.hour;
      const mins = currentConvertedTime.min - passedTime.min;
      
      return mins;
 
    }

    export const getUnixtime = () => {

      var unixtime = moment().unix();

      return unixtime;

    }
    export const getunixMonth = (UNIX_timestamp) => {
     var a = new Date(UNIX_timestamp * 1000);
     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     var year = a.getFullYear();
     var month = months[a.getMonth()];
     // var date = a.getDate();
     // var hour = a.getHours();
     // var min = a.getMinutes();
     // var sec = a.getSeconds();
     //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
     return month;
   }

    export const getcurrentMonth = () => {
     var a = new Date();
     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     var year = a.getFullYear();
     var month = months[a.getMonth()];
     // var date = a.getDate();
     // var hour = a.getHours();
     // var min = a.getMinutes();
     // var sec = a.getSeconds();
     //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
     return month;
   }

   export const getUnixDateJS = (UNIX_timestamp) => {

    var today = new Date(UNIX_timestamp * 1000);
    var dd = String(today.getDate()).padStart(2, '0');

    return dd;
   }

    export const getcurrentDate = () => {

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');

     return dd;
    }
    
    //xx
    
    export const getDateTime = () => {
      return moment().format("YYYY-MM-DD h:mm:ss");
    }
    export const getDate = () => {
      return moment().format("YYYY-MM-DD");
    }
    export const getDateminusWeek = () => {
      return moment().subtract(9,'d').format('YYYY-MM-DD');
    }
    export const getUnixDate = () => {
      return moment().unix();
    }
    export const getUnixDateminusWeek = () => {
     // return moment().subtract(9,'d').unix();
      return moment().subtract(14,'d').unix();
    }
    export const getDateminusTwoWeek = () => {
      return moment().subtract(14,'d').format('YYYY-MM-DD');
    }
    export const getDateminusOneDay = () => {
      return moment().subtract(1,'d').format('YYYY-MM-DD');
    }
    export const convertDateStringToDBdate = (date) => {
      var dateObj = new Date(date);
      var momentObj = moment(dateObj);
      return momentObj.format('YYYY-MM-DD'); // 2016-07-15
    }

    export const run_every_day_at8am = (hour,minute) => {


      // # ┌────────────── second (optional)
      // # │ ┌──────────── minute
      // # │ │ ┌────────── hour
      // # │ │ │ ┌──────── day of month
      // # │ │ │ │ ┌────── month
      // # │ │ │ │ │ ┌──── day of week
      // # │ │ │ │ │ │
      // # │ │ │ │ │ │
      // # * * * * * *

      return new Promise((resolve) => {
        cron.schedule('0 ' + minute + ' ' + hour + ' * * *', () => {
          resolve("run");
          //console.log('running a task every minute at the 5th second');
        });
      })


    }

    export const run_every_minute = () => {
      cron.schedule('5 * * * * *', () => {
        console.log('running a task every minute at the 5th second');
        cronEveryMinute.next("tick");
        //console.log('So according to this your 5 8 * * 0 would run 8:05 every Sunday');
      });

      return cronEveryMinute;
      
    }
    export const run_every_2_second = () => {
      const source = rx.timer(1000,2000);
      return source;
    }
    export const run_every_4_second = () => {
      const source = rx.timer(1000,4000);
      return source;
    }
    export const run_every_5_second = () => {
      const source = rx.timer(1000,5000);
      return source;
    }
    export const run_every_30_second = () => {
      const source = rx.timer(1000,30000);
      return source;
    }
    export const run_every_through_30_second = () => {
      const source = rx.timer(1000 * 30);
      return source;
    }
    export const run_once_through_2_hours = () => {
      const source = rx.timer(1000 * 7200);
      return source;
    }
    export const run_every_60_second = () => {
      const source = rx.timer(1000,60000);
      return source;
    }
    export const run_every_60_empty = () => {
      const source = rx.timer(60000,60000);
      return source;
    }
    export const run_every_sunday = () => {
      //* * * * *//run every minutes
      //5 8 * * 0
      cron.schedule('5 8 * * 0', () => {
        cronSundaySubject.next("tick");
        //console.log('So according to this your 5 8 * * 0 would run 8:05 every Sunday');
      });

      return cronSundaySubject;
    }
    export const run_every_day = () => {
      //* * * * *//run every minutes
      //5 8 * * 0
      cron.schedule('40 9 * * *', () => {
        cronSundaySubject.next("tick");
        //console.log('So according to this your 5 8 * * 0 would run 8:05 every Sunday');
      });

      return cronSundaySubject;
    }




