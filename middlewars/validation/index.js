const Joivalidater = require('joi')

//  rule ===  input student age == 12 || age must be sting 
const validateStudentAge = (req, res, next) => {
   
    let stdAge = req.body.stdAge 
    let studetNumber = req.body.stdNumber
// ------------------------------------------------------------------  (1) get user data in variable


    let schema = Joivalidater.object(
        { 
        stdAge: Joivalidater.string() , // only string,
        stdNumber:Joivalidater.string()
    }
    )
    // --------------------------------------------------------------- (2) rulebook new rule adding 

    let result = schema.validate({ stdAge ,studetNumber})  // if else  ==> correct ==> error obj willnot send // error objct will be sent
    // ---------------------------------------------------------------- (3)  rulebookla pass 


    if (result.error)  
    {
        throw new Error("validation: validateStudentAge() ==> Invalide Data type.")
    }
    else {
        console.log("valiudation passed");
        next()
    }


}


module.exports = {
    validateStudentAge
}
