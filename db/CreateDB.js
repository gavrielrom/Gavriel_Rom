const connection = require('./db');
const csv = require('csvtojson');
const path = require('path');

const CreateTables = (req,res)=>{
    const AnimalsTable = "CREATE TABLE Animals (AnimalName VARCHAR(100), AnimalScore INT)";
    connection.query(AnimalsTable, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({massage: 'table not created'});
            return;
        }
        res.send({message:"table created"})
    })
    const GamesTable = "CREATE TABLE Games (GameName VARCHAR(30), GamePassword VARCHAR(30))";
    connection.query(GamesTable, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({massage: 'table not created'});
            return;
        }
        res.send({message:"table created"})
    })
};

const InsertDataIntoTables = (req,res)=>{
    var Q2 = "INSERT INTO Animals SET ?";
    const csvFilePath = path.join(__dirname, 'AnimalsData.csv');
    csv().fromFile(csvFilePath).then((jsonObj)=>{
        console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "AnimalName": element.AnimalName,
                "AnimalScore": element.AnimalScore
            }
            SQL.query(Q2, NewEntry, (err, mysqlres)=>{
                if (err) {
                    console.log("error in inserting data", err);
                }
                console.log("created row successfuly");
            });
        });
    });
   res.send("data inserted")
  }

module.exports={CreateTables, InsertDataIntoTables};