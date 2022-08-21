const xss = require('xss')
const helper = require("./helper/sanitizer.helper")

const sanitization_xssStdAge = (req, res, next) => {

    if (req.body.stdAge) { // true or false
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
    else {
        throw new Error("empty data")

    }


}
const sanitization_xsslanguageKnownInTamil = (req, res, next) => {

    if (req.body.userLangu) {

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
    else {
        throw new Error("empty data")
    }
}
const sanitization_xssfindElibleStd = (req, res, next) => {    
    let sanitizeData = [req.body.userGender, req.body.userAge, req.body.userCountry, req.body.userLanguage]
        try {
            const checkLength = helper.findArrayLength(sanitizeData)

            if (checkLength) {
                for (let index = 0; index < sanitizeData.length; index++) {
                    const element = sanitizeData[index];
                    let cleanedData = xss(element)
                    if (element == cleanedData) {
                        next()
                    } else {
                        throw new Error("xss attack")
                    }
                }
            }
            
        } catch (error) {
            throw error
        }
        


}
const sanitization_xssfindDetail = (req, res, next) => {  // task
    let sanitizeStuentData = [req.body.stdgender, req.body.stdLangu, req.body.stdAge]
    for (let index = 0; index < sanitizeStuentData.length; index++) {
        const element = sanitizeStuentData[index];
        let cleanstdData = xss(element)
        if (element == cleanstdData) {
            console.log("test passed");
            next()
        } else {
            throw new Error("xss attack")

        }

    }

}
const sanitization_xssfindLang = (req, res, next) => {
    if (req.body.userLangu) {
        
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
    else{
        throw new Error("empty data")
    }

}

module.exports = {
    sanitization_xssStdAge,
    sanitization_xsslanguageKnownInTamil,
    sanitization_xssfindElibleStd,
    sanitization_xssfindLang,
    sanitization_xssfindDetail,

}