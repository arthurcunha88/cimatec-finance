"use client";
import {useState} from "react";
import Team from "./team";
import AreaCarousel from "./area-carousel";
import ContactCTA from "./contact-cta";
export default function Home(){
 const [paused,setPaused]=useState(false);
 return <>      <section id="inicio" className={`hero ${paused ? "paused" : ""}`}>
        
        <div className="hero-body">
          <div className="hero-copy"><h1>O próximo<br />movimento<br />começa <em>aqui.</em></h1><p className="hero-description">Uma nova perspectiva sobre o mercado financeiro.<br />Da universidade para as conexões que ampliam horizontes.</p><a className="text-link" href="#sobre">Conheça a CIMATEC Finance <span aria-hidden="true">↓</span></a></div>
          <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-axis" /></div>
        </div>
        <div className="hero-bottom"><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Retomar movimento" : "Pausar movimento"}</button></div>
      </section>
 <section id="sobre" className="section home-about" aria-labelledby="sobre-title">
   <h2 id="sobre-title">Sobre a CIMATEC Finance</h2>
   <p>Somos uma liga estudantil do SENAI CIMATEC, em Salvador. Aproximamos universitários da Bahia do mercado financeiro por meio de formação, projetos e conexões com profissionais do setor.</p>
   <p>Na liga, os membros desenvolvem repertório em finanças por meio de estudos de mercado, análises de empresas e projetos em equipe. As frentes de atuação conectam essa formação à prática, da análise de dados à divulgação do conhecimento produzido.</p>
   <a className="text-link" href="/iniciativa/">Conheça a iniciativa <span aria-hidden="true">↗</span></a>
 </section>
 <AreaCarousel />
 <section className="section portal"><h2>Explore a CIMATEC Finance</h2><div className="portal-links"><a href="/iniciativa/">Iniciativa<span aria-hidden="true">↗</span></a>
<a href="/atuacao/">Atuação<span aria-hidden="true">↗</span></a>
<a href="/relatorios/">Relatórios<span aria-hidden="true">↗</span></a>
<a href="/newsletter/">Newsletter<span aria-hidden="true">↗</span></a>
<a href="/conexoes/">Conexões<span aria-hidden="true">↗</span></a></div></section>
 <Team />
 <section className="section contact" aria-labelledby="home-contact-title">
   <h2 id="home-contact-title">Entre em contato com a liga</h2>
   <ContactCTA />
 </section>
 <section className="section home-newsletter" aria-labelledby="home-newsletter-title">
   
   <h2 id="home-newsletter-title">Newsletter da CIMATEC Finance</h2>
   <p>Panorama de mercado, relatórios e novidades da liga, reunidos para leitura por e-mail.</p>
   <a className="newsletter-button" href="/newsletter/">Acompanhe a newsletter <span aria-hidden="true">↗</span></a>
 </section>
 </>;
}