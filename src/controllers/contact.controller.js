import { Contact } from "../models/index.js";
import nodemailer from "nodemailer";
import env from "../config/env.js";

const transport = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: true,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASSWORD,
  },
});

export const creerDemandeContactEtEnvoyerMail = async (requete, reponse) => {
  try {
    const nouveauContact = await Contact.create(requete.body);

    await transport.sendMail({
      from: env.MAIL_FROM,
      to: env.MAIL_TO,
      subject: "Nouvelle prise de contact via le site",
      text: "Bonjour, ceci est un texte HTML", // Au cas où l'html ne passe pas
      html: `
                <p>Cette utilisateur a tenté de prendre contact avec vous.</p>
                <ul>
                    <li>Prénom : ${nouveauContact.prenom}</li>
                    <li>Nom : ${nouveauContact.nom}</li>
                    <li>Numéro de téléphone : ${nouveauContact.telephone}</li>
                    <li>Email : ${nouveauContact.email}</li>
                    <li>Message : ${nouveauContact.message}</li>
                </ul>
            `,
    });

    reponse.status(201).json(nouveauContact);
  } catch (erreur) {
    console.log(erreur);
    reponse.status(500).json({
      error: "Erreur lors de l'envoi",
      trace: erreur,
    });
  }
};
