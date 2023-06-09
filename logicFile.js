const fs = require('fs');

const addUser = (id , fname , lname , age , city)=>{
    const allData = ReadFromJson();
    const duplicated = allData.filter(ele=> ele.id === id)
    if(duplicated.length == 0){
    allData.push({
        id:id,
        fname:fname,
        lname : lname,
        city : city,
        age: age
    })
    writeToJson(allData);
}
else{
    console.log("Error Duplicated Id")
}
}
const ReadFromJson = ()=>{
    try{
        return JSON.parse(fs.readFileSync("data.json").toString())
    }
    catch{
        return []
    }
}
const writeToJson = (allData)=>{
    return fs.writeFileSync("data.json" , JSON.stringify(allData))
}

// List Users
const ListUsers =()=>{
    const allData = ReadFromJson();
    allData.forEach( ele=> {
        console.log(` first name: ${ele.fname} -- age: ${ele.age} -- city: ${ele.city}`)}
        )
}

//delete user
const DelUser = (id)=>{
    const allData = ReadFromJson();
    const remained = allData.filter( ele=> ele.id !== id)
    writeToJson(remained)
}

//read single user
const ReadUser = (id)=>{
    const allData = ReadFromJson();
    const singleUser = allData.find(ele => ele.id === id)
    console.log(singleUser)
}


module.exports = {
    addUser,
    ListUsers,
    DelUser,
    ReadUser,
    
}
