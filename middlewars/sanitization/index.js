const xss = require('xss')
const { findEligibleStd } = require('../../controller')


const sanitization_xssStdAge = (req,res,next)=>{
    let data = req.body.stdAge
    console.log(data)
    let cleanData = xss(data)
    console.log(cleanData)
    if (data == cleanData) {
        console.log("test passed")
        next();
    } else {
        throw new Error("xss attack")
    }



}
const sanitization_xsslanguageKnownInTamil = (req,res,next) =>{
    let element = req.body.userLangu
    console.log(element);

    let cleanElement = xss(element)
    console.log(cleanElement);
    if (element == cleanElement) {
        console.log("test passed");
        next()
        
    } else {
        throw new Error("xss attack")
        
    }
}
const sanitization_xssfindElibleStd = (req,res,next) =>{
    let sanitizeData =[req.body.userGender,req.body.userAge,req.body.userCountry,req.body.userLanguage]
    for (let index = 0; index < sanitizeData.length; index++) {
        const element = sanitizeData[index];
        let cleanedData = xss(element)
        if (element==cleanedData) {
            console.log("test passed");
            next()
        } else {
            throw new Error("xss attack")
            
        }
        
    }

    
    } 
    const sanitization_xssfindLang = (req,res,next) =>{
        let userLanguData = req.body.userLangu
        console.log(userLanguData);
        let cleanUesrLanguData = xss(userLanguData)
        if (userLanguData == cleanUesrLanguData) {
            console.log("testcase passed");
            next()
            
        } else {
            throw new Error("xss attack")
            
        }

    }

module.exports ={
    sanitization_xssStdAge,
    sanitization_xsslanguageKnownInTamil,
    sanitization_xssfindElibleStd,
    sanitization_xssfindLang
}