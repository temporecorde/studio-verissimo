"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const whatsapp =
  "https://wa.me/5511951372029?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const services = [
  {
    number: "01",
    title: "Cortes especializados",
    description:
      "Visagismo e técnicas de corte que respeitam o caimento, o volume e o movimento natural de cada curvatura.",
    image: "/images/service-cut.jpg",
    alt: "Resultado de corte especializado em cabelo com curvatura",
  },
  {
    number: "02",
    title: "Mechas & iluminação",
    description:
      "Pontos de luz desenhados sob medida, com atenção à integridade e à saúde dos fios ondulados, cacheados e crespos.",
    image: "/images/service-color.jpg",
    alt: "Jéssica Veríssimo apresentando resultado de mechas em cabelo cacheado",
  },
  {
    number: "03",
    title: "Tratamento & spa",
    description:
      "Protocolos de recuperação, hidratação e fortalecimento definidos a partir da necessidade real do seu cabelo.",
    image: "/images/service-spa.jpg",
    alt: "Ritual profissional de cuidado para cabelos cacheados",
  },
];

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`arrow-icon ${dark ? "arrow-icon--dark" : ""}`} aria-hidden="true">
      ↗
    </span>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Studio Veríssimo, início">
          <span className="brand__name">Jéssica Veríssimo</span>
          <span className="brand__tag">Curvature studio</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#experiencia">Experiência</a>
          <a href="#servicos">Serviços</a>
          <a href="#jessica">Jéssica</a>
        </nav>

        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação mobile">
            <a href="#experiencia">Experiência</a>
            <a href="#servicos">Serviços</a>
            <a href="#jessica">Jéssica</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">Agendar horário ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Studio Veríssimo · Alphaville</p>
          <h1>
            A sua curvatura,
            <span> elevada à arte.</span>
          </h1>
          <p className="hero__lead">
            Cuidado especializado para cabelos ondulados, cacheados e crespos —
            com técnica, leitura individual e beleza sem padrões.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href={whatsapp} target="_blank" rel="noreferrer">
              Agendar uma avaliação <Arrow />
            </a>
            <a className="text-link" href="#servicos">Conhecer a experiência <span>↓</span></a>
          </div>
          <div className="hero__proof" aria-label="Destaques do Studio Veríssimo">
            <span><strong>10+</strong> anos de experiência</span>
            <span><strong>100%</strong> focado em curvaturas</span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Retrato de Jéssica Veríssimo">
          <div className="hero__halo" />
          <div className="hero__word" aria-hidden="true">VERÍSSIMO</div>
          {/* Static asset bypasses the incompatible image optimizer in the Sites runtime. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jessica-hero-v4.png"
            alt="Jéssica Veríssimo"
            width="600"
            height="800"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__signature">
            <span>Especialista em</span>
            <strong>beleza com identidade</strong>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <span>Corte especializado</span><i>✦</i><span>Mechas sob medida</span><i>✦</i>
          <span>Saúde dos fios</span><i>✦</i><span>Identidade natural</span><i>✦</i>
          <span>Corte especializado</span><i>✦</i><span>Mechas sob medida</span><i>✦</i>
          <span>Saúde dos fios</span><i>✦</i><span>Identidade natural</span><i>✦</i>
        </div>
      </div>

      <section className="manifesto section" id="experiencia">
        <p className="eyebrow" data-reveal>Uma nova relação com o seu cabelo</p>
        <h2 data-reveal>
          O luxo de se reconhecer
          <span> em cada detalhe.</span>
        </h2>
        <p className="manifesto__body" data-reveal>
          Aqui, o cabelo não precisa se encaixar. Cada atendimento começa pela escuta e
          termina com um resultado que preserva o que torna você única.
        </p>
        <div className="manifesto__line" data-reveal />
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--light" data-reveal>Nossa expertise</p>
            <h2 data-reveal>Técnica que<br /><em>revela.</em></h2>
          </div>
          <p data-reveal>
            Serviços desenhados para valorizar a forma, a textura e a expressão natural
            dos fios — sem apagar sua identidade.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" data-reveal key={service.number} style={{ "--delay": `${index * 110}ms` } as React.CSSProperties}>
              <div className="service-card__image">
                <Image src={service.image} alt={service.alt} width="900" height="1200" sizes="(max-width: 760px) 84vw, 31vw" />
                <span>{service.number}</span>
              </div>
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title}`}>
                  Quero este cuidado <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method section">
        <div className="method__intro">
          <p className="eyebrow" data-reveal>O ritual Veríssimo</p>
          <h2 data-reveal>Personalizado do início ao fim.</h2>
        </div>
        <div className="method__steps">
          <article data-reveal>
            <span>01</span>
            <h3>Escuta & diagnóstico</h3>
            <p>Entendemos a sua rotina, histórico, desejos e a resposta natural dos fios.</p>
          </article>
          <article data-reveal>
            <span>02</span>
            <h3>Técnica sob medida</h3>
            <p>Cada escolha respeita sua curvatura, proporções e identidade — nunca uma fórmula pronta.</p>
          </article>
          <article data-reveal>
            <span>03</span>
            <h3>Autonomia no dia a dia</h3>
            <p>Você sai entendendo como manter o resultado e cuidar do cabelo fora do salão.</p>
          </article>
        </div>
      </section>

      <section className="founder" id="jessica">
        <div className="founder__image" data-reveal>
          <Image
            src="/images/jessica-portrait.jpg"
            alt="Jéssica Veríssimo no Studio Veríssimo"
            width="1215"
            height="2160"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <div className="founder__stamp"><strong>10+</strong><span>anos de<br />experiência</span></div>
        </div>
        <div className="founder__copy">
          <p className="eyebrow" data-reveal>Por trás do Studio</p>
          <h2 data-reveal>Jéssica<br /><em>Veríssimo.</em></h2>
          <p className="founder__lead" data-reveal>
            Referência em cortes, mechas e tratamentos para cabelos com curvatura.
          </p>
          <p data-reveal>
            Há mais de uma década, Jéssica combina domínio técnico, olhar artístico e uma
            escuta genuína para criar resultados que não transformam a cliente em outra pessoa —
            revelam quem ela já é.
          </p>
          <p data-reveal>
            Sua experiência também ganha vida em workshops e conteúdos que elevam o padrão
            de profissionais da beleza em todo o país.
          </p>
          <a className="text-link text-link--dark" href="https://instagram.com/jessicaverissimo.oficial" target="_blank" rel="noreferrer" data-reveal>
            Conheça o trabalho no Instagram <span>↗</span>
          </a>
        </div>
      </section>

      <section className="principle section">
        <div className="principle__mark" aria-hidden="true">“</div>
        <h2 data-reveal>
          Saúde para os fios.<br />Liberdade para a sua <em>identidade.</em>
        </h2>
        <p data-reveal>
          O Studio Veríssimo não realiza relaxamento, alisamento ou procedimentos químicos
          destinados a retirar a curvatura natural dos cabelos.
        </p>
      </section>

      <section className="booking section" id="agendamento">
        <div className="booking__content">
          <p className="eyebrow eyebrow--light" data-reveal>Seu momento começa aqui</p>
          <h2 data-reveal>Pronta para viver a experiência <em>Veríssimo?</em></h2>
          <p data-reveal>
            Fale com nossa equipe e encontre o cuidado ideal para o momento do seu cabelo.
          </p>
          <a className="button button--light" href={whatsapp} target="_blank" rel="noreferrer" data-reveal>
            Agendar pelo WhatsApp <Arrow dark />
          </a>
        </div>
        <aside className="booking__details" data-reveal>
          <div>
            <span>Localização</span>
            <p>Avenida Anápolis, 100<br />Bethaville I · Barueri, SP</p>
          </div>
          <div>
            <span>Contato</span>
            <a href={whatsapp} target="_blank" rel="noreferrer">+55 11 95137-2029</a>
          </div>
          <div>
            <span>Instagram</span>
            <a href="https://instagram.com/jessicaverissimo.oficial" target="_blank" rel="noreferrer">@jessicaverissimo.oficial</a>
          </div>
        </aside>
      </section>

      <footer>
        <a className="brand brand--footer" href="#inicio">
          <span className="brand__name">Jéssica Veríssimo</span>
          <span className="brand__tag">Curvature studio</span>
        </a>
        <p>© {new Date().getFullYear()} Studio Veríssimo. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
