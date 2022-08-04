const utilFunctions = require('../utils/utilFunctions')



const studentsData = [ //for i ==> studentsData . length //=> for ==> j studentsData[i].langu , if (tamil)
    {
        name: 'jhon',
        rollNumber: '1234567890',
        gender: 'male',
        age: 25,
        country: "india",
        langu: ['tamil', 'jarman', 'english']
    },
    {
        name: 'Vim',
        rollNumber: '1234567891',
        gender: 'male',
        age: 18,
        country: "united kingdom",
        langu: ['tamil', 'english']
    },
    {
        name: 'virs',
        rollNumber: '1234567892',
        gender: 'male',
        age: 18,
        country: "china",
        langu: ['gernan', 'english', 'tamil']
    },
    {
        name: 'ance',
        rollNumber: '1234567893',
        gender: 'female',
        age: 22,
        country: "amrica",
        langu: ['malayalam', 'english', 'tamil']
    },
]


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



const findDetail = (req, res) => {
    let stdgender = req.body.stdgender
    let stdLangu = req.body.stdLangu
    let stdAge = req.body.stdAge
    let possibleStudent = []
    for (let index = 0; index < studentsData.length; index++) {
        if (studentsData[index].gender === stdgender) {
            if (studentsData[index].age >= stdAge) {
                for (let j = 0; j < studentsData[index].langu.length; j++) {
                    if (studentsData[index].langu[j] === stdLangu) {
                        possibleStudent.push(studentsData[index])
                    }
                }
            }
        }

    }
    console.log("findDetail", utilFunctions.printDateAndTime());
    res.send(possibleStudent)

}

module.exports = {
    findEligibleStd, findDetail
}