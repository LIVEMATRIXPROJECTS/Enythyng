import React, { useState } from 'react';
import './Ads-profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAd = () => {
  const [formData, setFormData] = useState({
    classified: '',
    categories: '',
    postedByName: '',
    postDate: '',
    email: '',
    number: '',
    state: '',
    district: '',
    address: '',
    whatsappLink: '',
    facebookLink: '',
    websiteLink: '',
    adImage1: null,
    adImage2: null,
    adImage3: null,
    content: '',
  });

  const [confirmCheckbox, setConfirmCheckbox] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirmCheckbox) {
      toast.error("Please confirm before submitting.");
      return;
    }
    // Send form data to backend or perform any desired actions
    console.log(formData);
    // Reset form fields
    setFormData({
      classified: '',
      categories: '',
      postedByName: '',
      postDate: '',
      email: '',
      number: '',
      state: '',
      district: '',
      address: '',
      whatsappLink: '',
      facebookLink: '',
      websiteLink: '',
      adImage1: null,
      adImage2: null,
      adImage3: null,
      content: '',
    });
    // Reset confirmation checkbox
    setConfirmCheckbox(false);
    // Display success message
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="ad-form-container">
    <h2>Update Ad Form Details</h2>
    <form onSubmit={handleSubmit}>
    <div className='row-ads'>
      <div className="form-group">
        <label htmlFor="classified">Classified:</label>
        <select id="classified" name="classified" value={formData.classified} onChange={handleChange} required>
          <option value="">Select Classified</option>
          <option value="OTHERS">OTHERS</option>
          <option value="Job">Job</option>
          <option value="FURNITURE">FURNITURE</option>
          <option value="AUTOMOBILES">AUTOMOBILES</option>
          <option value="MATRIMONAL">MATRIMONAL</option>
          <option value="PROPERTY">PROPERTY</option>
          <option value="SERVICES">SERVICES</option>
          <option value="FASHION">FASHION</option>
          <option value="Job">AGRO</option>
          <option value="BOOKS">BOOKS</option>
          <option value="GROCERIES">GROCERIES</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="categories">Categories:</label>
        <select id="categories" name="categories" value={formData.categories} onChange={handleChange} required>
          <option value="">Select Categories</option>
          <option value="SALE">SALE</option>
          <option value="RENT">RENT</option>
          <option value=" WANTEDSERVICE"> WANTED SERVICE</option>
          <option value="HIRESERVICE">HIRE SERVICE</option>
          <option value="BRIDEGROOM">BRIDE GROOM</option>
          <option value="BRIDE">BRIDE</option>
          <option value="WALK-IN">WALK-IN</option>
          <option value="INVITEAPPLICATION">INVITE APPLICATION</option>
          WANTED SERVICE
          {/* Add more options as needed */}
        </select>
      </div>

      </div>
     

    
      <div className='row-ads'>
      <div className="form-group">
        <label htmlFor="postedByName">Posted By Name:</label>
        <input type="text" id="postedByName" name="postedByName" value={formData.postedByName} onChange={handleChange} placeholder="Enter your name" required />
      </div>

      <div className="form-group postdate">
        <label htmlFor="postDate">Post Date:</label>
        <input type="date" id="postDate" name="postDate" value={formData.postDate} onChange={handleChange} required />
      </div>
</div>
<div className='row-ads'>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />
      </div>
</div>
<div className='row-ads'>


      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange} required>
          <option value="">Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Delhi">Delhi</option>
<option value="Puducherry">Puducherry</option>

          {/* Add more options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="district">District:</label>
        <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
      </div>
      </div>

      <div className='row-ads'>

    
      
      

      <div className="form-group">
        <label htmlFor="whatsappLink">WhatsApp Link:</label>
        <input type="text" id="whatsappLink" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />
      </div>

      <div className="form-group">
        <label htmlFor="facebookLink">Facebook Link:</label>
        <input type="text" id="facebookLink" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />
      </div>

      <div className="form-group">
        <label htmlFor="websiteLink">Website Link:</label>
        <input type="text" id="websiteLink" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />
      </div>
      </div>
      <div className='row-ads'>
      <div className="form-group">
        <label htmlFor="adImage1">Ad Image 1:</label>
        <input type="file" id="adImage1" name="adImage1" onChange={handleFileChange} accept="image/*" />
      </div>

      <div className="form-group">
        <label htmlFor="adImage2">Ad Image 2:</label>
        <input type="file" id="adImage2" name="adImage2" onChange={handleFileChange} accept="image/*" />
      </div>
      <div className="form-group">
        <label htmlFor="adImage3">Ad Image 3:</label>
        <input type="file" id="adImage3" name="adImage3" onChange={handleFileChange} accept="image/*" />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" value={formData.content} onChange={handleChange} placeholder="Enter your content" required />
      </div>


      {/* Add a confirmation checkbox */}
      <div className="confirmation-checkbox">
        <input
          type="checkbox"
          id="confirmCheckbox"
          name="confirmCheckbox"
          checked={confirmCheckbox}
          onChange={() => setConfirmCheckbox(!confirmCheckbox)}
        />
        <label htmlFor="confirmCheckbox">I confirm that the information publish to AD.</label>
      </div>

      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" />

     

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default UpdateAd