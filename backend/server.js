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

// var con = mysql.createConnection({
//   host: "frn.c7iflgbhvhqx.us-west-1.rds.amazonaws.com",
//   user: "frncsteam",
//   password: "GraceH0ppah",
//   database: "frn"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM credential", function (err, result, fields) {
//     if (err) throw err;
//     var string=JSON.stringify(result);
//     var json =  JSON.parse(string);
//     correct_password = json[0].hash;
//     console.log(correct_password);
//   });
// });   //move this

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
    // const body1 = req.body.Body;
    console.log(req);
    res.sendStatus(200)


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