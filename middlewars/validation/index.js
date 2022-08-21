const Joivalidater = require('joi')
const { validate } = require('uuid')

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
        console.log("validation passed");
        next()
    }


}
const validateuserLanguageInTamil = (req,res,next)=>{
    let userLangu = req.body.userLangu
    console.log(userLangu);
    let schema = Joivalidater.object(
        {
          userLangu :Joivalidater.string(),

        }
    )
    let userResult = schema.validate({userLangu})
    if (userResult.error) {
        throw new Error("validation: validateuserLanguageInTamil() ==> Invalide data type.")
        } else {
            console.log("validation passed");
            next
        
    }

}



module.exports = {
    validateStudentAge,
    validateuserLanguageInTamil
}
