import { whatsapp } from "./contact-cta";
import "./site-footer.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="/">
        <img src="/brand/logo.svg" alt="" width={48} height={48} />
        <span>CIMATEC Finance</span>
      </a>
      <nav aria-label="Contato e redes sociais">
        <a href={whatsapp("Oi, Bernardo! Gostaria de conversar sobre a CIMATEC Finance.")}>
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21l1.4-4.5a9 9 0 1 1 3.1 3.1L3 21Z"/><path d="M8 7c-3 2 3 9 6 9 1 0 2-1 2-2l-3-2-1 1c-1-.4-2-1.4-2.5-2.5l1-1L9 7Z" fill="currentColor" stroke="none"/></svg>
          Entre em contato
        </a>
        <a href="https://www.linkedin.com/company/cimatec-finance/">LinkedIn</a>
        <a href="https://www.instagram.com/cimatecfinance/">Instagram</a>
        <a href="mailto:cimatecfinance@gmail.com">E-mail</a>
      </nav>
      <span className="footer-senai" role="img" aria-label="SENAI CIMATEC Universidade" />
    </footer>
  );
}
