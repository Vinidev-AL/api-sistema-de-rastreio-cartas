import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  async sendWelcomeEmail(to: string, name: string) {
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to,
      subject: 'Welcome!',
      text: `Hello ${name}, welcome to our platform!`,
    };
    return this.transporter.sendMail(mailOptions);
  }
}