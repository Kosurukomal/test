import { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './review.css';

function Example() {
  const [show, setShow] = useState(false);
  const[formData,setFormData]=useState({
    ItemName:'Bandages',
    Description:'lorem',
    Categories:'Medicines',
    Manufactures:'ABC',
    unitMeasures:'mg',
    unitPrice:10,
    initialQuantity:100,
    ExpireDate:'2025-11-9'

  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmitForm =() =>{
    alert('item is successful added to the inventory ')
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PREVIEW
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='title'>PREVIEW ITEM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className='table'>
            <thead>
              <tr>
                <th>ItemName</th>
                <td> {formData.ItemName}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>: {formData.Description}</td>
              </tr>
              <tr>
                <th>Categories</th>
                <td>: {formData.Categories}</td>
              </tr>
              <tr>
                <th>Manufactures</th>
                <td>: {formData.Manufactures}</td>
              </tr>
              <tr>
                <th>Unit Measures</th>
                <td>: {formData.unitMeasures}</td>
              </tr>
              <tr>
                <th>Unit Price</th>
                <td>: {formData.unitPrice}</td>
              </tr>
              <tr>
                <th>InitialQuantity</th>
                <td>: {formData.initialQuantity}</td>
              </tr>
              <tr>
                <th>ExpireDate</th>
                <td>: {formData.ExpireDate}</td>
              </tr>
              <tr>
                <th>Uploadimage </th>
                {
                  <img src="data:image/jpeg;base64,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" width="100px" height="60px" alt=": image should be displayed"  />}
               
              </tr>
             
              
            </thead>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSubmitForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;





















  
  
   
  
   
