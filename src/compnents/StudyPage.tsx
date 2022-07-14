import React, { useState, Suspense } from 'react'
import { itSchoolStudy, freeCodeCampStudy, udemyStudy } from '../data'
const ImageModal = React.lazy(() => import('./ImageModal'))
import { Studies } from 'src/types'

const StudyPage = () => {

  const [show, setShow] = useState(false)
  const [image, setImage] = useState('')

  const handleShow = () => setShow(!show)
  const showImg = (img: string) => {
    setShow(true)
    setImage(img)
  }

  return (
    <div className="study title-text" id="study">
      <h2>Study</h2>
      <h3 className="title-text"><a href="http://itschool.ro" target="_blank">ItSchool </a> - hands on course</h3>
      <h4 className="left">{itSchoolStudy[0].certificate} <a href={itSchoolStudy[0].link} target="_blank">Certification : ANC </a>
        {itSchoolStudy[0].date}</h4>
      <div className="images">
        {itSchoolStudy.map((img: Studies, idx: number) =>
          img.imgSmall && <div key={`${img.imgSmall}-${idx + 22}`}>
            <img lazy-loading="lazy" width='auto' height='auto' alt={img.certificate} className="image" src={img.imgSmall} onClick={() => showImg(img.imgBig)} />
            {show && img.imgBig === image &&
              <Suspense fallback={<div className='loading'>Loading...</div>}>
                <ImageModal show={show} handleShow={handleShow} imgSrc={itSchoolStudy} />
              </Suspense>
            }
          </div>
        )}
      </div>
      <div className="left">
        {itSchoolStudy.map(({ study }: Studies, idx: number) => <h5 key={study + (idx + 1)}> {study}</h5>)}
      </div>
      <hr />
      <h3 className="projects-title ">
        <a href="http://freecodecamp.org" target="_blank"> Freecodecamp </a> - online course</h3>
      {freeCodeCampStudy.map((c: Studies, idx: number) => c.certificate &&
        <h4 key={`${c.link}-${idx + 11}`} className="left">{c.certificate}
          <a href={c.link} target="_blank"> Certification </a>
          {c.date}
        </h4>
      )}
      <div className="images">
        {freeCodeCampStudy.map((img: Studies, idx: number) =>
          img.imgSmall && <div key={`${img.imgSmall}-${idx + 21}`}>
            <img lazy-loading="lazy" width='auto' height='auto' alt={img.certificate} className="image" src={img.imgSmall} onClick={() => showImg(img.imgBig)} />
            {show && img.imgBig === image &&
              <Suspense fallback={<div className='loading'>Loading...</div>}>
                <ImageModal show={show} handleShow={handleShow} imgSrc={freeCodeCampStudy} />
              </Suspense>
            }
          </div>
        )}
      </div>
      <div className="left">
        {freeCodeCampStudy.map(({ study }: Studies, idx: number) => <h5 key={study + (idx + 2)}> {study}</h5>)}
      </div>
      <hr />
      <h3 className="projects-title "><a href="http://udemy.com" target="_blank">Udemy</a> - online course</h3>
      {udemyStudy.map((c: Studies, idx: number) => c.certificate &&
        <h4 key={`${c.link}-${idx + 37}`} className="left">{c.certificate}
          <a href={c.link} target="_blank"> Certification </a>
          {c.date}
        </h4>)}
      <div className="images">
        {udemyStudy.map((img: Studies, idx: number) => img.imgSmall &&
          <div key={`${img.imgSmall}-${idx + 21}`}>
            <img lazy-loading="lazy" width='auto' height='auto' alt={img.certificate} className="image" src={img.imgSmall} onClick={() => showImg(img.imgBig)} />
            {show && img.imgBig === image &&
              <Suspense fallback={<div className='loading'>Loading...</div>}>
                <ImageModal show={show} handleShow={handleShow} imgSrc={udemyStudy} />
              </Suspense>
            }
          </div>
        )}
      </div>
      <div className="left mt-2">
        {udemyStudy.map(({ study }: Studies, idx: number) => <h5 key={study + (idx + 3)}> {study}</h5>)}
      </div>
    </div>
  )
}

export default StudyPage