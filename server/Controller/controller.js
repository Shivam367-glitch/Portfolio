const users=require('../models/userSchema');
require('dotenv').config()
const nodemailer=require('nodemailer');

// Email configuration 
const transporter=nodemailer.createTransport({ 
    service:'gmail', 
    auth:{ 
        user:process.env.USER,
        pass:process.env.PASS
    } 
});


const register=async(req,res)=>{  
    const{FirstName,LastName,Email,Phone,Message}=req.body; //which are reciving what ever user will fill in contact form 
    if(!FirstName|| !LastName|| !Email){   
       res.status(401).json({status:401,error:"All input require"})
    }  
    else{ 
        const mailOptions={ 
            from:process.env.USER,
            to:'txt2shivam@gmail.com', 
            subject:"Feedback to Shivam Mishra", 
            text:`${Email}+" "+${Message}`
        } 
        try {
            const preuser=await users.findOne({Email:Email}); 
            if(preuser){ 
                // when user already exist in database then we do not store student in database but simply send a mail to user and store data of user in database
                const userMessage=await preuser.MessageSave(Message);    
                transporter.sendMail(mailOptions,(error,info)=>{ 
                    if (error) {
                        console.log(error); 

                    } else {
                        console.log("Email Sent"+ info.response); 
                        res.status(201).json({status:201,message:"Email sent Sucessfully"});
                    }
                });
            }else{ 
                const finalUser=new users({FirstName,LastName,Email,Phone,Message}); 
                const storeData=await finalUser.save(); 
                transporter.sendMail(mailOptions,(error,info)=>{ 
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email Sent"+ info.response); 
                        res.status(201).json({status:201,message:"Email sent Sucessfully"});
                    }
                });
                 res.status(201).json({status:201,storeData});
            }
        } catch (error) { 
            console.log(error.message);
            res.status(401).json({status:401,error:"fill vaild data"})
        }
    }
    }


    module.exports={register}

