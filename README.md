<h1>Contact Management Web Application - Erino Assignmentt</h1>

<h2>Project Description</h2>

<p>
  The Contact Management Application is a full-stack project that allows users to add, view, and delete contact details. 
  The application is designed to manage and display contact information in a user-friendly interface. 
  The backend is built using Node.js and Express.js, while the frontend is developed using React.js.
  Data persistence is handled via a PostgreSQL database.
</p>

<h3>Key Features: </h3>
<ol>
  <li>Add Contact: Users can add a new contact through a form.</li>
  <li>View Contacts: Contacts are displayed in a tabular format for easy viewing.</li>
  <li>Delete Contacts: Users can delete contacts from the table.</li>
  <li>Responsive Design: The UI is designed to be user-friendly and accessible.</li>
</ol>

<h2>Setup Instructions</h2>
<h4>Tools and Teachnologies used:</h4>
<ul>
  <li>Node.js with Express.js Framework</li>
  <li>npm (Node Package Manager)</li>
  <li>PostgreSQL - database</li>
  <li>VS Code - code editor</li>
</ul>

  

<h3>Setup Instructions</h3>
<ol>
  <li>Clone the repository
    <p>git clone https://github.com/vishnumora79/ContactManagement-Erino-Assignment.git</p>
    <p>cd ContactManagement-Erino-Assignment</p>
  </li>

  <li> Install dependencies
   <ul>
     <li>
       Navigate to the backend folder and install dependencies:
       <p>cd backend</p>
       <p>npm install</p>
     </li>
     <li>
       Navigate to the frontend folder and install dependencies:
       <p>cd frontend/Contact_UI</p>
       <p>npm install</p>
     </li>
   </ul>
    
  </li>

  <li>
    Set up database
    <p>crete a databse in PostgreSQL (make sure you installed PostgreSQL in your system</p>
    <p>Table Schema Script:</p>
    <code>
      CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15),
    company VARCHAR(100),
    jobTitle VARCHAR(50)
);
    </code>
    
    
  </li>
  
  
  
</ol>

