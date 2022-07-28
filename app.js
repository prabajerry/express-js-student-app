const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
// rout ==== /path

const studentsData = [ //for i ==> studentsData . length //=> for ==> j studentsData[i].langu , if (tamil)
    {
        name: 'john',
        rollNumber: '1234567890',
        gender: 'male',
        age: 12,
        langu: ['tamil', 'english']
    },
    {
        name: 'Vim',
        rollNumber: '1234567891',
        gender: 'male',
        age: 18,
        langu: ['tamil', 'english']
    },
    {
        name: 'Anna',
        rollNumber: '1234567892',
        gender: 'female',
        age: 18,
        langu: ['gernan', 'english']
    },
    {
        name: 'ance',
        rollNumber: '1234567893',
        gender: 'female',
        age: 22,
        langu: ['malayalam', 'english']
    },
]


app.get('/all-students', (req, res) => {
    res.send(studentsData)
})


app.get('/female-students', (req, res) => {

    console.log(studentsData[3]);
    let femaleStudents = []
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        if (studentsData[index].gender == 'female') {
            femaleStudents.push(studentsData[index])
        }

    }

    res.send(femaleStudents)

})



// write a get router to display above 18 years students in web page
app.get('/above-18', (req, res) => {
    var age = []
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        if (studentsData[index].age >= 18) {
            age.push(studentsData[index])

        }
    }
    res.send(age)
})



// write a get rounter to show all the sudents who knows tamil language in web page.
// hint ===> for inside for
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
app.post('/findLang', (req, res) => {
    let userLangu = req.body.langu
    console.log(userLangu);

    let lan = []
    for (let index = 0; index < studentsData.length; index++) {//0

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == userLangu) {
                lan.push(studentsData[index])
            }
        }
    }
    // if lang is empty then server shuld send no data 
    // res.send(lan)
    lan.length ? res.send(lan) : res.send("no data")

})


// write a post requste to find eligible users condition user must be female  and the same user must know english ||
app.listen(1998,()=>{
    console.log("server is running..");
})


/*
data=[{[]},{[]}...]
log ==>print all
single data || array[]==> for loop || data[i].arry.length ==> for 
*/