import { useState, useEffect } from 'react';

const TerminalCodeEditorCard = (): JSX.Element => {
  const [terminalText, setTerminalText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  const [terminalCursor, setTerminalCursor] = useState<boolean>(true);
  const [codeCursor, setCodeCursor] = useState<boolean>(true);

  const terminalCommands: string[] = [
    '$ yarn install',
    'Installing dependencies...',
    '✓ Done in 2.3s',
    '',
    '$ yarn dev',
    'Starting development server...',
    '> Local: http://localhost:5173',
    '✓ Ready in 450ms',
    '',
    '$ git status',
    'On branch main',
    'Your branch is up to date',
    '',
    '$ npm run build',
    'Building for production...',
    '✓ Build complete!'
  ];

  const codeSnippet: string = `import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>David Gelu</h1>
      <p>Software Developer</p>
    </motion.div>
  );
};

export default Portfolio;`;

  useEffect(() => {
    const fullText: string = terminalCommands.join('\n');
    let index: number = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index: number = 0;
      const interval = setInterval(() => {
        if (index < codeSnippet.length) {
          setCodeText(codeSnippet.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setTerminalCursor(prev => !prev);
    }, 530);

    const interval2 = setInterval(() => {
      setCodeCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="terminal-code-editor-card">
      <div className="card-header">
        <h3 className="card-title">Development Environment</h3>
      </div>
      <div className="terminal-code-editor-container">
        <div className="terminal-section">
          <div className="window-header">
            <div className="window-buttons">
              <div className="button red" />
              <div className="button yellow" />
              <div className="button green" />
            </div>
            <span className="window-title">Terminal</span>
          </div>
          <pre className="terminal-content">
            {terminalText.split('\n').map((line, i) => (
              <div key={i} className="terminal-line">
                {line.startsWith('$') ? (
                  <span className="command">{line}</span>
                ) : line.startsWith('✓') ? (
                  <span className="success">{line}</span>
                ) : line.startsWith('>') ? (
                  <span className="info">{line}</span>
                ) : (
                  <span className="output">{line}</span>
                )}
              </div>
            ))}
            <span className={`cursor ${terminalCursor ? 'visible' : ''}`} />
          </pre>
        </div>

        <div className="code-editor-section">
          <div className="window-header">
            <div className="window-buttons">
              <div className="button red" />
              <div className="button yellow" />
              <div className="button green" />
            </div>
            <span className="window-title">Portfolio.tsx</span>
          </div>
          <pre className="code-content">
            {codeText.split('\n').map((line, i) => (
              <div key={i} className="code-line">
                <span className="line-number">{i + 1}</span>
                <span className="code-text">{line}</span>
              </div>
            ))}
            <span className={`cursor code-cursor ${codeCursor ? 'visible' : ''}`} />
          </pre>
        </div>
      </div>
      <div className="card-footer">
        <div className="tech-badge">⚡ React + TypeScript</div>
        <div className="tech-badge">📦 Vite</div>
        <div className="tech-badge">🎨 SCSS</div>
        <div className="tech-badge">✨ Framer Motion</div>
      </div>
    </div>
  );
};

export default TerminalCodeEditorCard;