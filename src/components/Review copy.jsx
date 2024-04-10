import React, { useState } from 'react';

function AddNewItem() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    category: '',
    manufacturer: '',
    unitOfMeasure: '',
    unitPrice: '',
    initialQuantity: '',
    expirationDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation (if needed)
    // Example: Check if required fields are filled
    if (!formData.itemName || !formData.unitPrice || !formData.initialQuantity) {
      alert("Please fill in all required fields.");
      return;
    }
    // If validation passes, you can proceed to submit the form or perform other actions (e.g., send data to backend)
    // Here, we'll just log the form data for demonstration
    console.log(formData);
    // Reset the form
    setFormData({
      itemName: '',
      description: '',
      category: '',
      manufacturer: '',
      unitOfMeasure: '',
      unitPrice: '',
      initialQuantity: '',
      expirationDate: ''
    });
  };

  return (
    <div className="container">
      <h2>Add New Item to Inventory</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" className="form-control" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input type="text" className="form-control" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="unitOfMeasure">Unit of Measure:</label>
          <input type="text" className="form-control" id="unitOfMeasure" name="unitOfMeasure" value={formData.unitOfMeasure} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="unitPrice">Unit Price:</label>
          <input type="number" className="form-control" id="unitPrice" name="unitPrice" step="0.01" min="0" value={formData.unitPrice} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="initialQuantity">Initial Quantity:</label>
          <input type="number" className="form-control" id="initialQuantity" name="initialQuantity" min="0" value={formData.initialQuantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input type="date" className="form-control" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
}

export default AddNewItem;
