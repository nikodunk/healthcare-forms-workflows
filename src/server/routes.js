var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();



router.get('/saveform/:patientuid/:formName', function(req, res, next) {
			console.log(req.params.patientuid, req.params.formName, req.body)
	        // client.query(`SELECT name FROM patients WHERE patientid = '`+req.body.patientid+`';`, (err, queryResult) => { 
	        // 			res.send(queryResult)
	        // 		})
	        // console.log('gaggi')
	        res.send('gaggi')
    	}
    )

module.exports = router;