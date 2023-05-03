"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class EmailService {
    sendEmail(emailTo, theSubject, theHTML) {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(Env_1.default.get('SENDGRID_API_KEY'));
        const msg = {
            to: emailTo,
            from: Env_1.default.get('SENDGRID_FROM_EMAIL'),
            subject: theSubject,
            html: theHTML,
        };
        sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent');
        })
            .catch((error) => {
            console.error(error);
        });
    }
}
exports.default = EmailService;
//# sourceMappingURL=EmailService.js.map