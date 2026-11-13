"use client";

import { useRef } from "react";
import { fronts } from "./fronts";
import "./home-discovery.css";

export default function AreaCarousel() {
  const track = useRef<HTMLUListElement>(null);

  function move(direction: number) {
    const list = track.current;
    const card = list?.firstElementChild;
    if (!list || !card) return;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap) });
  }

  return (
    <section className="section home-areas" aria-labelledby="home-areas-title">
      <div className="areas-heading">
        <h2 id="home-areas-title">Áreas da liga</h2>
        <div className="area-controls">
          <button type="button" aria-controls="areas-track" aria-label="Área anterior" onClick={() => move(-1)}>←</button>
          <button type="button" aria-controls="areas-track" aria-label="Próxima área" onClick={() => move(1)}>→</button>
        </div>
      </div>
      <ul id="areas-track" className="areas-track" ref={track} tabIndex={0} aria-label="Áreas de atuação, lista com rolagem horizontal" onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }}>
        {fronts.map((area) => (
          <li className="area-card" key={area.name}>
            <h3>{area.name}</h3>
            <p>{area.text}</p>
            <ul className="area-topics">
              {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </li>
        ))}
      </ul>
      <a className="text-link" href="/atuacao/">Veja como as áreas atuam <span aria-hidden="true">↗</span></a>
    </section>
  );
}
