# Undergraduate Course Finder Website

The purpose of this website is to allow users to enter what subjects they liked in high school and based on these preferences, the application should display relevant university courses from UNSW. It is a full-stack website built using MySQL, ExpressJS, ReactJS, and NodeJS.

## Table of Contents

- [Getting Started](#getting-started)

## Getting Started

To get started with the project, you will need to have NodeJS downloaded and installed on your machine. You can download it from [here](https://nodejs.org).

You will also require MySQL to be installed which can be found [here](https://dev.mysql.com/downloads/installer/).

### Setting up the database
The data required to run the project can be found [here]. For Windows please download the data file and place it in the following location: C:\Program Files\MySQL\MySQL Server 8.0\bin.
Once the file is in the correct location, please open up the terminal and go to the directory where the data file is placed. If the default installation was followed, it should be C:\Program Files\MySQL\MySQL Server 8.0\bin.
Once in that directory, use the following command: **mysql -u {username} -p**. By default the username should be **root**.
Once connected, enter the following commands: 
  - create database project_db;
  - use project_db;
  - source project_website_data.sql;
The above commands will load all the necessary data into project_db database. If you use a different name while creating the database, please update the name in the index.js file of server.

### Setting up the backend
  - Please download the project files. In VSCode, open a terminal and navigate to the server folder in the project files.
  - Run the following command to install all the dependencies: npm install
  - In the index.js file, update the database connection on line 18 with the correct details and password.
  - Startup the backend using the following command: node .\index.js

### Setting up the frontend
  - In VSCode, open a separate terminal while keeping the backend terminal running. Navigate to the client folder of the project in the terminal
  - Please run the command: npm install
  - Once the dependencies are installed, the project can be started with the following command from client : npm run dev
  - The running application can be accessed via a web browser using: http://localhost:5173/
