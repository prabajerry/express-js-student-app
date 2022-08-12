const express = require('express')
const bodyParser = require('body-parser')

const controllers = require('./controller/index')
const middlewars = require('./middlewars/sanitization/index')

const app = express()
app.use(bodyParser.json());
// nodemailer  ==> 30 - 60 
// verify , validation, auth, sanitize
app.get('/stdAge', middlewars.sanitization_xssStdAge, controllers.stdAge)

app.post('/findLang', controllers.findLang)
//  app.js == requsting , server , linking all documents
app.post('/findDetail', controllers.findDetail)   // done
app.post('/findEligibleStd', controllers.findEligibleStd)
app.get('/languageKnownInTamil', controllers.languageKnownInTamil)
app.get('/stdAge', controllers.stdAge)
app.get('/all-students', controllers.allStudents)


app.listen(1998, () => {
    console.log("server is running..");
})

// post ('about-the-day,controller.aboutTheDay)
/*
{
    date:from user,
    time:from user,
    title:from user,
    dec:from user,
    feelings:from user,
    id:from code uuid()
}
*/


/*
get ==> open to all  (seen by all - may one data or n data) == url 

post ==> only end to end (only user and server , may be 1 data or n data) == body



*/