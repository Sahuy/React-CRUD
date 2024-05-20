// Update Component - Data ko update karne ke liye form provide karta hai
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Update = () => {
    const [id, setId] = useState('0'); // State variable to store data ID
    const [name, setName] = useState(''); // State variable to store updated name
    const [email, setEmail] = useState(''); // State variable to store updated email
    const [password, setPassword] = useState(''); // State variable to store updated password
    const navigate = useNavigate(); // React Router hook to navigate between routes

    // Component mount hone par, local storage se data fetch karke state variables mein set kiya jata hai
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
    }, []);

    // Update operation ke liye handleUpdate function hai
    const handleUpdate = (e) => {
        e.preventDefault(); // Form submit ka default behavior rokta hai
        // Server ko PUT request bhejne ke liye axios library ka use kiya gaya hai
        axios.put(`https://66409e71a7500fcf1a9e3e36.mockapi.io/api/crud/crud_api/${id}`, {
            name: name,
            email: email,
            password: password,
        })
        .then(() => {
            navigate("/read"); // Server se response milne ke baad, Read component par redirect kiya jata hai
        });
    };

    return (
        // Update form with input fields for name, email, and password
        // Submit button to send updated data to server

        <>
        <h2>Update Data</h2>
 <form>
 <div className="mb-3">
     <label className='form-label'>Name</label>
     <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
   </div>
 
   <div className="mb-3">
     <label className='form-label'>Email address</label>
     <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
   </div>
 
   <div className="form-group">
     <label>Password</label>
     <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
   </div>
  
   <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
 <Link to = "/read">
   <button type='submit' className='btn btn-success mx-2'>Back</button>
   </Link>
 </form>
     </>
   )
 }
 export default Update;





