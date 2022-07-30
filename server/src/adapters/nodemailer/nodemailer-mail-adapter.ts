import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter"

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2a6d663747569e",
    pass: "66076d5e348921"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Henry Bernado <henrybernardolk@gmail.com>',
      subject: subject,
      html: body,
       });
  }
} 