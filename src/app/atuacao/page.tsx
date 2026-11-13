"use client";
import {useState,useRef} from "react";
import { fronts } from "../fronts";
const contact = (message: string) => `https://wa.me/5571996692006?text=${encodeURIComponent(message)}`;
function Arrow() { return <span aria-hidden="true">↗</span>; }
export default function Page(){
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const front = fronts[selected];
return       <section id="atuacao" className="section work">
        <div className="section-heading"><p className="eyebrow">FRENTES DE ATUAÇÃO</p><h1 className="page-title">Diferentes competências.<br /><em>Uma visão em construção.</em></h1><p className="section-intro">Finanças se conectam a tecnologia, organização e comunicação. É nessa interseção que estruturamos nossa atuação.</p></div>
        <div className="front-tabs" role="tablist" aria-label="Frentes de atuação">{fronts.map((item, index) => <button key={item.name} id={`tab-${index}`} role="tab" aria-selected={selected === index} aria-controls={`panel-${index}`} tabIndex={selected === index ? 0 : -1} ref={el => { tabs.current[index] = el; }} onClick={() => setSelected(index)} onKeyDown={event => { let next = index; if(event.key === "ArrowRight") next = (index + 1) % fronts.length; else if(event.key === "ArrowLeft") next = (index + fronts.length - 1) % fronts.length; else if(event.key === "Home") next = 0; else if(event.key === "End") next = fronts.length - 1; else return; event.preventDefault(); setSelected(next); tabs.current[next]?.focus(); }}><span>0{index + 1}</span>{item.name}<span aria-hidden="true">↗</span></button>)}</div>
        <div className="front-panel" role="tabpanel" id={`panel-${selected}`} aria-labelledby={`tab-${selected}`} tabIndex={0} key={selected}><div><p className="eyebrow">{front.label}</p><h3>{front.title}</h3><div className="front-index" aria-hidden="true">0{selected + 1}<span>/04</span></div></div><div className="front-content"><p>{front.text}</p><ul>{front.topics.map(topic => <li key={topic}><span aria-hidden="true">+</span>{topic}</li>)}</ul><a className="text-link dark-link" href={contact(`Olá! Quero conhecer a frente de ${front.name} da CIMATEC Finance.`)} target="_blank" rel="noopener noreferrer">Converse sobre esta frente <Arrow /></a></div></div>
      </section>;
}