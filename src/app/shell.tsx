"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./scroll-header.css";
import SiteFooter from "./site-footer";
const routes = [["/","Início"],["/iniciativa/","Iniciativa"],["/atuacao/","Atuação"],["/relatorios/","Relatórios"],["/newsletter/","Newsletter"],["/conexoes/","Conexões"]];
export default function Shell({children}:{children:React.ReactNode}) {
 const path = usePathname();
 const [open,setOpen] = useState(false);
 const [hidden, setHidden] = useState(false);

 useEffect(() => {
   let previousY = Math.max(0, window.scrollY);
   function onScroll() {
     const y = Math.max(0, window.scrollY);
     if (y <= 104) {
       setHidden(false);
     } else if (Math.abs(y - previousY) >= 8) {
       setHidden(y > previousY);
     } else {
       return;
     }
     previousY = y;
   }
   window.addEventListener("scroll", onScroll, { passive: true });
   return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return <>
 <a className="skip" href="#conteudo">Pular para o conteúdo</a>
 <header className="header scroll-header" data-hidden={hidden && !open}>
 <a className="header-brand" href="/" aria-label="CIMATEC Finance, início"><img className="brand-image" src="/brand/logo.svg" alt="CIMATEC Finance" width="110" height="64"/><span className="header-wordmark" aria-hidden="true"><span>CIMATEC</span><em>finance</em></span></a>
 <button className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open ? "Fechar" : "Menu"}</button>
 <nav id="navigation" className={open?"nav open":"nav"} aria-label="Navegação principal" onKeyDown={event=>{if(event.key==="Escape"){setOpen(false);document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();}}}>
 {routes.map(([href,label])=><a key={href} href={href} aria-current={path.replace(/\/$/,"")===href.replace(/\/$/,"")?"page":undefined}>{label}</a>)}
 </nav>
 </header>
 <main id="conteudo" tabIndex={-1}>{children}</main>
 <SiteFooter />
 </>;
}