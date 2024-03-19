import React, { useState, Suspense, useContext } from 'react'
const ImageModal = React.lazy(() => import('./ImageModal'))
import { Studies } from '../types'
import { StudyContext } from '../context/StudyContext'

const StudyPage = () => {
  const { itSchoolStudy, freeCodeCampStudy, udemyStudy, mongoStudy } = useContext(StudyContext)

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
        <div className="left fancy-border">
          <h3 className="projects-title">
            <a href="https://learn.mongodb.com/c/lN1NOKATQXeuuhXTcJ5IjA" target="_blank">MongoDB </a> - Introduction to MongoDB
          </h3>
          {mongoStudy.map(({ study }: Studies, idx: number) => <h4 key={study + (idx + 1)}> {study}</h4>)}
          <button className='show-modal' onClick={() => handleShow('mongo')} >Diploma</button>
          {mongoStudy.map((img: Studies, idx: number) =>
            <div key={`${img.imgBig}-${idx + 22}`}>
              {show && 'mongo' === study &&
                <Suspense fallback={<div className='loading-modal'>Loading...</div>}>
                  <ImageModal show={show} setShow={setShow} imgSrc={mongoStudy} />
                </Suspense>
              }
            </div>)}
        </div>
        <div className="left fancy-border">
          <h3 className="projects-title">
            <a href="https://econ.unitbv.ro" target="_blank">Faculty of Economic Sciences and Business Administration</a> - Brasov 2022 - currently
          </h3>
          <h4>Marketing study programme</h4>
        </div>
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