import "./contact-cta.css";

export const emailAddress = "cimatecfinance@gmail.com";
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

export const whatsapp = (message: string) => `https://wa.me/5571996692006?text=${encodeURIComponent(message)}`;

export default function ContactCTA() {
  return (
    <div className="league-contact">
      <div className="league-contact-actions">
        <a href={whatsapp("Oi, Bernardo! Tenho interesse em conhecer a CIMATEC Finance. Podemos conversar?")} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
        <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer">{emailAddress}</a>
      </div>
      <p>WhatsApp da Presidência · Bernardo Almeida</p>
    </div>
  );
}
