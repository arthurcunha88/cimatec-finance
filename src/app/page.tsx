"use client";

import { useEffect, useRef, useState } from "react";
import Publications from "./publications";

const fronts = [
  { name: "Tech & Quant", label: "TECNOLOGIA APLICADA A FINANÇAS", title: "Dados. Código.\nNovas perspectivas.", text: "Uma frente para estudar finanças quantitativas e mapear tecnologias e automações viáveis para a iniciativa. Matemática, programação e pensamento analítico encontram as questões do mercado financeiro.", topics: ["Estudos em finanças quantitativas", "Mapeamento de tecnologias", "Automações e eficiência"] },
  { name: "Processos e Projetos", label: "ESTRUTURA PARA FAZER ACONTECER", title: "Da intenção\nà execução.", text: "Organizar processos e dar forma a projetos é parte da construção da CIMATEC Finance. Esta frente conecta planejamento, acompanhamento e colaboração para transformar ideias em trabalho consistente.", topics: ["Organização de processos", "Planejamento de projetos", "Acompanhamento de iniciativas"] },
  { name: "Comunicação", label: "CONHECIMENTO QUE CIRCULA", title: "Boas ideias\nprecisam de diálogo.", text: "Construir uma comunicação clara entre estudantes, iniciativa e mercado. Um espaço para compartilhar conhecimento, aproximar pessoas e fortalecer a identidade institucional da CIMATEC Finance.", topics: ["Comunicação institucional", "Relacionamento com a comunidade", "Compartilhamento de conhecimento"] },
  { name: "Marketing", label: "PRESENÇA COM PROPÓSITO", title: "Uma iniciativa.\nMais alcance.", text: "Apresentar a CIMATEC Finance a quem pode fazer parte dessa construção. A frente de marketing trabalha a presença da iniciativa e a divulgação de suas propostas para o público universitário e o mercado.", topics: ["Posicionamento da iniciativa", "Divulgação de ações", "Conexão com novos públicos"] },
];
const navigation = [["iniciativa", "A iniciativa"], ["atuacao", "Atuação"], ["relatorios", "Relatórios"], ["newsletter", "Newsletter"]];
const contact = (message: string) => `https://wa.me/5571996692006?text=${encodeURIComponent(message)}`;
function Arrow() { return <span aria-hidden="true">↗</span>; }
function Photo({ label, className = "" }: { label: string; className?: string }) { return <div className={`photo ${className}`} role="img" aria-label={`Espaço reservado para fotografia: ${label}`}><span>{label}</span><span aria-hidden="true">+</span></div>; }

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const [paused, setPaused] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const front = fronts[selected];
  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="CIMATEC Finance — início"><span>CIMATEC</span><span>FINANCE<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? "Fechar −" : "Menu +"}</button>
      <nav id="navigation" aria-label="Navegação principal" className={menu ? "nav open" : "nav"} onKeyDown={event => { if (event.key === "Escape") { setMenu(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
        {navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setMenu(false)}>{label}</a>)}
        <a className="nav-contact" href="#contato" onClick={() => setMenu(false)}>Conecte-se <Arrow /></a>
      </nav>
    </header>
    <main id="conteudo">
      <section id="inicio" className={`hero ${paused ? "paused" : ""}`}>
        <div className="hero-top"><span>BAHIA, BRASIL</span><span>INICIATIVA ESTUDANTIL · SENAI CIMATEC</span></div>
        <div className="hero-body">
          <div className="hero-copy"><p className="eyebrow">CONHECIMENTO QUE CONECTA</p><h1>O próximo<br />movimento<br />começa <em>aqui.</em></h1><p className="hero-description">Uma nova perspectiva sobre o mercado financeiro.<br />Da universidade para as conexões que ampliam horizontes.</p><a className="text-link" href="#iniciativa">Conheça a CIMATEC Finance <span aria-hidden="true">↓</span></a></div>
          <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-axis" /><div className="art-caption">PENSAMENTO ANALÍTICO<br />VISÃO DE FUTURO</div><div className="art-cross">+</div></div>
        </div>
        <div className="hero-bottom"><span>FINANÇAS / TECNOLOGIA / CONEXÕES</span><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Retomar movimento" : "Pausar movimento"}</button><span className="scroll-note">EXPLORE <span aria-hidden="true">↓</span></span></div>
      </section>
      <section id="iniciativa" className="section about">
        <div className="section-heading"><p className="eyebrow">01 / A INICIATIVA</p><h2>O mercado é amplo.<br /><em>Nosso olhar também.</em></h2></div>
        <div className="about-grid"><Photo label="NOSSA COMUNIDADE" /><div className="about-copy"><p className="lead">Estudantes conectados pela curiosidade. Uma iniciativa movida pelo conhecimento.</p><p>A CIMATEC Finance é uma iniciativa estudantil do SENAI CIMATEC que aproxima o ambiente universitário do mercado financeiro.</p><p>Nosso objetivo é aprender, construir conexões, participar de eventos e abrir espaço para o diálogo com empresas do setor. Voltamos nosso olhar a pessoas interessadas em finanças nas universidades da Bahia.</p><a className="text-link dark-link" href="#atuacao">Explore nossas frentes <Arrow /></a><div className="signature"><span>ORIGEM ACADÊMICA</span><strong>SENAI CIMATEC <span>Salvador, Bahia</span></strong></div></div></div>
      </section>
      <section id="atuacao" className="section work">
        <div className="section-heading"><p className="eyebrow">02 / FRENTES DE ATUAÇÃO</p><h2>Diferentes competências.<br /><em>Uma visão em construção.</em></h2><p className="section-intro">Finanças se conectam a tecnologia, organização e comunicação. É nessa interseção que estruturamos nossa atuação.</p></div>
        <div className="front-tabs" role="tablist" aria-label="Frentes de atuação">{fronts.map((item, index) => <button key={item.name} id={`tab-${index}`} role="tab" aria-selected={selected === index} aria-controls={`panel-${index}`} tabIndex={selected === index ? 0 : -1} ref={el => { tabs.current[index] = el; }} onClick={() => setSelected(index)} onKeyDown={event => { let next = index; if(event.key === "ArrowRight") next = (index + 1) % fronts.length; else if(event.key === "ArrowLeft") next = (index + fronts.length - 1) % fronts.length; else if(event.key === "Home") next = 0; else if(event.key === "End") next = fronts.length - 1; else return; event.preventDefault(); setSelected(next); tabs.current[next]?.focus(); }}><span>0{index + 1}</span>{item.name}<span aria-hidden="true">↗</span></button>)}</div>
        <div className="front-panel" role="tabpanel" id={`panel-${selected}`} aria-labelledby={`tab-${selected}`} tabIndex={0} key={selected}><div><p className="eyebrow">{front.label}</p><h3>{front.title}</h3><div className="front-index" aria-hidden="true">0{selected + 1}<span>/04</span></div></div><div className="front-content"><p>{front.text}</p><ul>{front.topics.map(topic => <li key={topic}><span aria-hidden="true">+</span>{topic}</li>)}</ul><a className="text-link dark-link" href={contact(`Olá! Quero conhecer a frente de ${front.name} da CIMATEC Finance.`)} target="_blank" rel="noopener noreferrer">Converse sobre esta frente <Arrow /></a></div></div>
      </section>
      <section className="section experience" id="experiencias"><div className="section-heading"><p className="eyebrow">03 / ALÉM DA SALA DE AULA</p><h2>Conhecimento ganha valor<br /><em>quando encontra o mundo.</em></h2></div><div className="experience-grid"><article><Photo label="APRENDIZADO E TROCA" /><div className="experience-text"><span>01</span><div><h3>Aprender em conjunto</h3><p>Estudar o mercado financeiro, compartilhar perspectivas e desenvolver repertório técnico com outras pessoas interessadas no setor.</p></div></div></article><article><Photo label="EVENTOS E CONEXÕES" /><div className="experience-text"><span>02</span><div><h3>Ampliar horizontes</h3><p>Buscar proximidade com profissionais, eventos e empresas para compreender os diferentes caminhos que o mercado oferece.</p></div></div></article></div></section>
      <section className="section connections" id="conexoes"><div className="connection-top"><div><p className="eyebrow">04 / DIÁLOGO COM O MERCADO</p><h2>Conexões que abrem<br /><em>novas conversas.</em></h2></div><p>O contato com o mercado faz parte da nossa construção. Estas são empresas com as quais já tivemos contato.</p></div><div className="companies" aria-label="Empresas com as quais já tivemos contato">{["ACT Investimentos", "BTG Pactual", "XP", "Acqua Vero", "BP Investimentos", "G20"].map(company => <span key={company}>{company}</span>)}</div><p className="connection-note">Os contatos mencionados não representam parcerias institucionais ou endosso à iniciativa.</p></section>
      <Publications />
      <section className="section contact" id="contato"><p className="eyebrow">07 / FAÇA PARTE DA CONVERSA</p><div className="contact-heading"><h2>Seu próximo passo.<br /><em>Nossa próxima conexão.</em></h2><span className="contact-arrow" aria-hidden="true">↗</span></div><div className="contact-options"><a href={contact("Olá! Sou estudante e gostaria de conhecer a CIMATEC Finance e as possibilidades de participação.")} target="_blank" rel="noopener noreferrer"><span className="eyebrow">PARA ESTUDANTES</span><h3>Quero me aproximar <Arrow /></h3><p>Conheça a iniciativa e converse sobre possibilidades de participação.</p></a><a href={contact("Olá! Represento uma empresa e gostaria de conversar com a CIMATEC Finance sobre possibilidades de aproximação.")} target="_blank" rel="noopener noreferrer"><span className="eyebrow">PARA EMPRESAS E PROFISSIONAIS</span><h3>Vamos conversar <Arrow /></h3><p>Abra um diálogo sobre conhecimento, eventos e conexões com universitários.</p></a></div><div className="direct-contact"><span>CONTATO DIRETO</span><a href="tel:+5571996692006">(71) 99669-2006</a><span>As conversas são iniciadas pelo WhatsApp.</span></div></section>

    </main>
    <footer><a className="brand" href="#inicio"><span>CIMATEC</span><span>FINANCE<span className="brand-dot">.</span></span></a><p>Iniciativa estudantil do SENAI CIMATEC.<br />Salvador, Bahia.</p><a href="#inicio">Voltar ao início ↑</a></footer>
  </>;
}
