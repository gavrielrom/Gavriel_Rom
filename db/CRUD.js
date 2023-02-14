const connection = require('./db');


//the animals list will take its data by this query 
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
//Creating Game and Group
const CreateGame = (req,res)=>{
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    };
}
const newGame = {
    "GameName": req.body.GameName,
    "GamePassword": req.body.GamePasswordEmail,
    "EndingTime": req.body.EndingTime
};

const InsertNewGame = "INSERT INTO Games SET ?";
connection.query(InsertNewGame, newGame, (err, mysqlres)=>{
    if (err) {
        console.log("error:", err);
        res.status(400).send({message: "error in Creating Game" + err});
        return;
    }

    console.log("new Game created!");
    res.send("new Game created");
    return;
});

const newGroup = {
    "GroupName": req.body.GroupName
};


const InsertNewGroup = "INSERT INTO Games SET ?";
const ForTheRightGame = "WHERE GameName = "
connection.query(InsertNewGroup, newGroup, ForTheRightGame, (newGame).GameName,(err, mysqlres)=>{
    if (err) {
        console.log("error:", err);
        res.status(400).send({message: "error in Creating Group" + err});
        return;
    }

    console.log("new Group created!");
    res.send("new Group created");
    return;
});
//Searching for a sppoted animal
const UpdateGroupScore = "UPDATE Games SET Score ?";
connection.query(UpdateGroupScore, (req.body.AnimalName).Score,(err, mysqlres)=>{
    if (err) {
        console.log("error:", err);
        res.status(400).send({message: "error in Creating Group" + err});
        return;
    }

    console.log("new Group created!");
    res.send("new Group created");
    return;
});

module.exports={getAnimalNames, InsertNewGame};