# finalproj
This project is a personal finance web application designed to help users manage and plan their savings for multiple milestones. The application allows users to set financial goals, track their expenses, and visualize their progress towards achieving those goals. The web app is built using HTML, CSS, and JavaScript and incorporates a PostgreSQL database to store user data.

Installation and Setup
Follow these steps to set up the project on your local machine:

Prerequisites
Ensure you have the following installed on your system:

Node.js
npm
PostgreSQL
Steps
Clone the repository to your local machine:
git clone <https://github.com/Jess-88/finalproj>
Navigate to the project directory:finalproj
Install the required dependencies:npm install
Set up the PostgreSQL database:

Create a new database named finalproj.
Create a new user named fpuser1 with the password 12345.
Grant all privileges on the finalproj database to the user fpuser1.
Create the milestones table in the finalproj database with the following schema:
CREATE TABLE milestones (
  id SERIAL PRIMARY KEY,
  occasion VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);

Update the db.js file with your PostgreSQL connection details if necessary.

Start the development server:
node server.js

Start frontend 
http-server

Open your web browser and navigate to http://localhost:8081.

The web application should now be running on your local machine. You can now use the application to manage and plan your savings for multiple milestones.

This project uses the following dependencies:

express: A minimal and flexible Node.js web application framework.
cors: A middleware that enables Cross-Origin Resource Sharing (CORS).
body-parser: A middleware that parses incoming request bodies to make it easier to handle data in the request.
pg: A non-blocking PostgreSQL client for Node.js.