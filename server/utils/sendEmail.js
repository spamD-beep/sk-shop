import nodemailer from 'nodemailer'
const sendEmail= async(to,subject,text)=>{
    try {
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.Email,
                pass:process.env.Pass
            },
        })
        await transporter.sendMail({
            from:process.env.Email,
            to,
            subject,
            text
        });
        console.log("Email send successfully")
    } catch (error) {
        console.error("Email error",error)
    }
}
export default sendEmail