const utilFunctions = require('../utils/utilFunctions') //importing
const service = require('../service/index')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()




const findEligibleStd = (req, res) => {
    let userGender = req.body.userGender
    let userAge = req.body.userAge
    let userCountry = req.body.userCountry
    let userLanguage = req.body.userLanguage



    console.log("findEligibleStd ", utilFunctions.printDateAndTime());
    try {
        const eligibleUser = service.findUserDetail(userLanguage, userAge, userCountry, userGender)
        const userResponce = {
            "status": true,
            "data": eligibleUser

        }
        res.send(userResponce)
    } catch (error) {
        throw error


    }

    res.send(eligibleUser)
}

// "selet * from studentdata where name=$abc" 

const findDetail = (req, res) => { //veg
    let stdgender = req.body.stdgender
    let stdLangu = req.body.stdLangu
    let stdAge = req.body.stdAge

    let number = req.query.number
    const name = req.query.name
    console.log(number, name);
    console.log("im from env file", process.env.user_NAME)

    try {
        const possibleStudent = service.findDetailsStudentForAgeGenderLanguage(stdgender, stdLangu, stdAge)
        const responseData = {
            "requstingId": "STUDENTAPPLICATION-" + uuidv4(),
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
    let userLangu = req.body.userLangu
    console.log("findLang", utilFunctions.printDateAndTime())
}
try {
    const lan = service.findLanguKnow(userLangu)
    const responcelangu = {
        "status": true,
        "data": lan
        
    }
    lan.length ? res.send(responcelangu) : res.send("no data")
    
} catch (error) {
          
}

const stdAge = (req, res) => {
    let stdAge = req.body.stdAge
    try {
        let listOfStudents = service.stdAge(stdAge)
        res.send(listOfStudents)
    } catch (error) {
        throw error
    }
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