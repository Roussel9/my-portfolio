import React from 'react';
import { content } from '../i18n/content';
import { usePreferences } from '../state/PreferencesContext';
import { assetUrl } from '../utils/assetUrl';

export default function AboutPage() {
  const { lang } = usePreferences();
  const t = content[lang];

  return (
    <div className="container">
      <div className="section">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">{t.about.title}</h2>
            <p className="sectionSub">{t.about.intro}</p>
          </div>
        </div>

        <div className="grid2" style={{ alignItems: 'start' }}>
          <div className="surface cardPad">
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <img
                src={assetUrl('assets/images/me.png')}
                alt="Portrait"
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              />
              <div>
                <div style={{ fontWeight: 1000, fontSize: 18, letterSpacing: '-0.01em' }}>Roussel Dongmo</div>
                <div style={{ color: 'var(--muted)', marginTop: 6, fontWeight: 650 }}>Software Engineer & AI</div>
                <a className="btnPrimary" href={assetUrl('assets/docs/lebenslauf.pdf')} target="_blank" rel="noreferrer" style={{ marginTop: 14, width: '100%' }}>
                  <i className="fa-solid fa-download" /> {t.about.downloadCv}
                </a>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.skillsTitle}</h3>
              <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
                {t.about.skills.map((s) => (
                  <div key={s.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                      <div style={{ fontWeight: 850 }}>{s.name}</div>
                      <div style={{ color: 'var(--muted)', fontWeight: 800 }}>{s.level}%</div>
                    </div>
                    <div
                      style={{
                        height: 12,
                        borderRadius: 999,
                        background: 'rgba(10,102,255,0.10)',
                        border: '1px solid rgba(10,102,255,0.18)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${s.level}%`,
                          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            <div className="surface cardPad">
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.hobbiesTitle}</h3>
              <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
                {t.about.hobbies.map((h) => (
                  <div
                    key={h.title}
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                      padding: 12,
                      borderRadius: 16,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 14, border: '1px solid rgba(10,102,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)' }}>
                      <i className={h.icon} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 950 }}>{h.title}</div>
                      <div style={{ marginTop: 6, color: 'var(--muted)', lineHeight: 1.45 }}>{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface cardPad">
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.languagesTitle}</h3>
              <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
                {t.about.languages.map((l) => (
                  <div key={l.title} style={{ padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}>
                    <div style={{ fontWeight: 950 }}>{l.title}</div>
                    <div style={{ marginTop: 6, color: 'var(--muted)', lineHeight: 1.45 }}>{l.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }} className="surface cardPad">
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.about.timelineTitle}</h3>
          <div style={{ marginTop: 14 }} className="grid2">
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ fontWeight: 950 }}>{lang === 'de' ? 'Bildung' : lang === 'fr' ? 'Formation' : 'Education'}</div>
              {t.about.timelineEducation.map((it) => (
                <div key={it.date} style={{ padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ fontWeight: 950 }}>{it.date}</div>
                  <div style={{ marginTop: 6, color: 'var(--muted)' }}>{it.text}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ fontWeight: 950 }}>{lang === 'de' ? 'Beruf' : lang === 'fr' ? 'Expérience' : 'Experience'}</div>
              {t.about.timelineWork.map((it) => (
                <div key={it.date} style={{ padding: 12, borderRadius: 16, border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ fontWeight: 950 }}>{it.date}</div>
                  <div style={{ marginTop: 6, color: 'var(--muted)' }}>{it.text}</div>
                </div>
              ))}
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

