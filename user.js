import { User } from "./userModal.js"
import { sendMail } from "./sendMail.js";

let OTP, user;
export const register = async(req, res)=>{
    
 try {
    const {email , password, name} = req.body;

   user = await User.findOne({email})
    if(user){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }
    
    let digit = '0123456789'
    OTP = ''
    for(let i = 0; i < 6; i++){
        OTP += digit[Math.floor(Math.random() * 10)]
    }
    await sendMail({
        email,
        subject: "OTP verfication code",
        message: `You verification code is ${OTP}`
    })
    
    user = new User({
        email,
        name,
        password
    })
     res.status(201).json({
         success: true,
         message: `Otp send successfully to ${email}`
     })
 } catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
 }

}

export const verifyOTP = async(req, res)=>{
    try {
        const {otp} = req.body;
        if(otp != OTP){
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            })
        }

     user.save()
     res.status(201).json({
        success: true,
        message: "User Registered successfully"
     })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}