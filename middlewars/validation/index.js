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
          userLangu :Joivalidater.string()

        }
    )
    let userResult = schema.validate({userLangu})
    if (userResult.error) {
        throw new Error("validation: validateuserLanguageInTamil() ==> Invalide data type.")
        } else {
            console.log("validation passed");
            next()
        
    }

}
const validatefindEligibleStd =(req,res,next) =>{
    let userGender = req.body.userGender
    let userAge = req.body.userAge
    let userCountry = req.body.userCountry
    let userLanguage = req.body.userLanguage
    console.log(userGender,userAge,userCountry,userLanguage);
    let schema =Joivalidater.object(
        {
            userGender:Joivalidater.string(),
            userAge:Joivalidater.string(),
            userCountry:Joivalidater.string(),
            userLanguage:Joivalidater.string()
        }
    )  
    let result =  schema.validate({userGender,userAge,userCountry,userLanguage})
  if (result) {
    throw new Error("validation:validate eligible userdetail()==> invalid Data type")
    
  } else {
    console.log("validata Data");
    next()
    
  }

} 

const validatefindLanguKnow =(req,res,next) =>{

    let userLanguData = req.body.userLangu
    console.log(userLanguData);
let schema = Joivalidater.object(
    {
        userLanguData : Joivalidater.string()
    }
)
let resu = schema.validate({userLangu})
if(resu){
    throw new Error("validation:validate eligible userdetail()==> invalid Data type")

}else {
    console.log("validata Data");
    next()
    
  }


}


}



module.exports = {
    validateStudentAge,
    validateuserLanguageInTamil,
    validatefindEligibleStd,
    validatefindLanguKnow

}
