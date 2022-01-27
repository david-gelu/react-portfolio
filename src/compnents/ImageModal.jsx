
import { useState } from "react"
import { Carousel, Modal, Button } from "react-bootstrap"

const ImageModal = ({ show, handleShow, imgSrc }) => {
  return (
    <Modal dialogClassName="modal-60w" centered show={show} onHide={handleShow}>
      <Modal.Body>
        <Carousel variant="dark">
          {imgSrc.map(image => image.imgBig && <Carousel.Item key={image.imgBig}>
            <img
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