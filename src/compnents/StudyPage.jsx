import { useState } from 'react'
import { itSchoolStudy, freeCodeCampStudy, udemyStudy } from '../data'
import ImageModal from './ImageModal'

const StudyPage = () => {

  const [show, setShow] = useState(false)
  const [image, setImage] = useState('')
  const handleShow = () => setShow(!show)

  return (
    <div className="study" id="study">
      <h2 className="">Study</h2>
      <h3 className="projects-title "><a href="http://itschool.ro" target="_blank">ItSchool </a> - hands on course</h3>
      <div className="images">
        {itSchoolStudy.map(img =>
          <div key={img.imgSmall}>
            <img className="image" src={img.imgSmall} onClick={() => { setShow(true); setImage(img.imgBig) }} />
            {show && img.imgBig === image &&
              <ImageModal show={show} handleShow={handleShow} imgSrc={itSchoolStudy} />}
          </div>
        )}
      </div>
      <h4 className="left">{itSchoolStudy[0].certificate} <a href={itSchoolStudy[0].link} target="_blank">Certification : ANC </a>
        {itSchoolStudy[0].date}</h4>
      <div className="left">
        {itSchoolStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
      <hr />
      <h3 className="projects-title ">
        <a href="http://freecodecamp.org" target="_blank">Freecodecamp</a> - online course</h3>
      {freeCodeCampStudy.map(c => c.certificate &&
        <h4 key={c.link} className="left">{c.certificate}
          <a href={c.link} target="_blank">Certification </a>
          {c.date}
        </h4>
      )}
      <div className="images">
        {freeCodeCampStudy.map(img =>
          <div key={img.imgSmall}>
            <img className="image" src={img.imgSmall} onClick={() => { setShow(true); setImage(img.imgBig) }} />
            {show && img.imgBig === image &&
              <ImageModal show={show} handleShow={handleShow} imgSrc={freeCodeCampStudy} />}
          </div>
        )}
      </div>
      <div className="left">
        {freeCodeCampStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
      <hr />
      <h3 className="projects-title "><a href="http://udemy.com" target="_blank">Udemy</a> - online course</h3>
      {udemyStudy.map(c => c.certificate &&
        <h4 key={c.link} className="left">{c.certificate}
          <a href={c.link} target="_blank">Certification </a>
          {c.date}
        </h4>)}
      <div className="images">
        {udemyStudy.map(img => img.imgBig &&
          <div key={img.imgSmall}>
            <img className="image" src={img.imgSmall} onClick={() => { setShow(true); setImage(img.imgBig) }} />
            {show && img.imgBig === image &&
              <ImageModal show={show} handleShow={handleShow} imgSrc={udemyStudy} />}
          </div>
        )}
      </div>
      <div className="left mt-2">
        {udemyStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
    </div>
  )
}

export default StudyPage