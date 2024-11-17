import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContactTable.css";

// Contact Table component to diplay user data
function ContactTable() {
    // state for userdata
    const [contacts, setContacts] = useState([]);

    // API call to fetch data from database
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/contacts");
                console.log(response.data);
                setContacts(response.data);
                // setContacts(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Unable to fetch contacts ", error);
            }
        };
        fetchContacts();
    }, []);

    // Function to delete a perticular user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/contacts/${id}`);
            setContacts(contacts.filter((contact) => contact.id !== id));
        } catch(error) {
            console.error("Unable to delete contact", error);
        }
    };

    return (
        <div className="table-container">
            <table className="contact-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstname}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phonenumber}</td>
                            <td>{contact.company}</td>
                            <td>{contact.jobtitle}</td>
                            <td>
                                <button className="btn edit-btn">Edit</button>
                                <button className="btn delete-btn" onClick={() => handleDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;





