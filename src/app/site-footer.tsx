import { whatsapp } from "./contact-cta";
import "./site-footer.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="/">
        <img src="/brand/logo-marfim.svg" alt="" width={48} height={48} />
        <span>CIMATEC Finance</span>
      </a>
      <nav aria-label="Contato e redes sociais">
        <a href={whatsapp("Oi, Bernardo! Gostaria de conversar sobre a CIMATEC Finance.")}>
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21l1.4-4.5a9 9 0 1 1 3.1 3.1L3 21Z"/><path d="M8 7c-3 2 3 9 6 9 1 0 2-1 2-2l-3-2-1 1c-1-.4-2-1.4-2.5-2.5l1-1L9 7Z" fill="currentColor" stroke="none"/></svg>
          Entre em contato
        </a>
        <a className="footer-icon" href="https://www.linkedin.com/company/cimatec-finance/" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7m0-10h.01M12 17v-7m0 3c0-4 5-4 5 0v4"/></svg></a>
        <a className="footer-icon" href="https://www.instagram.com/cimatecfinance/" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></svg></a>
        <a className="footer-icon" href="mailto:cimatecfinance@gmail.com" aria-label="E-mail" title="E-mail"><svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
      </nav>
      <span className="footer-senai" role="img" aria-label="SENAI CIMATEC Universidade" />
    </footer>
  );
}
