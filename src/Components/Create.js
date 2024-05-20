// Create Component - Naye data ko create karne ke liye form provide karta hai
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState(""); // State variable to store name input
    const [email, setEmail] = useState(""); // State variable to store email input
    const [password, setPassword] = useState(""); // State variable to store password input
    const navigate = useNavigate(); // React Router hook to navigate between routes

    // Form submit hone par yeh function call hota hai
    const handleSubmit = (e) => {
        e.preventDefault(); // Form submit ka default behavior rokta hai
        // Server ko POST request bhejne ke liye axios library ka use kiya gaya hai
        axios.post(
            'https://66409e71a7500fcf1a9e3e36.mockapi.io/api/crud/crud_api', // Server ka endpoint URL
            { name: name, email: email, password: password } // Bhejne ke liye data object mein store kiya gaya hai
        )
        .then(() => {
            navigate("/read"); // Server se response milne ke baad, Read component par redirect kiya jata hai
        });
    };

    return (
        // Create form with input fields for name, email, and password
        // Submit button to send data to server
<>
  <div className='d-flex justify-content-between m-3'>
  <h2>Create</h2>
  <Link to = "/read">
  <button className='btn btn-primary'>Show Data</button>
  </Link>
  </div>
<form>
<div className="mb-3">
    <label className='form-label'>Name</label>
    <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label className='form-label'>Email address</label>
    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  </>


    );
}

export default Create;


