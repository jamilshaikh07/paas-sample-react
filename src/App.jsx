import React, { useEffect, useState } from 'react';

// Tiny end-to-end proof-of-life app for the paas pipeline.
//
//   * __BUILD_TIME__ is replaced at vite-build time → proves the
//     repo got cloned, npm install ran, and vite produced output.
//   * The 'now' clock updates every second client-side → proves the
//     bundled JS actually loaded and React mounted in the browser.
//   * The colour gradient + JSX confirm React is the runtime, not
//     just pre-rendered HTML.
//
// If you see a ticking timestamp under the React badge in your
// browser, every layer of the paas stack worked: git webhook,
// kaniko build, image push, nginx serve, CDN, DNS.

const BUILD_TIME = typeof __BUILD_TIME__ === 'undefined' ? 'dev' : __BUILD_TIME__;

export default function App() {
  const [now, setNow] = useState(new Date().toISOString());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date().toISOString()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>REACT</div>
        <h1 style={styles.title}>It works.</h1>
        <p style={styles.sub}>End-to-end sample deployed via <code>paas</code>.</p>
        <div style={styles.row}><span style={styles.k}>built at</span><span style={styles.v}>{BUILD_TIME}</span></div>
        <div style={styles.row}><span style={styles.k}>browser time</span><span style={styles.v}>{now}</span></div>
        <div style={styles.row}><span style={styles.k}>react</span><span style={styles.v}>{React.version}</span></div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh', margin: 0,
    background: 'linear-gradient(135deg, #0b0d11 0%, #1c2027 100%)',
    color: '#e6e8eb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
  },
  card: {
    background: '#14171d', border: '1px solid #262b34', borderRadius: 12,
    padding: '28px 32px', maxWidth: 520, width: '100%',
    boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
  },
  badge: {
    display: 'inline-block', padding: '3px 8px',
    background: 'linear-gradient(135deg, #61dafb 0%, #149eca 100%)',
    color: '#0b0d11', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em',
    borderRadius: 4, marginBottom: 14,
  },
  title: { margin: '0 0 6px', fontSize: 28, fontWeight: 700 },
  sub: { margin: '0 0 22px', color: '#9aa1ad', fontSize: 14 },
  row: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12, padding: '8px 0', borderTop: '1px solid #1e222a',
  },
  k: { color: '#6b7280' },
  v: { color: '#7aa2f7' },
};
