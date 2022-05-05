import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
   }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {

      await transport.sendMail({
         from: "Equipe Feedget <oi@feedget.com>",
         to: "Diego Leonardo <diegolf125@gmail.com>",
         subject: subject,
         html: body
      })
   }
}