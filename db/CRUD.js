const connection = require('./db');

const getAnimalNames = "SELECT AnimalName FROM ANIMALS";
connection.query(getAnimalNames, (err, mysqlres)=>{
    if (err) {
        console.log("error:", err);
        res.status(400).send({message: "error in getting" + err});
        return;
    }
    console.log("got Animals");
    res.send("got Animals");
    return;
});

module.exports={getAnimalNames};