 
 
 import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.css";
function Preview() {
  const [show, setShow] = useState(false);
const [formData,setFormData]=useState({
    itemname:"Bandages",
    sku:"band-2603",
    description:"NA",
    category:"Medical supplies",
    manufacturer:"chiler13",
    unitOfMeasure:"Box",
    unitPrice:546,
    initialQuantity:787,
    reorderLevel:52,
    suppliers:[
      "cipla pharmagaleria","pharma",
      
    ],
    expirationDate:"2024-04-27",
    imageUpload:"./beach.jpg",
})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleFormSubmit=()=>{
    alert("form has been submitted successfully")
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Preview
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size='lg' centered>
         {/* Modal header */}
  <Modal.Header closeButton className="submit-btn">
  <Modal.Title className="title text-white">PREVIEW ITEM</Modal.Title>
</Modal.Header>

{/* Modal body */}
<Modal.Body>
  {/* Table to display item details */}

  <div className="table-flex">
    {/* SKU */}
    <div className="row-flex col-6">
      <b className="w-50">#SKU</b>
      <p>{formData.sku}</p>
    </div>

    {/* Item Name */}
    <div className="row-flex  col-6">
      <b className="w-50">ItemName</b>
      <p>{formData.itemname}</p>
    </div>

    {/* Description */}
    <div className="row-flex col-6">
      <b className="w-50">Description</b>
      <p>{formData.description || "NA"}</p>
    </div>

    {/* Category */}
    <div className="row-flex col-6">
      <b className="w-50">Categories</b>
      <p>{formData.category}</p>
    </div>

    {/* Manufacturer */}
    <div className="row-flex col-6">
      <b className="w-50">Manufactures</b>
      <p>{formData.manufacturer}</p>
    </div>

    {/* Unit of Measure */}
    <div className="row-flex col-6">
      <b className="w-50">Unit Measures</b>
      <p>{formData.unitOfMeasure || "NA"}</p>
    </div>

    {/* Unit Price */}
    <div className="row-flex col-6">
      <b className="w-50">Unit Price</b>
      <p>{formData.unitPrice}</p>
    </div>

    {/* Initial Quantity */}
    <div className="row-flex col-6">
      <b className="w-50">InitialQuantity</b>
      <p>{formData.initialQuantity}</p>
    </div>

    {/* Re-Order Level */}
    <div className="row-flex col-6">
      <b className="w-50">Re-Order Level</b>
      <p>{formData.reorderLevel}</p>
    </div>

    {/* Suppliers */}
    <div className="row-flex col-6">
      <b className="w-50">suppliers</b>
      <p>{formData.suppliers}</p>
    </div>

    {/* Expiry Date */}
    <div className="row-flex col-6">
      <b className="w-50">ExpireDate</b>
      <p>{formData.expirationDate}</p>
    </div>

    {/* Uploaded Image */}
    <div className="row-flex col-6">
      <b className="w-50">Uploadimage </b>
      <div>
        <img src={formData.imageUpload ? formData.imageUpload: "Not Uploaded"} alt="dsfds" width="40%" />
        
        {/* Display message if image not uploaded */}
        
          
        
      </div>
    </div>
  </div>
</Modal.Body>

{/* Modal footer */}
<Modal.Footer>
  {/* Back button */}
  <Button variant="warning" onClick={handleClose}>
    Back
  </Button>

  {/* Submit button */}
  <Button className="btn submit-btn" onClick={handleFormSubmit}>
    submit
  </Button>
</Modal.Footer>
      </Modal>
    </>
  );
}

export default Preview;
 