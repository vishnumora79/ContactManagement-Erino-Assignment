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
    <code>
      git clone https://github.com/vishnumora79/ContactManagement-Erino-Assignment.git
    cd ContactManagement-Erino-Assignment
    </code>
  </li>

  <li> Install dependencies
   <ul>
     <li>
       Navigate to the backend folder and install dependencies:
       <code>
         cd backend
         npm install
       </code>
     </li>
     <li>
       Navigate to the frontend folder and install dependencies:
       <code>
         cd frontend/Contact_UI
         npm install
       </code>
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

  <li>
    Configure Environment Variables:
    <p> create a .env file in backend directory and add database credentials</p>
    <code>
      PORT = 3000
DB_HOST = localhost
DB_USER = postgres
DB_PASSWORD = yourPassword
DB_NAME = yourDatabaseName
DB_PORT = 5432
    </code>
  </li>

  <li>
    Run the backend server
    <code>
      cd backend
      npm start
    </code>
  </li>

  <li>
    Run  Frontend Application
    <code>
      cd frontend/Contact_UI
      npm run dev
    </code>
  </li>
</ol>

<h2>How the Application Works</h2>
<h3>Frontend</h3>
<ul>
  <li>Built with React.js vite bundler </li>
  <li>ContactForm Component: Collects user input to add new contacts.</li>
  <li>ContactTable Component: Displays a list of contacts and provides delete functionality</li>
  <li>State Management: Shared state is handled using a parent component for synchronization between form and table.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Developed with Node.js and Express.js.</li>
  <li>
    <ul>
      <li> POST /api/contacts: Adds a new contact to the database. </li>
      <li> GET /api/contacts: Fetches all contacts from the database.</li>
      <li> PUT /api/contacts/:id: Updates a contact based on its ID.</li>
      <li> DELETE /api/contacts/:id: Deletes a contact based on its ID.</li>
    </ul>
  </li>
  <li>Database: Data is stored in a PostgreSQL database using a normalized schema.</li>
</ul>


<h2>Major Technical Decisions</h2>
<ol>
  <li>Frontend Framework: Chose React.js for its component-based architecture and efficient state management.</li>
  <li>Backend: Used Express.js for creating lightweight and scalable APIs.</li>
  <li>Database: PostgreSQL was selected for its reliability and strong relational data support.
</li>
  <li>State Management: Implemented state sharing through a parent component instead of using an external state library like Redux, as the app's scope is small.</li>
  <li>Styling: Basic CSS for responsiveness and clarity in the user interface.</li>
</ol>

