const moment = require('moment-timezone');

`(UTC${moment().tz(moment.tz.guess()).format('Z')}) ${moment.tz.guess()}` //(UTC+06:00) Asia/Dhaka

//moment.tz.guess() //Asia/Dhaka
//moment().tz(moment.tz.guess()).format('Z') //(UTC+06:00)
