const express = require('express');
const bodyParser = require('body-parser');
//const fs = require('fs');
const mysql = require('mysql');
var cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.set('port', (process.env.PORT || 3002));

// // Express only serves static assets in production
// console.log("NODE_ENV: ", process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   // Return the main index.html, so react-router render the route in the client
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve('client/build', 'index.html'));
//   });
// }

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "userdata"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM formdata", function (err, result, fields) {
    if (err) throw err;
    var string = JSON.stringify(result);
    var json = JSON.parse(string);
    console.log(json);
  });
});   //move this

// app.use('/api/auth', function(req, res) {
//   const pass = req.query.pass;
//   var crypto = require('crypto');
//   if(undefined === pass) {
//     return;
//   }
//   var enc = crypto.createHash('md5').update(pass).digest("hex");
//   if(undefined === enc) {
//     return;
//   }
//   if(enc !== correct_password) {
//     console.log('incorrect password!');
//     res.statusMessage = 'Nothing';
//     res.send({ message: 'fail' });
//   } else {
//     console.log('correct password!');
//     res.statusMessage = 'Nothing';
//     res.send({ message: 'success' });
//   }
// });

app.post('/api/posts', (req, res) => {
  console.log('got here');
  const body = Object.keys(req.body)
  const json = JSON.parse(body)


  const queryString = "INSERT INTO `userdata`.`formdata` (`first_name`, `last_name`, `date_of_birth`, `username`, `password`) VALUES ('" + json.firstName + "', '" + json.lastName + "', '" + json.dateOfBirth + "', '" + json.username + "', '" + json.password + "');";

  con.query(queryString, function (err, result, fields) {
    if (err) throw err;
    console.log(result);

  });
// console.log(queryString1);
res.sendStatus(200);






  //   const firstName = req.query.firstName;

  //   queryString = "SELECT * FROM user"

  //   con.query(queryString,function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);

  //       });

});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});