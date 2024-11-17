import express from "express";
import pool from "./db.js";

const router = express.Router();

// custom middleware for data validation
const validateContact = (request, response, next) => {
    const {firstName, lastName, email, phoneNumber, company, jobTitle} = request.body;
    if(!firstName || !lastName || !email || !phoneNumber || !company || !jobTitle) {
        return response.status(400).json({error : "All fields are required."});
    }
    next();
};

// API : POST - to create user 
router.post("/contacts", validateContact, async (request, response) => {
    try {
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = request.body;
        const duplicate = await pool.query("SELECT * FROM contacts WHERE email = $1", [email]);

        if (duplicate.rows.length > 0) {
            return response.status(400).json({ error: "Email already exists." });
        }

        const result = await pool.query(
            "INSERT INTO contacts (firstName, lastName, email, phoneNumber, company, jobTitle) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [firstName, lastName, email, phoneNumber, company, jobTitle]
        );

        response.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: "Server error." });
    }
});

// API - GET : to get all users

router.get("/contacts", async (request, response) => {
    try {
        const result = await pool.query("Select * from contacts");
        return response.json(result.rows);
    } catch(error) {
        console.log(error.message);
        response.status(500).json({error : "Server error"});
    }
});

// API : PUT - to update a particular user data
router.put("/contacts/:id", validateContact, async (request, response) => {
    try {
        const { id } = request.params;
        const {firstName, lastName, email, phoneNumber, company, jobTitle} = request.body;

        const result = await pool.query(
            `update contacts set firstName = $1, lastName = $2, email = $3, phoneNumber = $4, company = $5, jobTitle = $6 where id = $7 returning *`,
            [firstName, lastName, email, phoneNumber, company, jobTitle]
        );

        if(result.rowCount === 0) {
            return response.status(404).json({error : "Contact not found."});
        }

        response.json(result.rows[0]);
    }  catch(error) {
        console.error(error.message);
        response.status(500).json({error:"server error"});
    }
});

// API - DELETE - to delete a record
router.delete("/contacts/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await pool.query("delete from contacts where id = $1 returning *", [id]);

        if(result.rowCount === 0) {
            return response.status(404).json({error : "Contact not found"});
        }

        response.json({message : "Contact deleted successfully"});
    } catch(error) {
        console.error(error.message);
        response.status(500).json({error : "server error"});
    }
});

export default router;