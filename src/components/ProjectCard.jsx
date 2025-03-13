import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

const Projectcard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Calculator App</h3>
              <h6>Languages used: <span className='text-danger'>Javascript</span></h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat in cum necessitatibus nihil, similique doloribus quas perferendis expedita molestiae iste natus? Nemo, facere necessitatibus quia provident alias ratione iusto.</p>
            </div>
          </div>
          <div className='mt-2 float-start'>
            <a href="https://github.com/vimalkottikkal/Calculator-v1.0.git" target='_blank' className='btn btn-secondary me-2'><i className='fa-brands fa-github'></i></a>
            <a href="https://calculator-v1-0.vercel.app/" target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Projectcard