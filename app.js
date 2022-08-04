const express = require('express') // importing --- import
const bodyParser = require('body-parser');
const controllers = require('./controller/index')

const app = express()
app.use(bodyParser.json());
// rout ==== /path




app.get('/all-students', (req, res) => {
    res.send(studentsData)
})




// write a get router to display above 18 years students in web page
app.get('/stdAge', (req, res) => {
    var age = []
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        if (studentsData[index].age >= 18) {
            age.push(studentsData[index])

        }
    }
    res.send(age)
})


app.get('/languageKnownInTamil', (req, res) => {
    let lan = []
    for (let index = 0; index < studentsData.length; index++) {//0

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == "tamil") {
                lan.push(studentsData[index])
            }
        }
    }
    res.send(lan)
})

// post request ==> user send requst ==> server (we) ++> if data we data || no data found
// middlewars
// app.post('/findLang', (req, res) => {
//     let userLangu = req.body.langu
//     console.log(userLangu);

//     let lan = []
//     for (let index = 0; index < studentsData.length; index++) {//0

//         for (let j = 0; j < studentsData[index].langu.length; j++) {
//             if (studentsData[index].langu[j] == userLangu) {
//                 lan.push(studentsData[index])
//             }
//         }
//     }
//     // if lang is empty then server shuld send no data 
//     // res.send(lan)
//     lan.length ? res.send(lan) : res.send("no data")

// })
app.get('/stdAge',controllers)
app.post('/findLang',controllers.findLang)
app.post('/findDetail',controllers.findDetail)
app.post('/findEligibleStd',controllers.findEligibleStd)

app.listen(1998, () => {
    console.log("server is running..");
})


/*
data=[{[]},{[]}...]
log ==>print all
single data || array[]==> for loop || data[i].arry.length ==> for 
*/