"use client";

import { useState } from "react";

export type Report = {
  title: string;
  summary: string;
  category: "Macroeconomia" | "Empresas e setores" | "Tech & Quant";
  date: string;
  authors: string;
  pdf: string;
};

// Adicione apenas relatórios revisados e arquivos reais em public/relatorios/.
const reports: Report[] = [];
const categories = ["Todos", "Macroeconomia", "Empresas e setores", "Tech & Quant"] as const;
const subscriptionUrl = process.env.NEXT_PUBLIC_NEWSLETTER_URL;
const safeSubscriptionUrl = subscriptionUrl?.startsWith("https://") ? subscriptionUrl : undefined;

export default function Publications() {
  const [category, setCategory] = useState<string>("Todos");
  const [query, setQuery] = useState("");
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const filtered = reports.filter(report => (category === "Todos" || report.category === category) && normalize(`${report.title} ${report.summary} ${report.authors}`).includes(normalize(query)));
  return <>
    <section id="relatorios" className="section reports">
      <div className="section-heading"><p className="eyebrow">05 / PUBLICAÇÕES</p><h2>Perspectivas que merecem<br /><em>uma leitura mais atenta.</em></h2><p className="section-intro">Um espaço para os relatórios e estudos da CIMATEC Finance. Análises para aprofundar o olhar sobre economia, empresas e tecnologia.</p></div>
      <div className="report-tools"><div className="report-filters" role="group" aria-label="Filtrar relatórios por tema">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="report-search"><span>Buscar relatórios</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Título, assunto ou autor" /></label></div>
      <div aria-live="polite" aria-atomic="true" className="report-count">{filtered.length} {filtered.length === 1 ? "relatório disponível" : "relatórios disponíveis"}</div>
      {filtered.length ? <div className="report-list">{filtered.map(report => <article key={report.pdf}><div className="eyebrow">{report.category} · <time dateTime={report.date}>{new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(report.date))}</time></div><h3>{report.title}</h3><p>{report.summary}</p><p className="report-authors">{report.authors}</p><a href={report.pdf} className="text-link dark-link" target="_blank" rel="noopener noreferrer">Ler relatório em PDF <span aria-hidden="true">↗</span></a></article>)}</div> : <div className="reports-empty"><span className="empty-symbol" aria-hidden="true">↳</span><div><h3>{reports.length ? "Nenhum relatório encontrado." : "As próximas análises têm lugar aqui."}</h3><p>{reports.length ? "Experimente outro tema ou termo de busca." : "Ainda não há relatórios publicados. Quando disponibilizados, você poderá consultar os estudos e acessar os arquivos nesta área."}</p>{(category !== "Todos" || query) && <button className="reset-filters" onClick={() => {setCategory("Todos");setQuery("");}}>Limpar filtros</button>}</div></div>}
    </section>
    <section id="newsletter" className="section newsletter"><div><p className="eyebrow">06 / CIMATEC FINANCE MAIL</p><h2>O mercado se move.<br /><em>Acompanhe a conversa.</em></h2><p className="section-intro">Nossa proposta de newsletter reúne notícias do mercado, novas publicações e conteúdos da iniciativa em uma leitura periódica por e-mail.</p><div className="newsletter-topics"><span>Panorama de mercado</span><span>Relatórios e estudos</span><span>Novidades da iniciativa</span></div></div><div className="newsletter-join"><span className="eyebrow">NA SUA CAIXA DE ENTRADA</span><h3>Mais contexto para<br />a sua próxima leitura.</h3>{safeSubscriptionUrl ? <><p>Cadastre seu e-mail na página de inscrição. A confirmação e as preferências de recebimento serão gerenciadas por lá.</p><a className="newsletter-button" href={safeSubscriptionUrl} target="_blank" rel="noopener noreferrer">Inscrever-se na newsletter <span aria-hidden="true">↗</span></a></> : <><p>A newsletter está em preparação. As inscrições e a periodicidade de envio ainda serão anunciadas.</p><a className="newsletter-button" href="https://wa.me/5571996692006?text=Ol%C3%A1!%20Tenho%20interesse%20na%20newsletter%20da%20CIMATEC%20Finance.%20Como%20posso%20acompanhar%20o%20lan%C3%A7amento%3F" target="_blank" rel="noopener noreferrer">Consultar lançamento <span aria-hidden="true">↗</span></a><p className="newsletter-note">Este contato abre o WhatsApp e não realiza uma inscrição.</p></>}</div></section>
  </>;
}
