import React, {useState} from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

// Component which contains form and user details
function ContactManagement() {
    return (
        <div>
            <ContactForm />
            <ContactTable  />
        </div>
    );
}

export default ContactManagement;