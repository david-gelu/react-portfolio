
import { useState } from "react"
import { Carousel, Modal, Button } from "react-bootstrap"

const ImageModal = ({ show, handleShow, imgSrc }) => {
  return (
    <Modal dialogClassName="modal-60w" centered show={show} onHide={handleShow}>
      <Modal.Body>
        <Carousel variant="dark">
          {imgSrc.map(image => image.imgBig && <Carousel.Item>
            <img
              className="d-block w-100"
              src={image.imgBig}
              alt="First slide"
            />
          </Carousel.Item>)}
        </Carousel>
        <div className='w-100 d-flex justify-content-end mt-2'>
          <Button className='ml-auto' size='sm' variant="dark" onClick={handleShow}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal