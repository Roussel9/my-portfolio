import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { content } from '../i18n/content';
import { usePreferences } from '../state/PreferencesContext';

type Status = { type: 'success' | 'danger'; message: string } | null;

const WEB3FORMS_ACCESS_KEY = 'e7d7ad41-e85d-4b24-9042-4bb23fb30bff';

export default function ContactPage() {
  const { lang } = usePreferences();
  const t = content[lang];

  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const el = document.getElementById('map');
    if (!el) return;

    const coordinates: [number, number] = [50.587, 8.6777];
    const map = L.map('map').setView(coordinates, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const marker = L.marker(coordinates).addTo(map);
    marker.bindPopup('<b>Eichendorffring 117</b><br/>35394 Gießen').openPopup();

    return () => {
      map.remove();
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData();
    fd.append('access_key', WEB3FORMS_ACCESS_KEY);
    fd.append('name', form.name);
    fd.append('email', form.email);
    fd.append('subject', form.subject);
    fd.append('message', form.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setStatus({ type: 'danger', message: data?.message ? String(data.message) : 'Request failed.' });
      } else {
        setStatus({ type: 'success', message: lang === 'de' ? 'Nachricht erfolgreich gesendet!' : lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus({
        type: 'danger',
        message: lang === 'de' ? 'Netzwerkfehler. Bitte erneut versuchen.' : lang === 'fr' ? 'Erreur réseau. Veuillez réessayer.' : 'Network error. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="section">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">{t.contact.title}</h2>
            <p className="sectionSub">{t.contact.subtitle}</p>
          </div>
        </div>

        <div className="grid2" style={{ alignItems: 'start' }}>
          <div className="surface cardPad">
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.contact.infoTitle}</h3>

            <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
              <div>
                <div style={{ fontWeight: 900 }}>{t.contact.emailLabel}</div>
                <div style={{ marginTop: 6 }}>
                  <a href="mailto:rousseldongmo9@gmail.com" style={{ color: 'var(--accent2)', fontWeight: 750, textDecoration: 'none' }}>
                    rousseldongmo9@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 900 }}>{t.contact.phoneLabel}</div>
                <div style={{ marginTop: 6, color: 'var(--muted)', fontWeight: 700 }}>+49 176 86345276</div>
              </div>
              <div>
                <div style={{ fontWeight: 900 }}>{t.contact.addressLabel}</div>
                <div style={{ marginTop: 6, color: 'var(--muted)', fontWeight: 700, lineHeight: 1.45 }}>
                  Eichendorffring 117, Zimmer D113<br />
                  35394 Gießen, Deutschland
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 950, color: 'var(--muted)' }}>{t.contact.socialsLabel}</h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 }}>
                <a className="iconBtn" href="https://github.com/Roussel9" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  className="iconBtn"
                  href="https://www.linkedin.com/in/roussel-dongmo-jiometio-6a0919285/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontWeight: 950, marginBottom: 10 }}>Standort</div>
              <div
                id="map"
                style={{
                  height: 300,
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              />
            </div>
          </div>

          <div className="surface cardPad">
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 950 }}>{t.contact.formTitle}</h3>

            <form onSubmit={onSubmit} style={{ marginTop: 16, display: 'grid', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span style={{ fontWeight: 850 }}>{t.contact.formName}</span>
                  <input
                    required
                    className="searchInput"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  />
                </label>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span style={{ fontWeight: 850 }}>{t.contact.formEmail}</span>
                  <input
                    required
                    type="email"
                    className="searchInput"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  />
                </label>
              </div>

              <label style={{ display: 'grid', gap: 8 }}>
                <span style={{ fontWeight: 850 }}>{t.contact.formSubject}</span>
                <input
                  required
                  className="searchInput"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                />
              </label>

              <label style={{ display: 'grid', gap: 8 }}>
                <span style={{ fontWeight: 850 }}>{t.contact.formMessage}</span>
                <textarea
                  required
                  className="searchInput"
                  style={{ height: 140, paddingTop: 12, resize: 'vertical' }}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                />
              </label>

              {status && (
                <div
                  style={{
                    padding: 12,
                    borderRadius: 14,
                    fontWeight: 800,
                    border: `1px solid ${status.type === 'success' ? 'rgba(40,167,69,0.55)' : 'rgba(220,53,69,0.55)'}`,
                    background: status.type === 'success' ? 'rgba(40,167,69,0.12)' : 'rgba(220,53,69,0.12)',
                  }}
                >
                  {status.message}
                </div>
              )}

              <button className="btnPrimary" type="submit" disabled={loading} style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>
                <i className="fa-solid fa-paper-plane" />
                {loading ? (lang === 'de' ? 'Wird gesendet...' : lang === 'fr' ? 'Envoi...' : 'Sending...') : t.contact.formSend}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">{t.footer.copyright}</div>
      </footer>
    </div>
  );
}

