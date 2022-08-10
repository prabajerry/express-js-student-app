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
    else
    {
        throw new Error("no data")
    }

   
}

module.exports ={
    findDetailsStudentForAgeGenderLanguage
}