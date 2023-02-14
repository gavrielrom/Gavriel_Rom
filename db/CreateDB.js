const connection = require('./db');
const csvtojson = require('csvtojson');

const CreateTables = (req,res)=>{
    const Q1 = "CREATE TABLE Animals (AnimalName VARCHAR(100), AnimalScore int)";
    connection.query(Q1, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({massage: 'table not created'});
            return;
        }
        res.send({message:"table created"})
    })
};

const InsertDataIntoTables = (req,res)=>{
    const Q2 = "INSERT INTO Animals SET ?";
    const DataFilePath = path.join(__dirname,'AnimalsData.csv');
    csv().fromFile(DataFilePath).then((jsonObj)=>{
        console.log(jsonObj);
        jsonObj.forEach(element => {
            const newEntry = {
                "AnimalName": Element.AnimalName,
                "AnimalScore": Element.AnimalScore
            }
        })
    });
    connection.query(Q2, NewEntry, (err, mysqlres)=>{
        if(err) {
            console.log("error in inserting data", err);
        }
        console.log("created row successfuly");
    })
  }

module.exports={CreateTables, InsertDataIntoTables};