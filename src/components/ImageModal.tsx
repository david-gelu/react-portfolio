
import React from "react"
import { Carousel, Modal } from "react-bootstrap"
import { Studies } from "src/types"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ImageModal = ({ show, setShow, imgSrc }: any) => {
  return (
    <Modal dialogClassName="modal-60w" centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <Carousel controls={false}>
          {imgSrc.map((image: Studies) => image.imgBig && <Carousel.Item key={image.imgBig}>
            <LazyLoadImage
              width='auto'
              height='auto'
              className="d-block w-100"
              src={image.imgBig}
              alt="First slide"
            />
          </Carousel.Item>)}
        </Carousel>
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal