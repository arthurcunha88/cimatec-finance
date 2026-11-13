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
      <div className="section-heading"><h1 className="page-title">Perspectivas que merecem<br /><em>uma leitura mais atenta.</em></h1><p className="section-intro">Um espaço para os relatórios e estudos da CIMATEC Finance. Análises para aprofundar o olhar sobre economia, empresas e tecnologia.</p></div>
      <div className="report-tools"><div className="report-filters" role="group" aria-label="Filtrar relatórios por tema">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="report-search"><span>Buscar relatórios</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Título, assunto ou autor" /></label></div>
      <div aria-live="polite" aria-atomic="true" className="report-count">{filtered.length} {filtered.length === 1 ? "relatório disponível" : "relatórios disponíveis"}</div>
      {filtered.length ? <div className="report-list">{filtered.map(report => <article key={report.pdf}><div className="eyebrow">{report.category} · <time dateTime={report.date}>{new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(report.date))}</time></div><h3>{report.title}</h3><p>{report.summary}</p><p className="report-authors">{report.authors}</p><a href={report.pdf} className="text-link dark-link" target="_blank" rel="noopener noreferrer">Ler relatório em PDF <span aria-hidden="true">↗</span></a></article>)}</div> : <div className="reports-empty"><span className="empty-symbol" aria-hidden="true">↳</span><div><h3>{reports.length ? "Nenhum relatório encontrado." : "As próximas análises têm lugar aqui."}</h3><p>{reports.length ? "Experimente outro tema ou termo de busca." : "Ainda não há relatórios publicados. Quando disponibilizados, você poderá consultar os estudos e acessar os arquivos nesta área."}</p>{(category !== "Todos" || query) && <button className="reset-filters" onClick={() => {setCategory("Todos");setQuery("");}}>Limpar filtros</button>}</div></div>}
    </section>
</>;
}
