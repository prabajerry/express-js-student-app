const utilFunctions = require('../utils/utilFunctions') //importing
const service = require('../service/index')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()




const findEligibleStd = (req, res) => {
    let userGender = req.body.userGender
    let userAge = req.body.userAge
    let userCountry = req.body.userCountry
    let userLanguage = req.body.userLanguage
    let eligibleUser = []

    for (let index = 0; index < studentsData.length; index++) {
        if (studentsData[index].gender === userGender) {

            if (studentsData[index].age >= userAge) {
                if (studentsData[index].country === userCountry) {
                    for (let j = 0; j < studentsData[index].langu.length; j++) {

                        if (studentsData[index].langu[j] === userLanguage) {
                            eligibleUser.push(studentsData[index])

                        }

                    }

                }

            }

        }
    }

    console.log("findEligibleStd ", utilFunctions.printDateAndTime());
    res.send(eligibleUser)
}

// "selet * from studentdata where name=$abc" 

const findDetail = (req, res) => { //veg
    let stdgender = req.body.stdgender
    let stdLangu = req.body.stdLangu
    let stdAge = req.body.stdAge

    let number = req.query.number
    const name = req.query.name
    console.log(number,name);
    console.log("im from env file",process.env.user_NAME)

    try {
        const possibleStudent = service.findDetailsStudentForAgeGenderLanguage(stdgender, stdLangu, stdAge)
        const responseData = {
            "requstingId": "STUDENTAPPLICATION-"+uuidv4(),
            "status": true,
            "data": possibleStudent
        }
        res.send(responseData)

    } catch (error) {
        throw "status : false, error: " + error, "requstingId:STUDENTAPPLICATION-" + uuidv4()
    }

    console.log("findDetail", utilFunctions.printDateAndTime());


}


const findLang = (req, res) => {
    let userLangu = req.body.langu
    console.log(userLangu);
    let lan = []
    for (let index = 0; index < studentsData.length; index++) {

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == userLangu) {
                lan.push(studentsData[index])
            }
        }
    }
    console.log("findLang", utilFunctions.printDateAndTime())
    lan.length ? res.send(lan) : res.send("no data")
}





const stdAge = (req, res) => {
    var age = []
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        if (studentsData[index].age >= 18) {
            age.push(studentsData[index])

        }
    }
    console.log("stdAge", utilFunctions.printDateAndTime);
    res.send(age)
}

const languageKnownInTamil = (req, res) => {
    let lan = []
    for (let index = 0; index < studentsData.length; index++) {//0

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == "tamil") {
                lan.push(studentsData[index])
            }
        }
    }
    res.send(lan)
}

const allStudents = (req, res) => {
    res.send(studentsData)
}

module.exports = {
    findEligibleStd, findDetail, findLang, stdAge, languageKnownInTamil, allStudents
}