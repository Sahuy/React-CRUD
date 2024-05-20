import React from 'react'; // React module ko import kiya gaya hai
import axios from 'axios'; // Axios library ko import kiya gaya hai
import { useEffect, useState } from 'react'; // React ke useEffect aur useState hooks ko import kiya gaya hai
import { Link } from 'react-router-dom'; // React Router ke Link component ko import kiya gaya hai

const Read = () => {
    const [data, setData] = useState([]); // useState hook ka use kiya gaya hai data state ko manage karne ke liye, jismein initially empty array hai
    const [tabledark, setTableDark] = useState(''); // useState hook ka use kiya gaya hai tabledark state ko manage karne ke liye, jismein initially empty string hai

    // getData function: Server se data fetch karke data state ko update karta hai
    function getData() {
        axios.get("https://66409e71a7500fcf1a9e3e36.mockapi.io/api/crud/crud_api") // Server se data fetch karne ke liye GET request bheja jata hai
            .then((res) => { // Promise ka use kiya gaya hai jo resolve hota hai jab server se response milta hai
                console.log(res.data); // Server se mila data console par log kiya gaya hai
                setData(res.data); // Server se mila data data state mein set kiya gaya hai
            })
    }

    // handleDelete function: Server se data delete karne ke liye DELETE request bhejta hai
    function handleDelete(id) {
        axios.delete(`https://66409e71a7500fcf1a9e3e36.mockapi.io/api/crud/crud_api/${id}`) // Server se data delete karne ke liye DELETE request bheja jata hai
            .then(() => { // Promise ka use kiya gaya hai jo resolve hota hai jab server se response milta hai
                getData(); // Server se data delete hone ke baad fir se updated data fetch karke display kiya jata hai
            })
    }

    // setToLocalStorage function: LocalStorage mein ID, name, email, aur password ko set karta hai
    const setToLocalStorage = (id, name, email, password) => {
        localStorage.setItem("id", id); // LocalStorage mein ID ko set kiya gaya hai
        localStorage.setItem("name", name); // LocalStorage mein name ko set kiya gaya hai
        localStorage.setItem("email", email); // LocalStorage mein email ko set kiya gaya hai
        localStorage.setItem("password", password); // LocalStorage mein password ko set kiya gaya hai
    }

    // useEffect hook: Component ka initial render hone ke baad data fetch karne ke liye use kiya gaya hai
    useEffect(() => {
        getData(); // getData function call kiya gaya hai
    }, []);

    return (
        <> {/* Fragment ka use kiya gaya hai multiple elements ko return karne ke liye */}
            {/* Dark mode toggle button */}
            <div className="form-check form-switch m-3">
                <input className="form-check-input" type="checkbox" onClick={() => {
                    if (tabledark === 'table-dark') { // Agar tabledark state 'table-dark' hai
                        setTableDark(''); // Tabledark state ko empty string mein set kiya jata hai (Dark mode off)
                    } else { // Agar tabledark state 'table-dark' nahi hai
                        setTableDark('table-dark'); // Tabledark state ko 'table-dark' mein set kiya jata hai (Dark mode on)
                    }
                }} />
            </div>

            {/* Heading and Create Button */}
            <div className='d-flex justify-content-between m-3'>
                <h2>Read Operation</h2> {/* Heading */}
                <Link to="/">
                    <button className='btn btn-secondary'>Create</button> {/* Create button */}
                </Link>
            </div>

            {/* Table to display data */}
            <table className={`table ${tabledark}`}> {/* Table with dynamic class for dark mode */}
                <thead>
                    <tr>
                        <th>Id</th> {/* Table header: Id */}
                        <th>Name</th> {/* Table header: Name */}
                        <th>Email</th> {/* Table header: Email */}
                        <th>Password</th> {/* Table header: Password */}
                        <th></th> {/* Table header: Edit */}
                        <th></th> {/* Table header: Delete */}
                    </tr>
                </thead>
                {/* Mapping through the data array to display each data item */}
                {data.map((eachData) => { // data state ke har element ko map karke display kiya jata hai
                    return (
                        <tbody key={eachData.id}> {/* Each data item ke liye ek tbody element banaya gaya hai */}
                            <tr>
                                <th>{eachData.id}</th> {/* ID display kiya gaya hai */}
                                <td>{eachData.name}</td> {/* Name display kiya gaya hai */}
                                <td>{eachData.email}</td> {/* Email display kiya gaya hai */}
                                <td>{eachData.password}</td> {/* Password display kiya gaya hai */}
                                {/* Edit button */}
                                <td>
                                    <Link to="/update"> {/* Edit button ke liye Update route par redirect kiya gaya hai */}
                                        <button type="button" className="btn btn-success" onClick={() => setToLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.email,
                                            eachData.password
                                        )}>
                                            Edit
                                        </button>
                                    </Link>
                                </td>
                                {/* Delete button */}
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    );
}

export default Read; // Read component ko export kiya gaya hai
