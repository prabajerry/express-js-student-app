// service 
const studentsData = [
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

const findDetailsStudentForAgeGenderLanguage = (stdgender, stdLangu, stdAge) => { //veg

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

    if (possibleStudent.length) {
        return possibleStudent
    }
    else {
        throw new Error("no data")
    }


}
const findUserDetail = (userLanguage, userAge, userCountry, userGender) => {
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
    return eligibleUser

}
const findLanguKnow = (userLangu) => {
    let lan = []
    for (let index = 0; index < studentsData.length; index++) {

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == userLangu) {
                lan.push(studentsData[index])
            }
        }
    }
    if (lan.length) {
        return lan
    } else {
        throw new Error("no data")
        
    }
}

const stdAge = () => {
    var age = []
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        if (studentsData[index].age >= 18) {
            age.push(studentsData[index])

        }
    }
    if (age.length) {
        return age
    } else {
        throw new Error("no data")
    }
}

const userLanguageInTamil = () => {
    let langu = []
    for (let index = 0; index < studentsData.length; index++) {//0

        for (let j = 0; j < studentsData[index].langu.length; j++) {
            if (studentsData[index].langu[j] == "tamil") {
                langu.push(studentsData[index])
            }
        }
    }
    if (langu.length) {
        
        return langu
    } else {
        throw new Error("no data")
        
    }
}
const allStdData =()=>{
    return studentsData
}


module.exports = {
    findDetailsStudentForAgeGenderLanguage, 
    findUserDetail, 
    findLanguKnow, 
    stdAge,
    userLanguageInTamil,
    allStdData
}