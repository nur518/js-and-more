//MongoDB
/* Data is a function */
Date() // date string format //'Sat Jun 18 2022 15:10:14 GMT+0600 (Bangladesh Standard Time)'

new Date // iso format //2022-06-18T09:10:50.981Z

ISODate() // iso format //2022-06-18T09:11:11.455Z



//JS
Date.now() // return milliseconds
new Date() // date string format

/* ISO to Milliseconds */
new Date('2022-06-18T09:11:11.455Z').getTime()

/* Milliseconds to ISO */
new Date(1655543471455).toISOString()
