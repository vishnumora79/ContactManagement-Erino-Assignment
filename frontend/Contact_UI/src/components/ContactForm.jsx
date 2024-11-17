import React, {useState, useEffect} from "react";
import axios from "axios";
import "./ContactForm.css";

// Form component
function ContactForm() {
    // component state for each input value
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");

    // method to handle the form suubmission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, phoneNumber, company, jobTitle });
        try {
            await axios.post("http://localhost:3000/api/contacts", {
                firstName,
                lastName,
                email,
                phoneNumber,
                company,
                jobTitle,
            });
            console.log("Contact added successfully");

            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
            setCompany("");
            setJobTitle("");
        } catch (error) {
            console.error("Unable to add contact ", error);
        }
    };
    
    // Form Represention
    return (
        <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Add New Contact</h2>

                <div className="form-group">
                <label>First Name: </label>
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    />
                </div>

                <div className="form-group">
                <label> Last Name: </label>
                 <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    />
                 </div>   
                
                <div className="form-group">
                <label>Email: </label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>    
                </div>

                <div className="form-group">
                <label> Phone Number: </label>
                <input 
                    type="number" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    />
                </div>

                <div className="form-group">
                <label> Company: </label>
                <input 
                    type="text" 
                    value={company} 
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter company name"
                    />
                </div>

                <div className="form-group">
                <label> Job Title: </label>
                <input 
                    type="text" 
                    value={jobTitle} 
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Enter job title"
                    />
                </div>

                <button className="submit-btn" type="submit"> Add Contact</button>
            </form>
        </div>
    );
}

export default ContactForm;