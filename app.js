const express = require('express')
const bodyParser = require('body-parser')

const controllers = require('./controller/index')
const sanitization = require('./middlewars/sanitization/index')
const validater = require('./middlewars/validation/index')

const app = express()
app.use(bodyParser.json());
// nodemailer  ==> 30 - 60 
// verify , validation, auth, sanitize



app.get('/stdAge',
    sanitization.sanitization_xssStdAge,
    validater.validateStudentAge,
    controllers.stdAge)

app.get('/languageKnownInTamil', sanitization.sanitization_xsslanguageKnownInTamil, controllers.languageKnownInTamil)
app.get('/all-students', controllers.allStudents)
app.post('/findLang', sanitization.sanitization_xssfindLang, controllers.findLang)
app.post('/findEligibleStd', sanitization.sanitization_xssfindElibleStd, controllers.findEligibleStd)
app.post('/findDetail', sanitization.sanitization_xssfindDetail, controllers.findDetail)   // done

//  app.js == requsting , server , linking all documents


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


localhost:1998/all-students
www.studentapp.go/all-studentslocalhost:1998/all-students
localhost:1998/all-student
*/
