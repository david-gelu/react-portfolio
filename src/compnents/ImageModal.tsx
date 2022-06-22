
import React from "react"
import { Carousel, Modal } from "react-bootstrap"
import { Studies } from "src/types"

const ImageModal = ({ show, handleShow, imgSrc }: any) => {
  return (
    <Modal dialogClassName="modal-60w" centered show={show} onHide={handleShow}>
      <Modal.Body>
        <Carousel variant="dark">
          {imgSrc.map((image: Studies) => image.imgBig && <Carousel.Item key={image.imgBig}>
            <img lazy-loading="lazy"
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