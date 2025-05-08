const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
const mysql = require("mysql");
const port = 3000;
var Trie = require('./prefix-tree');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

// creates a database connection
// please enter the correct password
// update the database name if you have used a different name to the instructions provided
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_db"
});
db.connect((err)=> {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

global.db = db;

// data router is used to store or recieve information from the database
const dataRouter = require('./routes/data');
app.use('/data', dataRouter);

// course router is used for queries about courses
const coursesRouter = require('./routes/courses');
app.use('/courses', coursesRouter);

// fetch course router is used 
const fetch_courses_router = require('./routes/fetch_courses');
app.use('/fetch_courses', function (req, res, next) {
  req.data = prefix_subjects_tree
  next();
}, fetch_courses_router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// variable to fetch all the ids and their relevant course subjects
// this variable will be used to populate the prefix tree
let courses_and_subjects_data;
let query = `SELECT id, course_subjects FROM courses`

db.query(query, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    courses_and_subjects_data = res;
  }
})

var prefix_subjects_tree = new Trie();

// allow enough time to pass for the database to load n query to be fulfilled
// after waiting 1000ms prefix tree can be built
setTimeout(function() {
  for (let x of courses_and_subjects_data) {
    if (x['course_subjects'] !== null) {
      prefix_subjects_tree.insert(x['course_subjects'].split(','), x['id'])
    }
  }
}, 1000);