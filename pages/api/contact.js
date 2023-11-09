
// const mail = require('@sendgrid/mail');

// mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// export default async (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Message: ${body.message}
//   `;

//   try{
//     await mail.send({
//       to: 'info@dexterinc.com',
//       from: 'info@dexterinc.com',
//       subject: 'New Query from Dexter Digital Technologies!',
//       text: message,
//       html: message.replace(/\r\n/g, '<br>'),
//     });
//     res.status(200).json({ status: 'Ok' });
//   } catch(error){
//     res.status(400).json({ status: "ERROR", message: error.message });
//   }
// }
