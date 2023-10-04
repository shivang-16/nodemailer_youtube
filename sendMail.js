import nodemailer from 'nodemailer';

export const sendMail = async(options)=>{

    const tranporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        service: process.env.SMTP_SERVICE
    })

    const emailOptions = {
        from: process.env.SMTP_USER,
        to : options.email,
        subject : options.subject,
        text: options.message,
    }

    await tranporter.sendMail(emailOptions)
}
