import { Suspense, lazy, useEffect, useState } from "react"
import TerminalCodeEditorCard from "./TerminalCodeEditorCard"
import { motion } from 'framer-motion';
import { LuRefreshCcw } from "react-icons/lu";
import { Button } from "react-bootstrap";
const TooltipWrap = lazy(() => import('./TooltipWrap'))

const HomePage = () => {
  const [quote, setQuote] = useState<{ quote: string, author: string } | null>(null)
  const [filteredQuotesList, setFilteredQuotesList] = useState<any[]>([]);
  const fetchAllQuotes = async () => {
    const url = `https://dummyjson.com/quotes?limit=100`;

    const categories = ['Change',
      'Choice',
      'Confidence',
      'Courage',
      'Dreams',
      'Excellence',
      'Failure',
      'Freedom',
      'Future',
      'Happiness',
      'Inspiration',
      'Kindness',
      'Leadership',
      'Life',
      'Living',
      'Love',
      'Success',
      'Work',
      'Motivation',
      'Perseverance',
      'Resilience',
      'Self-Improvement',
      'Strength'];

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error getting data from API");

      const data = await res.json();

      if (data && data.quotes && data.quotes.length > 0) {
        const filtered = data.quotes.filter((citat: any) => {
          const quote = citat.quote.toLowerCase();
          return categories.some(cuvant => quote.includes(cuvant));
        });

        const finalList = filtered.length > 0 ? filtered : data.quotes;

        setFilteredQuotesList(finalList);

        const randomQuote = finalList[Math.floor(Math.random() * finalList.length)];
        setQuote({
          quote: randomQuote.quote,
          author: randomQuote.author,
        });
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  const handleNextQuoteClick = () => {
    if (filteredQuotesList.length > 0) {
      const randomQuote = filteredQuotesList[Math.floor(Math.random() * filteredQuotesList.length)];
      setQuote({
        quote: randomQuote.quote,
        author: randomQuote.author,
      });
    }
  };

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="main accent-background mt-5" id="main">
        <div className="main-name-div p-3" >
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <div className="test">
              <div className="">
                <div className="d-flex max-content mt-2 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="logo-arrow">
                      <span className="tx-color me-1" >&#60;</span>DG <span className="tx-color ms-1"> &#47;&#62;</span>
                    </div>
                    <div className="d-flex flex-column">
                      <h1>David Gelu </h1>
                      <h2 className="show-text">Software Developer</h2>
                    </div>
                  </div>
                </div>
                <div className="tx-color mt-3">
                  Software Developer with 4+ years of experience building real-time analytics dashboards and scalable web applications using React, TypeScript,
                  Node.js and MongoDB. Focused on performance optimization, reusable component systems, API integration and clean, maintainable architecture.
                  Experienced in Agile teams of 3–6 developers.
                </div>
                <div className="tx-color mt-3">
                  WHAT I DO:
                  <ul className="d-flex flex-column gap-2 mx-auto mt-2 p-3 accent-background" style={{ borderRadius: '8px', maxWidth: '70%' }} >
                    <li>&#8226; Build scalable frontend architectures</li>
                    <li>&#8226; Develop reusable UI components</li>
                    <li>&#8226; Optimize performance and rendering</li>
                    <li>&#8226; Integrate APIs and manage data efficiently</li>
                  </ul>
                </div>
              </div>
              <div className="left contact-data">
                <TooltipWrap desc='Download CV'>
                  <a href={"img/DavidGeluCV.pdf"} download="DavidGeluCV.pdf" aria-label='download cv' className='btn-success download-cv'>
                    DOWNLOAD CV  <i className="far fa-file-alt p-2 pe-0 w-auto" aria-hidden="true" />
                  </a>
                </TooltipWrap>
                <div className="d-flex gap-2">
                  <TooltipWrap desc='+4 0744 598 995'>
                    <a href="tel:+4 0744 598 995" aria-label='phone number' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='david.gelu90@gmail.com'>
                    <a href="mailto:david.gelu90@gmail.com" aria-label='email' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='https://www.linkedin.com/in/gelu-fanel-david/'>
                    <a target='_blank' href="https://www.linkedin.com/in/gelu-fanel-david/" aria-label='linkedin' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                  <TooltipWrap desc='Github repo'>
                    <a target='_blank' href="https://github.com/david-gelu?tab=repositories" aria-label='github repo' className='d-flex flex-column text-center btn-outline-success'>
                      <i className="fab fa-github" aria-hidden="true" />
                    </a>
                  </TooltipWrap>
                </div>
              </div>
              <div>
                {quote ? (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <blockquote className="m-0">
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold', fontStyle: 'italic' }}>
                        "{quote.quote}"
                        <cite style={{ marginLeft: '0.5rem', fontSize: '0.75rem', fontWeight: 'normal', fontStyle: 'normal', color: 'var(--text-color)' }}>— {quote.author}</cite>
                      </p>
                    </blockquote>

                    <Button
                      onClick={handleNextQuoteClick}
                      variant={'outline-success'}
                      size="sm"
                      className="m-auto"
                    >
                      <LuRefreshCcw /> New quote
                    </Button>
                  </div>
                ) : (
                  <p>Loading quote...</p>
                )}
              </div>
            </div>
          </Suspense >
        </div >
      </section >
      <TerminalCodeEditorCard />
    </motion.div >
  )
}

export default HomePage