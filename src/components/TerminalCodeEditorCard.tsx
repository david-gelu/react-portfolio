import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const TerminalCodeEditorCard = (): JSX.Element => {
  const [terminalText, setTerminalText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  const [terminalCursor, setTerminalCursor] = useState<boolean>(true);
  const [isTerminalTextEnd, setisTerminalTextEnd] = useState<boolean>(false);
  const [codeCursor, setCodeCursor] = useState<boolean>(true);

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext trebuie folosit în interiorul AppProvider');
  }

  const { finishedTyping, isFinishedTyping } = context;

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

const App = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
        <NavBarProvider>
          <NavBar />
        </NavBarProvider>
        <HomePage />
        <ProjectsProvider>
          <ProjectsPage />
        </ProjectsProvider>
        <StudyProvider>
          <WorkProvider>
            <AboutMePage />
          </WorkProvider>
        </StudyProvider>
        <ContactPage />
      </Suspense>
  );
};

export default PageHeader;`;

  useEffect(() => {
    const fullText: string = terminalCommands.join('\n');
    let index: number = 0;
    setisTerminalTextEnd(false);

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        setisTerminalTextEnd(true);
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTerminalTextEnd) return;

    let index: number = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setCodeText(codeSnippet.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [isTerminalTextEnd]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setTerminalCursor(prev => !prev);
    }, 230);

    const interval2 = setInterval(() => {
      setCodeCursor(prev => !prev);
    }, 230);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  useEffect(() => {
    if (codeText === codeSnippet) {
      const timeout = setTimeout(() => {
        finishedTyping();
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [codeText, codeSnippet]);

  return (
    <AnimatePresence>
      {!isFinishedTyping && (
        <motion.section
          className="main accent-background mt-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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

              {isTerminalTextEnd && <div className="code-editor-section">
                <div className="window-header">
                  <div className="window-buttons">
                    <div className="button red" />
                    <div className="button yellow" />
                    <div className="button green" />
                  </div>
                  <span className="window-title">PageHeader.tsx</span>
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
              </div>}
            </div>
            <div className="card-footer">
              <div className="tech-badge">⚡ React + TypeScript</div>
              <div className="tech-badge">📦 Vite</div>
              <div className="tech-badge">🎨 SCSS</div>
              <div className="tech-badge">✨ Framer Motion</div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default TerminalCodeEditorCard;