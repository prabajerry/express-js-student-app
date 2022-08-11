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

module.exports ={
    sanitization_xssStdAge
}