// // import React from 'react'

// // const Myprofile = () => {
// //   return (
// //     <div style={{display:'flex',justifyContent:"center",alignItems:"center", marginTop:"100px",textAlign:"center"}}>Myprofile</div>
// //   )
// // }

// // export default Myprofile

// import React, { useState } from 'react';
// import './Myprofile.css'
// const Myprofile = () => {
//  // State variables for form fields and confirmation checkbox
//  const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     specialization: '',
//     email: '',
//     number: '',
//     state: '',
//     district: '',
//     address: '',
//     whatsappLink: '',
//     facebookLink: '',
//     websiteLink: '',
//     profileImage: null,
//   });
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   // Function to handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   // Function to handle confirmation checkbox change
//   const handleCheckboxChange = () => {
//     setIsConfirmed(!isConfirmed);
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if confirmation checkbox is checked
//     if (!isConfirmed) {
//       alert('Please confirm before submitting.');
//       return;
//     }
//     // Send form data to backend or perform any desired actions
//     console.log(formData);
//     // Reset form fields
//     setFormData({
//       name: '',
//       designation: '',
//       specialization: '',
//       email: '',
//       number: '',
//       state: '',
//       district: '',
//       address: '',
//       whatsappLink: '',
//       facebookLink: '',
//       websiteLink: '',
//       profileImage: null,
//     });
//     // Reset confirmation checkbox
//     setIsConfirmed(false);
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         <label>Designation:</label>
//         <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
//         <label>Specialization:</label>
//         <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         <label>Number:</label>
//         <input type="text" name="number" value={formData.number} onChange={handleChange} required />
//         <label>State:</label>
//         <select name="state" value={formData.state} onChange={handleChange} required>
//   <option value="">Select State</option>
//   <option value="Andhra Pradesh">Andhra Pradesh</option>
//   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//   <option value="Assam">Assam</option>
//   <option value="Bihar">Bihar</option>
//   <option value="Chhattisgarh">Chhattisgarh</option>
//   <option value="Goa">Goa</option>
//   <option value="Gujarat">Gujarat</option>
//   <option value="Haryana">Haryana</option>
//   <option value="Himachal Pradesh">Himachal Pradesh</option>
//   <option value="Jharkhand">Jharkhand</option>
//   <option value="Karnataka">Karnataka</option>
//   <option value="Kerala">Kerala</option>
//   <option value="Madhya Pradesh">Madhya Pradesh</option>
//   <option value="Maharashtra">Maharashtra</option>
//   <option value="Manipur">Manipur</option>
//   <option value="Meghalaya">Meghalaya</option>
//   <option value="Mizoram">Mizoram</option>
//   <option value="Nagaland">Nagaland</option>
//   <option value="Odisha">Odisha</option>
//   <option value="Punjab">Punjab</option>
//   <option value="Rajasthan">Rajasthan</option>
//   <option value="Sikkim">Sikkim</option>
//   <option value="Tamil Nadu">Tamil Nadu</option>
//   <option value="Telangana">Telangana</option>
//   <option value="Tripura">Tripura</option>
//   <option value="Uttar Pradesh">Uttar Pradesh</option>
//   <option value="Uttarakhand">Uttarakhand</option>
//   <option value="West Bengal">West Bengal</option>
//   <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//   <option value="Chandigarh">Chandigarh</option>
//   <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
//   <option value="Lakshadweep">Lakshadweep</option>
//   <option value="Delhi">Delhi</option>
//   <option value="Puducherry">Puducherry</option>
// </select>

//         <label>District:</label>
//         <input type="text" name="district" value={formData.district} onChange={handleChange} required />
//         <label>Address:</label>
//         <textarea name="address" value={formData.address} onChange={handleChange} required />
//         <label>WhatsApp Link:</label>
//         <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} />
//         <label>Facebook Link:</label>
//         <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} />
//         <label>Website Link:</label>
//         <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} />
//         <label>Profile Image:</label>
//         <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" />
//         <label className="checkbox-label">
//           <input type="checkbox" checked={isConfirmed} onChange={handleCheckboxChange} />
//           I confirm that the information provided is accurate.
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default Myprofile 


// import React, { useState } from 'react';
// import './Myprofile.css'; // Import your CSS file for styling

// const Form = () => {
//   // State variables for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     specialization: '',
//     email: '',
//     number: '',
//     state: '',
//     district: '',
//     address: '',
//     whatsappLink: '',
//     facebookLink: '',
//     websiteLink: '',
//     profileImage: null,
//     confirmation: false,
//   });

//   // Function to handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   // Function to handle confirmation checkbox
//   const handleConfirmationChange = () => {
//     setFormData({ ...formData, confirmation: !formData.confirmation });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if confirmation checkbox is checked
//     if (!formData.confirmation) {
//       alert('Please confirm before submitting.');
//       return;
//     }
//     // Send form data to backend or perform any desired actions
//     console.log(formData);
//     // Reset form fields
//     setFormData({
//       name: '',
//       designation: '',
//       specialization: '',
//       email: '',
//       number: '',
//       state: '',
//       district: '',
//       address: '',
//       whatsappLink: '',
//       facebookLink: '',
//       websiteLink: '',
//       profileImage: null,
//       confirmation: false,
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Your Profile Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="designation">Designation:</label>
//           <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="specialization">Specialization:</label>
//           <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Enter your specialization" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="number">Number:</label>
//           <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="state">State:</label>
//           <select name="state" value={formData.state} onChange={handleChange} required>
//             <option value="">Select State</option>
//             <option value="">Select State</option>
//   <option value="Andhra Pradesh">Andhra Pradesh</option>
//   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//   <option value="Assam">Assam</option>
//   <option value="Bihar">Bihar</option>
//   <option value="Chhattisgarh">Chhattisgarh</option>
//   <option value="Goa">Goa</option>
//   <option value="Gujarat">Gujarat</option>
//   <option value="Haryana">Haryana</option>
//   <option value="Himachal Pradesh">Himachal Pradesh</option>
//   <option value="Jharkhand">Jharkhand</option>
//   <option value="Karnataka">Karnataka</option>
//   <option value="Kerala">Kerala</option>
//   <option value="Madhya Pradesh">Madhya Pradesh</option>
//   <option value="Maharashtra">Maharashtra</option>
//   <option value="Manipur">Manipur</option>
//   <option value="Meghalaya">Meghalaya</option>
//   <option value="Mizoram">Mizoram</option>
//   <option value="Nagaland">Nagaland</option>
//   <option value="Odisha">Odisha</option>
//   <option value="Punjab">Punjab</option>
//   <option value="Rajasthan">Rajasthan</option>
//   <option value="Sikkim">Sikkim</option>
//   <option value="Tamil Nadu">Tamil Nadu</option>
//   <option value="Telangana">Telangana</option>
//   <option value="Tripura">Tripura</option>
//   <option value="Uttar Pradesh">Uttar Pradesh</option>
//   <option value="Uttarakhand">Uttarakhand</option>
//   <option value="West Bengal">West Bengal</option>
//   <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//   <option value="Chandigarh">Chandigarh</option>
//   <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
//   <option value="Lakshadweep">Lakshadweep</option>
//   <option value="Delhi">Delhi</option>
//   <option value="Puducherry">Puducherry</option>


//             {/* Add options for states */}
//           </select>
//         </div>
//         <div className="form-row">
//           <label htmlFor="district">District:</label>
//           <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="address">Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="whatsappLink">WhatsApp Link:</label>
//           <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="facebookLink">Facebook Link:</label>
//           <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="websiteLink">Website Link:</label>
//           <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="profileImage">Profile Image:</label>
//           <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" />
//         </div>
//         <div className="confirmbox">
//           <input type="checkbox" name="confirmation" checked={formData.confirmation} onChange={handleConfirmationChange} />
//           <label htmlFor="confirmation">I confirm that the information provided is correct.</label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;


// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Myprofile.css"

// const MyProfile = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     specialization: '',
//     email: '',
//     number: '',
//     state: '',
//     district: '',
//     address: '',
//     whatsappLink: '',
//     facebookLink: '',
//     websiteLink: '',
//     profileImage: null,
//   });
//   const [confirmationChecked, setConfirmationChecked] = useState(false);
//   const [showConfirmation1, setShowConfirmation1] = useState(false); // State variable for controlling display of first confirmation message
//   const [showConfirmation2, setShowConfirmation2] = useState(false); // State variable for controlling display of second confirmation message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   const handleConfirmationChange = () => {
//     setConfirmationChecked(!confirmationChecked);
//   };

//   const handleShowConfirmation1Change = () => {
//     setShowConfirmation1(!showConfirmation1); // Toggle the state variable
//   };

//   const handleShowConfirmation2Change = () => {
//     setShowConfirmation2(!showConfirmation2); // Toggle the state variable
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!confirmationChecked) {
//       alert('Please confirm before submitting the form.');
//       return;
//     }
//     console.log(formData);
//     setFormData({
//       name: '',
//       designation: '',
//       specialization: '',
//       email: '',
//       number: '',
//       state: '',
//       district: '',
//       address: '',
//       whatsappLink: '',
//       facebookLink: '',
//       websiteLink: '',
//       profileImage: null,
//     });

//     setSubmitted(true);
//     toast.success('Form submitted successfully!', {
//       position: 'top-right',
//     });
//   };
  
//   return (
//     <div className="form-container">
//       <h2>Enter Your Profile Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="designation">Designation:</label>
//           <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="specialization">Specialization:</label>
//           <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Enter your specialization" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="number">Number:</label>
//           <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="state">State:</label>
//           <select name="state" value={formData.state} onChange={handleChange} required>
//             <option value="">Select State</option>
//             <option value="">Select State</option>
//   <option value="Andhra Pradesh">Andhra Pradesh</option>
//   <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//   <option value="Assam">Assam</option>
//   <option value="Bihar">Bihar</option>
//   <option value="Chhattisgarh">Chhattisgarh</option>
//   <option value="Goa">Goa</option>
//   <option value="Gujarat">Gujarat</option>
//   <option value="Haryana">Haryana</option>
//   <option value="Himachal Pradesh">Himachal Pradesh</option>
//   <option value="Jharkhand">Jharkhand</option>
//   <option value="Karnataka">Karnataka</option>
//   <option value="Kerala">Kerala</option>
//   <option value="Madhya Pradesh">Madhya Pradesh</option>
//   <option value="Maharashtra">Maharashtra</option>
//   <option value="Manipur">Manipur</option>
//   <option value="Meghalaya">Meghalaya</option>
//   <option value="Mizoram">Mizoram</option>
//   <option value="Nagaland">Nagaland</option>
//   <option value="Odisha">Odisha</option>
//   <option value="Punjab">Punjab</option>
//   <option value="Rajasthan">Rajasthan</option>
//   <option value="Sikkim">Sikkim</option>
//   <option value="Tamil Nadu">Tamil Nadu</option>
//   <option value="Telangana">Telangana</option>
//   <option value="Tripura">Tripura</option>
//   <option value="Uttar Pradesh">Uttar Pradesh</option>
//   <option value="Uttarakhand">Uttarakhand</option>
//   <option value="West Bengal">West Bengal</option>
//   <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//   <option value="Chandigarh">Chandigarh</option>
//   <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
//   <option value="Lakshadweep">Lakshadweep</option>
//   <option value="Delhi">Delhi</option>
//   <option value="Puducherry">Puducherry</option>


//             {/* Add options for states */}
//           </select>
//         </div>
//         <div className="form-row">
//           <label htmlFor="district">District:</label>
//           <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="address">Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="whatsappLink">WhatsApp Link:</label>
//           <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="facebookLink">Facebook Link:</label>
//           <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="websiteLink">Website Link:</label>
//           <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="profileImage">Profile Image:</label>
//           <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" />
//         </div>
//         <div className="form-row">
//           <input type="checkbox" checked={showConfirmation1} onChange={handleShowConfirmation1Change} />
//           <label htmlFor="showConfirmation1">Show confirmation message 1</label>
//         </div>
//         <div className="form-row">
//           <input type="checkbox" checked={showConfirmation2} onChange={handleShowConfirmation2Change} />
//           <label htmlFor="showConfirmation2">Show confirmation message 2</label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submitted && showConfirmation1 && (
//         <p className="confirmation-message">Form submitted successfully! (Message 1)</p>
//       )}
//       {submitted && showConfirmation2 && (
//         <p className="confirmation-message">Form submitted successfully! (Message 2)</p>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyProfile

// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Myprofile.css"

// const MyProfile = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     specialization: '',
//     email: '',
//     number: '',
//     state: '',
//     district: '',
//     address: '',
//     whatsappLink: '',
//     facebookLink: '',
//     websiteLink: '',
//     profileImage: null,
//   });
//   const [showConfirmation1, setShowConfirmation1] = useState(false); // State variable for controlling display of first confirmation message
//   const [showConfirmation2, setShowConfirmation2] = useState(false); // State variable for controlling display of second confirmation message
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   const handleShowConfirmation1Change = () => {
//     setShowConfirmation1(!showConfirmation1); // Toggle the state variable
//   };

//   const handleShowConfirmation2Change = () => {
//     setShowConfirmation2(!showConfirmation2); // Toggle the state variable
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       name: '',
//       designation: '',
//       specialization: '',
//       email: '',
//       number: '',
//       state: '',
//       district: '',
//       address: '',
//       whatsappLink: '',
//       facebookLink: '',
//       websiteLink: '',
//       profileImage: null,
//     });
//     setSubmitted(true);
//     toast.success('Form submitted successfully!', {
//       position: 'top-right',
//     });
//   };

//   return (
  //   <div className="form-container">
  //     <h2>Enter Your Profile Details</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div className="form-row">
  //         <label htmlFor="name">Name:</label>
  //         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="designation">Designation:</label>
  //         <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="specialization">Specialization:</label>
  //         <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Enter your specialization" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="email">Email:</label>
  //         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="number">Number:</label>
  //         <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="state">State:</label>
  //         <select name="state" value={formData.state} onChange={handleChange} required>
  //           <option value="">Select State</option>
  //           <option value="">Select State</option>
  // <option value="Andhra Pradesh">Andhra Pradesh</option>
  // <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  // <option value="Assam">Assam</option>
  // <option value="Bihar">Bihar</option>
  // <option value="Chhattisgarh">Chhattisgarh</option>
  // <option value="Goa">Goa</option>
  // <option value="Gujarat">Gujarat</option>
  // <option value="Haryana">Haryana</option>
  // <option value="Himachal Pradesh">Himachal Pradesh</option>
  // <option value="Jharkhand">Jharkhand</option>
  // <option value="Karnataka">Karnataka</option>
  // <option value="Kerala">Kerala</option>
  // <option value="Madhya Pradesh">Madhya Pradesh</option>
  // <option value="Maharashtra">Maharashtra</option>
  // <option value="Manipur">Manipur</option>
  // <option value="Meghalaya">Meghalaya</option>
  // <option value="Mizoram">Mizoram</option>
  // <option value="Nagaland">Nagaland</option>
  // <option value="Odisha">Odisha</option>
  // <option value="Punjab">Punjab</option>
  // <option value="Rajasthan">Rajasthan</option>
  // <option value="Sikkim">Sikkim</option>
  // <option value="Tamil Nadu">Tamil Nadu</option>
  // <option value="Telangana">Telangana</option>
  // <option value="Tripura">Tripura</option>
  // <option value="Uttar Pradesh">Uttar Pradesh</option>
  // <option value="Uttarakhand">Uttarakhand</option>
  // <option value="West Bengal">West Bengal</option>
  // <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  // <option value="Chandigarh">Chandigarh</option>
  // <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  // <option value="Lakshadweep">Lakshadweep</option>
  // <option value="Delhi">Delhi</option>
  // <option value="Puducherry">Puducherry</option>


  //           {/* Add options for states */}
  //         </select>
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="district">District:</label>
  //         <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="address">Address:</label>
  //         <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="whatsappLink">WhatsApp Link:</label>
  //         <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />
  //       </div>
  //       <div className="form-row">
  //         <label htmlFor="facebookLink">Facebook Link:</label>
  //         <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />
  //       </div>

  //     <div className="form-row">
  //       <label htmlFor="websiteLink">Website Link:</label>
  //       <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />
  //     </div>
  //     <div className="form-row">
  //       <label htmlFor="profileImage">Profile Image:</label>
  //       <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" />
  //     </div>
//         {/* Add more input fields for other form fields */}
//         <div className="form-row">
//           <input type="checkbox" checked={showConfirmation1} onChange={handleShowConfirmation1Change} />
//           <label htmlFor="showConfirmation1">Show confirmation message 1</label>
//         </div>
//         <div className="form-row">
//           <input type="checkbox" checked={showConfirmation2} onChange={handleShowConfirmation2Change} />
//           <label htmlFor="showConfirmation2">Show confirmation message 2</label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submitted && showConfirmation1 && (
//         <p className="confirmation-message">Form submitted successfully! (Message 1)</p>
//       )}
//       {submitted && showConfirmation2 && (
//         <p className="confirmation-message">Form submitted successfully! (Message 2)</p>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyProfile;






// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Myprofile.css"

// const MyProfile = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     specialization: '',
//     email: '',
//     number: '',
//     state: '',
//     district: '',
//     address: '',
//     whatsappLink: '',
//     facebookLink: '',
//     websiteLink: '',
//     profileImage: null,
//   });
//   const [confirmationChecked, setConfirmationChecked] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false); // State variable for controlling display of confirmation message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//   };

//   const handleConfirmationChange = () => {
//     setConfirmationChecked(!confirmationChecked);
//   };

//   const handleShowConfirmationChange = () => {
//     setShowConfirmation(!showConfirmation); // Toggle the state variable
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!confirmationChecked) {
//       alert('Please confirm before submitting the form.');
//       return;
//     }
//     console.log(formData);
//     setFormData({
//       name: '',
//       designation: '',
//       specialization: '',
//       email: '',
//       number: '',
//       state: '',
//       district: '',
//       address: '',
//       whatsappLink: '',
//       facebookLink: '',
//       websiteLink: '',
//       profileImage: null,
//     });
//     setSubmitted(true);
//     toast.success('Form submitted successfully!', {
//       position: 'top-right',
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Your Profile Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="designation">Designation:</label>
//           <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="specialization">Specialization:</label>
//           <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Enter your specialization" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="number">Number:</label>
//           <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />
//         </div>
  //       <div className="form-row">
  //         <label htmlFor="state">State:</label>
  //         <select name="state" value={formData.state} onChange={handleChange} required>
  //           <option value="">Select State</option>
  //           <option value="">Select State</option>
  // <option value="Andhra Pradesh">Andhra Pradesh</option>
  // <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  // <option value="Assam">Assam</option>
  // <option value="Bihar">Bihar</option>
  // <option value="Chhattisgarh">Chhattisgarh</option>
  // <option value="Goa">Goa</option>
  // <option value="Gujarat">Gujarat</option>
  // <option value="Haryana">Haryana</option>
  // <option value="Himachal Pradesh">Himachal Pradesh</option>
  // <option value="Jharkhand">Jharkhand</option>
  // <option value="Karnataka">Karnataka</option>
  // <option value="Kerala">Kerala</option>
  // <option value="Madhya Pradesh">Madhya Pradesh</option>
  // <option value="Maharashtra">Maharashtra</option>
  // <option value="Manipur">Manipur</option>
  // <option value="Meghalaya">Meghalaya</option>
  // <option value="Mizoram">Mizoram</option>
  // <option value="Nagaland">Nagaland</option>
  // <option value="Odisha">Odisha</option>
  // <option value="Punjab">Punjab</option>
  // <option value="Rajasthan">Rajasthan</option>
  // <option value="Sikkim">Sikkim</option>
  // <option value="Tamil Nadu">Tamil Nadu</option>
  // <option value="Telangana">Telangana</option>
  // <option value="Tripura">Tripura</option>
  // <option value="Uttar Pradesh">Uttar Pradesh</option>
  // <option value="Uttarakhand">Uttarakhand</option>
  // <option value="West Bengal">West Bengal</option>
  // <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  // <option value="Chandigarh">Chandigarh</option>
  // <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  // <option value="Lakshadweep">Lakshadweep</option>
  // <option value="Delhi">Delhi</option>
  // <option value="Puducherry">Puducherry</option>


  //           {/* Add options for states */}
  //         </select>
//         </div>
//         <div className="form-row">
//           <label htmlFor="district">District:</label>
//           <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="address">Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
//         </div>
//         <div className="form-row">
//           <label htmlFor="whatsappLink">WhatsApp Link:</label>
//           <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />
//         </div>
//         <div className="form-row">
//           <label htmlFor="facebookLink">Facebook Link:</label>
//           <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />
//         </div>

//       <div className="form-row">
//         <label htmlFor="websiteLink">Website Link:</label>
//         <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />
//       </div>
//       <div className="form-row">
//         <label htmlFor="profileImage">Profile Image:</label>
//         <input type="file" name="profileImage" onChange={handleFileChange} accept="image/*" />
//       </div>        <div className="form-row">
//           <input type="checkbox" checked={showConfirmation} onChange={handleShowConfirmationChange} />
//           <label htmlFor="showConfirmation">Show confirmation message</label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submitted && showConfirmation && (
//         <p className="confirmation-message">Form submitted successfully!</p>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyProfile;




// MyProfile.js
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Myprofile.css"
const MyProfile = () => {
  // State variables for form fields and confirmation
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    specialization: '',
    email: '',
    number: '',
    state: '',
    district: '',
    address: '',
    whatsappLink: '',
    facebookLink: '',
    websiteLink: '',
    profileImage: null,
  });
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setConfirmationChecked(!confirmationChecked);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if confirmation checkbox is checked
    if (!confirmationChecked) {
      alert('Please confirm before submitting the form.');
      return;
    }
    // Send form data to backend or perform any desired actions
    console.log(formData);
    // Reset form fields and set submitted state to true
    setFormData({
      name: '',
      designation: '',
      specialization: '',
      email: '',
      number: '',
      state: '',
      district: '',
      address: '',
      whatsappLink: '',
      facebookLink: '',
      websiteLink: '',
      profileImage: null,
    });
    setSubmitted(true);
    // Show toast message
    toast.success('Form submitted successfully!', {
          position: 'top-right',
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Your Profile Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter your designation" required />

        <label htmlFor="specialization">Specialization:</label>
        <input type="text" id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Enter your specialization" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

        <label htmlFor="number">Number:</label>
        <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} placeholder="Enter your number" required />

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

        </select>

        <label htmlFor="district">District:</label>
        <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your district" required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />

        <label htmlFor="whatsappLink">WhatsApp Link:</label>
        <input type="text" id="whatsappLink" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} placeholder="Enter your WhatsApp link" />

        <label htmlFor="facebookLink">Facebook Link:</label>
        <input type="text" id="facebookLink" name="facebookLink" value={formData.facebookLink} onChange={handleChange} placeholder="Enter your Facebook link" />

        <label htmlFor="websiteLink">Website Link:</label>
        <input type="text" id="websiteLink" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Enter your website link" />

        <label htmlFor="profileImage">Profile Image:</label>
        <input type="file" id="profileImage" name="profileImage" onChange={handleFileChange} accept="image/*" />

     <div className='confirmbox'>
       <label htmlFor="confirmationCheckbox"> Confirm To Publish  </label>
          <input type="checkbox" id="confirmationCheckbox" checked={confirmationChecked} onChange={handleCheckboxChange} />
         
       
     </div>
       

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p className="confirmation-message">Form submitted successfully!</p>
      )}

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default MyProfile;


