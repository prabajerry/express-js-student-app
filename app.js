const express = require('express')
const app = express()

// rout ==== /path

const studentsData = [
    {
        name: 'john',
        rollNumber: '1234567890',
        gender: 'male',
        age:12,
        langu:['tamil','english']
    },
    {
        name: 'Vim',
        rollNumber: '1234567891',
        gender: 'male',
        age:18,
        langu:['tamil','english']
    },
    {
        name: 'Anna',
        rollNumber: '1234567892',
        gender: 'female',
        age:18,
        langu:['gernan','english']
    },
    {
        name: 'ance',
        rollNumber: '1234567893',
        gender: 'female',
        age:22,
        langu:['malayalam','english']
    },


]


app.get('/all-students',(req,res)=>{
    res.send(studentsData)
})


app.get('/female-students',(req,res)=>{

    console.log(studentsData[3]);
    let femaleStudents=[]
    for (let index = 0; index < studentsData.length; index++) {
       console.log(studentsData[index]);
        if(studentsData[index].gender == 'female')
        {
            femaleStudents.push(studentsData[index])
        }
        
    }
   
    res.send(femaleStudents)

})



// write a get router to display above 18 years students in web page
app.get('/above-18',(req,res)=>{
    var age =[]
    for (let index = 0; index < studentsData.length; index++ ){
    console.log(studentsData[index]);
    if (studentsData[index].age >= 18) {
        age.push(studentsData[index])
        
    }}
    res.send(age)
})   



// write a get rounter to show all the sudents who knows tamil language in web page.
// hint ===> for inside for
app.get('/ languageKnownInTamil',(req,res)=>{
    let lan =[]
    for (let index = 0; index < studentsData.length; index++) {
        console.log(studentsData[index]);
        for (let index = 0; index < langu.length; index++) {
            if (studentsData[[index].lan = "tamil"]) {
                lan.push(studentsData[index])

                
            }
            
            
        }
        
    }
    res.send(lan)
})



app.listen(1998)