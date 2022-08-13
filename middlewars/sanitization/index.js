const xss = require('xss')


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
    let element =req.body.languageKnownInTamil
    console.log(element);

    let cleanElement = xss(element)
    console.log(cleanElement);
    if (element == cleanElement) {
        console.log("test passed");
        next()
        
    } else {
        throw new Errorr("xss attack")
        
    }
}

module.exports ={
    sanitization_xssStdAge,sanitization_xsslanguageKnownInTamil
}