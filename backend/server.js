import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./contactRoutes.js";


dotenv.config();
const PORT = process.env.PORT || 3000;

// express instance
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use("/api", contactRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


