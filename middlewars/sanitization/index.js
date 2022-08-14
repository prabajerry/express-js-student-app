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
    let userData = req.body.userGender
    console.log(userData);
    let cleanUserData = xss(userData)
    console.log(cleanUserData);
    if (userData == cleanUserData) {
        console.log("data is passed");
        next()
        
    } else {
        throw new Error("xss attack")
        
    }        
    } 

module.exports ={
    sanitization_xssStdAge,sanitization_xsslanguageKnownInTamil,sanitization_xssfindElibleStd
}