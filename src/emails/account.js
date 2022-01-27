const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=> {
    sgMail.send({
        to: email,
        from: 'rhlaroya@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rhlaroya@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Hi ${name}, thank you for being a part of my app. Is there a way for me to enhance the user experience? `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}

