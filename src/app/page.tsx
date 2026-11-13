"use client";
import {useState} from "react";
import Team from "./team";
import ContactCTA from "./contact-cta";
export default function Home(){
 const [paused,setPaused]=useState(false);
 return <>      <section id="inicio" className={`hero ${paused ? "paused" : ""}`}>
        <div className="hero-top"><span>BAHIA, BRASIL</span><span>INICIATIVA ESTUDANTIL · SENAI CIMATEC</span></div>
        <div className="hero-body">
          <div className="hero-copy"><p className="eyebrow">CONHECIMENTO QUE CONECTA</p><h1>O próximo<br />movimento<br />começa <em>aqui.</em></h1><p className="hero-description">Uma nova perspectiva sobre o mercado financeiro.<br />Da universidade para as conexões que ampliam horizontes.</p><a className="text-link" href="#sobre">Conheça a CIMATEC Finance <span aria-hidden="true">↓</span></a></div>
          <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-axis" /><div className="art-caption">PENSAMENTO ANALÍTICO<br />VISÃO DE FUTURO</div><div className="art-cross">+</div></div>
        </div>
        <div className="hero-bottom"><span>FINANÇAS / TECNOLOGIA / CONEXÕES</span><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Retomar movimento" : "Pausar movimento"}</button><span className="scroll-note">EXPLORE <span aria-hidden="true">↓</span></span></div>
      </section>
 <section id="sobre" className="section home-about" aria-labelledby="sobre-title">
   <h2 id="sobre-title">Sobre a CIMATEC Finance</h2>
   <p>Somos uma liga estudantil do SENAI CIMATEC, em Salvador. Aproximamos universitários da Bahia do mercado financeiro por meio de formação, projetos e conexões com profissionais do setor.</p>
   <a className="text-link" href="/iniciativa/">Conheça a iniciativa <span aria-hidden="true">↗</span></a>
 </section>
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
 </>;
}