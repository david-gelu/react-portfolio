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
      <h3 className="left"><a href="http://itschool.ro" target="_blank">ItSchool </a> - hands on course</h3>
      <div className="images">
        <a className="zoombox image" href="img/it-big.jpg">
          <img className="image" src="/img/it-mic.jpg" className="thumb image slickWrap" />
        </a>
      </div>
      <h4 className="left">Front-end Web Design <a href="http://site.anc.edu.ro/" target="_blank">Certification : ANC </a>
        (Date: July 2019 - December 2019)</h4>
      <div className="left">
        {itSchoolStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
      <h3 className="left">
        <a href="http://freecodecamp.org" target="_blank">Freecodecamp </a>
        Online course
      </h3>
      {freeCodeCampStudy.map(c => c.certificate &&
        <h4 key={c.link} className="left">{c.certificate}
          <a href={c.link} target="_blank">Certification </a>
          {c.date}
        </h4>
      )}
      <div className="images">
        {freeCodeCampStudy.map(img =>
          <>
            <img className="image" src={img.imgSmall} onClick={() => { setShow(true); setImage(img.imgBig) }} />
            {show && img.imgBig === image &&
              <ImageModal show={show} handleShow={handleShow} imgSrc={freeCodeCampStudy} />}
          </>
        )}

      </div>
      <div className="left">
        {freeCodeCampStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
      <h3 className="left"><a href="http://udemy.com" target="_blank">Udemy </a> Online course</h3>
      {udemyStudy.map(c => c.certificate &&
        <h4 key={c.link} className="left">{c.certificate}
          <a href={c.link} target="_blank">Certification </a>
          {c.date}
        </h4>)}
      <div className="images">
        {udemyStudy.map(img => img.imgBig &&
          <>
            <img className="image" src={img.imgSmall} onClick={() => { setShow(true); setImage(img.imgBig) }} />
            {show && img.imgBig === image &&
              <ImageModal show={show} handleShow={handleShow} imgSrc={udemyStudy} />}
          </>
        )}
      </div>
      <div className="left">
        {udemyStudy.map(({ study }) => <h5 key={study}> {study}</h5>)}
      </div>
    </div>
  )
}

export default StudyPage