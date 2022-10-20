import React, { useState, Suspense } from 'react'
import { itSchoolStudy, freeCodeCampStudy, udemyStudy } from '../data'
const ImageModal = React.lazy(() => import('./ImageModal'))
import { Studies } from 'src/types'

const StudyPage = () => {

  const [show, setShow] = useState(false)
  const [study, setStudy] = useState('')

  const handleShow = (text: string) => {
    setShow(!show)
    setStudy(text)
  }

  return (
    <div className="study title-text pb-5" id="study">
      <h2>Study</h2>
      <div className='study-cards-container'>
        {/* <h4 className="left">{itSchoolStudy[0].certificate} <a href={itSchoolStudy[0].link} target="_blank">Certification : ANC </a>
        {itSchoolStudy[0].date}</h4> */}
        <div className="left fancy-border">
          <h3 className="projects-title">
            <a href="http://itschool.ro" target="_blank">ItSchool </a> - hands on course
          </h3>
          {itSchoolStudy.map(({ study }: Studies, idx: number) => <h4 key={study + (idx + 1)}> {study}</h4>)}
          <button className='show-modal' onClick={() => handleShow('itschool')} >Diploma</button>
          {itSchoolStudy.map((img: Studies, idx: number) =>
            <div key={`${img.imgBig}-${idx + 22}`}>
              {show && 'itschool' === study &&
                <Suspense fallback={<div className='loading-modal'>Loading...</div>}>
                  <ImageModal show={show} setShow={setShow} imgSrc={itSchoolStudy} />
                </Suspense>
              }
            </div>)}
        </div>
        {/* {freeCodeCampStudy.map((c: Studies, idx: number) => c.certificate &&
        <h4 key={`${c.link}-${idx + 11}`} className="left">{c.certificate}
        <a href={c.link} target="_blank"> Certification </a>
        {c.date}
        </h4>
      )} */}
        <div className="left fancy-border">
          <h3 className="projects-title">
            <a href="http://freecodecamp.org" target="_blank"> Freecodecamp </a> - online course
          </h3>
          {freeCodeCampStudy.map(({ study }: Studies, idx: number) => <h4 key={study + (idx + 2)}> {study}</h4>)}
          <button className='show-modal' onClick={() => handleShow('freecodecamp')} >Diplomas</button>
          {freeCodeCampStudy.map((img: Studies, idx: number) =>
            <div key={`${img.imgBig}-${idx + 21}`}>
              {show && 'freecodecamp' === study &&
                <Suspense fallback={<div className='loading-modal'>Loading...</div>}>
                  <ImageModal show={show} setShow={setShow} imgSrc={freeCodeCampStudy} />
                </Suspense>
              }
            </div>
          )}
        </div>
        {/* {udemyStudy.map((c: Studies, idx: number) => c.certificate &&
        <h4 key={`${c.link}-${idx + 37}`} className="left">{c.certificate}
        <a href={c.link} target="_blank"> Certification </a>
        {c.date}
      </h4>)} */}
        <div className="left mt-2 fancy-border">
          <h3 className="projects-title ">
            <a href="http://udemy.com" target="_blank">Udemy</a> - online course
          </h3>
          {udemyStudy.map(({ study }: Studies, idx: number) => <h4 key={study + (idx + 3)}> {study}</h4>)}
          <button className='show-modal' onClick={() => handleShow('udemy')} >Diplomas</button>
          {udemyStudy.map((img: Studies, idx: number) =>
            <div key={`${img.imgBig}-${idx + 21}`}>
              {show && 'udemy' === study &&
                <Suspense fallback={<div className='loading-modal'>Loading...</div>}>
                  <ImageModal show={show} setShow={setShow} imgSrc={udemyStudy} />
                </Suspense>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudyPage