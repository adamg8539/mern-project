# Undergraduate Course Finder Website

The purpose of this website is to allow users to enter what subjects they liked in high school and based on these preferences, the application should display relevant university courses from UNSW. It is a full-stack website built using MySQL, ExpressJS, ReactJS, and NodeJS.

## Table of Contents

- [Starting The Project](#starting-the-project)
- [Project Inspiration](#project-inspiration)
- [Project Goals and Minimum Viable Product](#project-goals-and-minimum-viable-product)
- [Initial Designs and Problems](#initial-design-and-problems)
- [Final Design and Why It's Better](#final-design-and-why-it's-better)
- [Tech Stack](#tech-stack)

## Starting The Project

To get started with the project, you will need to have NodeJS downloaded and installed on your machine. You can download it from [here](https://nodejs.org).

You will also require MySQL to be installed which can be found [here](https://dev.mysql.com/downloads/installer/).

Please download the project files

### Setting up the database
Once the project files are downloaded please carry out the following steps:
  - Inside the project files, there is a file called project_website_data.sql which contains all the SQL data for the project. Place this file in the following directory: C:\Program Files\MySQL\MySQL Server 8.0\bin.
  - Open command prompt and go to C:\Program Files\MySQL\MySQL Server 8.0\bin and run the following command: **mysql -u root -p**
  - Enter the password
  - Run the following command: **create database project_db**;
  - Run the following command: **use project_db**;
  - Run the following command: **source project_website_data.sql**;
The above commands will load all the necessary data into project_db database. If you use a different name while creating the database, please update the name in the index.js file of server.

### Setting up the backend
  - Please download the project files. In VSCode, open a terminal and navigate to the server folder in the project files.
  - Run the following command to install all the dependencies: npm install
  - In the index.js file, update the database connection on line 18 with the correct details and password.
  - Startup the backend using the following command: node .\index.js

### Setting up the frontend
  - In VSCode, open a separate terminal while keeping the backend terminal running. Navigate to the client folder of the project in the terminal
  - Please run the command: npm install
  - Once the dependencies are installed, the project can be started with the following command from client terminal: npm run dev
  - The running application can be accessed via a web browser using: http://localhost:5173/

## Project Inspiration
From the experiences of some close friends and my own, I found that after high school I wasn’t sure what career I wanted and it was somewhat challenging to narrow down future education pathways based on the subjects I liked at school. So I have decided to build a web application that would allow users to select subjects they liked and give a numerical rating. Based on user inputs, the application would display several relevant tertiary education pathways.

## Project Goals and Minimum Viable Product
The goal of this project is to allow people to enter their subject preferences/likings and for the application to output a number of relevant university courses. The minimum viable product for this app will be a home page which explains the user what the website does and a courses page which displays the relevant courses based on the user's subject selections.

## Initial Design and Problems
Display a list of subjects for the user to rate based on their likings and preferences. Offer some numerical rating scale (1-5 or 1-10). The user would select ratings for all the subjects and then a database query would be performed to find university courses that would match the ratings given by the user. The university courses available would be fetched and stored to a database using web scraping (would only need to be done once thus it shouldn’t raise any concerns with regards to the ethics of web scraping). Once all the courses are fetched, I would attach subject ratings to all the courses. This would be based purely on research, however, I am afraid it would be impossible to be completely unbiased. Thus I would put a disclaimer for the user explaining some bias may be present.
Having the user rank each subject (some of which the user might not have studied) isn’t a great design from a UX standpoint. Moreover, once the user would be done assigning scores to each subject, a lot of the data might get skewed if the user decides to give scores just based on their liking of the subject even though they might not have any interest in pursuing it in the future. Furthermore, if we have like 10 subjects or something along those lines, the SQL search would be extremely computationally expensive if the app was to be scaled up.


## Final Design and Why It's Better
The user will be asked to select three subjects of their liking starting from their favorite/most desired subject first. This information can then be utilised with a trie/prefix-tree data structure which would hold all the university courses based on relevant high school subjects assigned by myself after some research. This would allow for an efficient lookup based on the user selection as well as facilitate some clever ways to find related university degrees, which may be relevant to the subject likings of the user. For example lets say the user selects Maths, Physics and IT as their preferred subjects, the app should suggest them an undergraduate degree like Mechatronic Engineering. The time complexity would be O(n) to find relevant subjects where n is the number of subjects chosen. While that may be the value obtained by traversing the prefix tree with Maths, Phys and IT nodes, we might also want to display other relevant subjects. This design model also makes it easy to find those subjects by allowing us to manipulate the prefix combinations and find similar subjects.

An example prefix tree is shown below. The tree isn’t accurate and I have just drawn it for demonstration purposes without any research. The point of the diagram is to show, if a student was to enter Maths, Phys and IT as his subjects of preference, it would be quite simple and not very computationally expensive to gather undergraduate courses relevant to the subjects selected by traversing the tree with different combinations of the selected subjects. The search can be narrowed by swapping only using combinations of the first two out of three preferences and keeping the third the same.

## Tech Stack
**Node + Express**: For the application backend I will be using NodeJS and ExpressJS. Node is the most widely used environment for developing web frameworks and provides several advantages such as excellent performance and high scalability. The Restful APIs will be built using Express as it ensures high performance due to its minimalistic web framework. However, it still allows developers flexibility through its support of middleware.

**MySQL**: The database will mainly be used for storing the courses available from a selected university, their subject relations set by myself and the course descriptions and any other useful relevant information. There won’t be a great load on the database as once the courses are stored and subjects are assigned to each course, it will only be required upon the program load in order to build our prefix tree/trie and this will be stored in memory so we won’t utilise the database further. The database will be used for user sign ups and logins but that won’t require any special considerations as those operations will be infrequent. Thus based on the needs above, a relational database such as MySQL will be perfectly suitable for this application.

**ReactJS**: The front end will be designed by using ReactJS as it ensures good coding practices and allows reusability of code. It also integrates very well with other useful libraries such as MaterialUI or Redux. It is also fast, SEO-friendly and can work well even with highload systems.
