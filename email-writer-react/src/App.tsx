import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [tone, setTone] = useState('professional');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setReply('');
    try {
      // Correct backend API endpoint and payload
      const response = await fetch('https://aierg2.onrender.com/api/email/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailContent: prompt, tone: tone }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to generate reply');
      }
      const data = await response.text(); // Backend returns a plain string
      setReply(data || 'No reply generated.');
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reply);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="app-container">
      {/* Floating mail background */}
      <div className="floating-mails-bg" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            className={`floating-mail mail-${i}`}
            width="32" height="32" viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute' }}
          >
            <rect x="2" y="8" width="28" height="16" rx="3" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
            <polyline points="2,8 16,20 30,8" fill="none" stroke="#2563eb" strokeWidth="2"/>
          </svg>
        ))}
      </div>
      {/* Decorative SVG Blobs */}
      <svg style={{ position: 'absolute', top: '-5%', left: '-10%', width: '40vw', height: '40vh', zIndex: 0, opacity: 0.5 }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f59e0b" d="M39.6,-58.9C52.7,-51.8,65.8,-42.9,73.1,-30.5C80.4,-18.1,82,-2.3,77.7,11.3C73.4,25,63.2,36.5,51.8,45.8C40.4,55.1,27.8,62.2,14.7,65.4C1.7,68.6,-11.9,67.9,-25,63.3C-38.1,58.7,-50.7,50.2,-58.8,38.8C-67,27.4,-70.7,13.2,-70.3, -0.7C-70,-14.5,-65.6,-28.1,-56.9,-37.8C-48.2,-47.5,-35.1,-53.3,-22.6,-57.8C-10.1,-62.3,-1.4,-65.4,8.1,-66.4C17.6,-67.4,36.1,-66.2,39.6,-58.9Z" transform="translate(100 100)" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vh', zIndex: 0, opacity: 0.4 }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ef4444" d="M60.6,-59.6C73.8,-46.8,76.5,-23.4,72.2,-3.9C67.9,15.6,56.6,31.2,42.7,44.7C28.8,58.1,12.3,69.4,-5.4,72.1C-23.1,74.8,-42,68.9,-54.6,56.5C-67.2,44.1,-73.4,25.2,-72,7.3C-70.6,-10.5,-61.6,-27.3,-49.4,-40.4C-37.3,-53.4,-22,-62.7,-3.9,-65.4C14.2,-68.1,28.4,-64.2,60.6,-59.6Z" transform="translate(100 100)" />
      </svg>

      <header className="app-header">
        <h1>
          <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="header-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
            </svg>
          </span>
          Online Email Reply Generator
        </h1>
        <p>Generate a smart reply instantly using AI!</p>
      </header>
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <p>Let AI handle your email replies, so you can focus on what matters most. Fast, smart, and professional.</p>
          </div>
          <div className="hero-illustration">
            {/* Large modern email icon */}
            <svg width="180" height="180" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto', filter: 'drop-shadow(0 4px 24px #3b82f655)' }}>
              <rect x="6" y="16" width="52" height="32" rx="6" fill="#fff" stroke="#2563eb" strokeWidth="3"/>
              <polyline points="6,16 32,40 58,16" fill="none" stroke="#3b82f6" strokeWidth="3"/>
              <rect x="6" y="16" width="52" height="32" rx="6" fill="url(#mailGrad)" fillOpacity="0.08"/>
              <defs>
                <linearGradient id="mailGrad" x1="6" y1="16" x2="58" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6"/>
                  <stop offset="1" stopColor="#2563eb"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <textarea
          className="prompt-input"
          placeholder="Paste or write your email here..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={8}
        />
        <select
          className="tone-select"
          value={tone}
          onChange={e => setTone(e.target.value)}
        >
          <option value="formal">👔 Formal</option>
          <option value="professional">💼 Professional</option>
          <option value="friendly">😊 Friendly</option>
          <option value="concise">⚡ Concise</option>
          <option value="detailed">📚 Detailed</option>
        </select>
        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          style={loading ? { background: 'linear-gradient(90deg, #8b5cf6 0%, #f59e0b 100%)', position: 'relative' } : {}}
        >
          {loading ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="shimmer" style={{ width: 18, height: 18, borderRadius: '50%', background: 'linear-gradient(90deg, #f59e0b 25%, #ef4444 50%, #8b5cf6 75%)', animation: 'shimmerSpin 1.1s linear infinite' }}></span>
              Generating...
            </span>
          ) : 'Generate Reply'}
        </button>
        {error && <div className="error-message">{error}</div>}
        {reply && (
          <div className="reply-section">
            <div className="reply-header">
              <h2>Generated Reply</h2>
              <button className="copy-btn" onClick={handleCopy} disabled={!reply} aria-label={isCopied ? 'Copied!' : 'Copy to clipboard'}>
                {isCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
                    <path fill="#22c55e" d="M9.29 16.29a1 1 0 0 1-1.42 0l-3-3a1 1 0 1 1 1.42-1.42l2.3 2.29 5.3-5.29a1 1 0 1 1 1.42 1.42l-6 6z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
                    <rect x="9" y="9" width="13" height="13" rx="2" fill="#4f46e5" fillOpacity="0.15" stroke="#4f46e5" strokeWidth="2"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" fill="#fff" stroke="#4f46e5" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="reply-box">{reply}</div>
          </div>
        )}
        <section className="features-section">
          <div className="feature-card">
            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            <h3>Custom Tones</h3>
            <p>Choose from a variety of tones to match the context of your email perfectly.</p>
          </div>
          <div className="feature-card">
            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3>Smart Suggestions</h3>
            <p>Our AI understands context to provide relevant and intelligent email replies.</p>
          </div>
          <div className="feature-card">
            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
            <h3>Time Saver</h3>
            <p>Generate professional email replies in seconds, not minutes. Boost your productivity.</p>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <span>Powered by AI</span>
        <div className="footer-links">
          <a href="https://github.com/rajat1903" target="_blank" rel="noopener noreferrer" aria-label="Github"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://x.com/rajatd01" target="_blank" rel="noopener noreferrer" aria-label="X"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </div>
        <p className="copyright">&copy; 2025 Email Reply Generator. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
