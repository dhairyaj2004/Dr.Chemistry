import request from 'http';
import connection from "../../../../dbConnection/dbConnection";
import User from "../../../../models/loginModel";
import { NextRequest, NextResponse} from "next/server";
import bcryptjs from 'bcryptjs'
import sendEMail from "../../../../utils/mailer";
//bcryptjs is used to hash a password because no one stores passwords in strings

connection()
//each time when we want to work with db we have to connect it first. It doesn't like backend(node) that we have to connect only once.
async function POST(NextRequest){
    try {
        const reqBody=NextRequest.json()
        const {username,email,password}= await reqBody
        console.log(reqBody)
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"})
        }
        const salt=await bcryptjs.genSalt(10)
        //10-This number determines how many times the hashing algorithm will be applied  A higher number means more iterations and thus greater security but also more computational resources.
        //salt is a random string of characters or numbers that's added to a password before it's hashed and stored.
        const hashedPassword= await bcryptjs.hash(password,salt)
        const securedUser=new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser=securedUser.save();
        //send email for verification
        await sendEMail(
            {email,
            emailType:'VERIFY',
            userId: savedUser._id 
        })
        return NextResponse.json({
            message:"User registered successfully!!!",
            success:true,
            savedUser
        })
    } catch (error) {
        return NextResponse.json(error.message);
    }
}
export default POST