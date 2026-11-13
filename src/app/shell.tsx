"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
const routes = [["/","Início"],["/iniciativa/","Iniciativa"],["/atuacao/","Atuação"],["/relatorios/","Relatórios"],["/newsletter/","Newsletter"],["/conexoes/","Conexões"]];
export default function Shell({children}:{children:React.ReactNode}) {
 const path = usePathname();
 const [open,setOpen] = useState(false);
 return <>
 <a className="skip" href="#conteudo">Pular para o conteúdo</a>
 <header className="header">
 <a href="/" aria-label="CIMATEC Finance, início"><img className="brand-image" src="/brand/logo.svg" alt="CIMATEC Finance" width="110" height="64"/></a>
 <button className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open ? "Fechar" : "Menu"}</button>
 <nav id="navigation" className={open?"nav open":"nav"} aria-label="Navegação principal" onKeyDown={event=>{if(event.key==="Escape"){setOpen(false);document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();}}}>
 {routes.map(([href,label])=><a key={href} href={href} aria-current={path.replace(/\/$/,"")===href.replace(/\/$/,"")?"page":undefined}>{label}</a>)}
 </nav>
 </header>
 <main id="conteudo" tabIndex={-1}>{children}</main>
 <footer><a href="/" aria-label="CIMATEC Finance, início"><img className="brand-image" src="/brand/logo.svg" alt="CIMATEC Finance" width="78" height="65"/></a><p>Iniciativa estudantil do SENAI CIMATEC · Salvador, Bahia</p><a href="/conexoes/#contato">Contato</a></footer>
 </>;
}