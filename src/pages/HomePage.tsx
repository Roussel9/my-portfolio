import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../i18n/content';
import { usePreferences } from '../state/PreferencesContext';
import { assetUrl } from '../utils/assetUrl';

export default function HomePage() {
  const { lang } = usePreferences();
  const t = content[lang];

  return (
    <div className="container">
      <div
        className="hero surface"
        style={{ backgroundImage: `url('${assetUrl('assets/images/bg.webp')}')` }}
      >
        <div className="heroInner">
          <div>
            <h1 className="heroTitle">{t.hero.title}</h1>
            <p className="heroSubtitle">{t.hero.subtitle}</p>
            <div className="pillRow" aria-label="Highlights">
              {t.hero.pills.map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
              <Link to="/projects" className="btnPrimary">
                <i className="fa-solid fa-diagram-project" /> {t.hero.ctaProjects}
              </Link>
              <a className="btnGhost" href={assetUrl('assets/docs/lebenslauf.pdf')} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-download" /> {t.about.downloadCv}
              </a>
            </div>
          </div>

          <div className="softCard">
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 950 }}>{t.home.highlightsTitle}</h3>
            <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
              {t.home.highlights.map((h) => (
                <div
                  key={h.title}
                  style={{
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: 16,
                    padding: 14,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 900 }}>{h.title}</div>
                    <div style={{ fontWeight: 950, color: 'var(--accent2)' }}>{h.value}</div>
                  </div>
                  <div style={{ marginTop: 6, color: 'var(--muted)', lineHeight: 1.4 }}>{h.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14 }}>
              <Link to="/contact" className="btnPrimary" style={{ width: '100%' }}>
                <i className="fa-solid fa-envelope" /> {t.hero.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: 6 }}>
              {t.about.title}
            </h2>
            <p className="sectionSub">{t.about.intro}</p>
          </div>
        </div>

        <div className="grid2">
          <div className="surface cardPad">
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.skillsTitle}</h3>
            <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
              {t.about.skills.map((s) => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                    <div style={{ fontWeight: 800 }}>{s.name}</div>
                    <div style={{ color: 'var(--muted)', fontWeight: 800 }}>{s.level}%</div>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: 'rgba(10,102,255,0.12)', border: '1px solid rgba(10,102,255,0.18)' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${s.level}%`,
                        borderRadius: 999,
                        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface cardPad">
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.timelineTitle}</h3>
            <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
              {t.about.timelineEducation.slice(0, 2).map((it) => (
                <div key={it.date} style={{ padding: 12, borderRadius: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontWeight: 950 }}>{it.date}</div>
                  <div style={{ marginTop: 6, color: 'var(--muted)' }}>{it.text}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/about" className="btnPrimary" style={{ flex: 1 }}>
                  <i className="fa-solid fa-user" /> {t.nav.about}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">{t.footer.copyright}</div>
      </footer>
    </div>
  );
}

