const fs = require('fs');

const addUser = (id , fname , lname , age , city)=>{
    const allData = ReadFromJson();
    const duplicated = allData.filter((ele)=>{
        return ele.id === id;
    })
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
        const readData = fs.readFileSync("data.json").toString();
        return JSON.parse(readData)
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
    allData.forEach((ele)=>{
        console.log(`${ele.fname} ${ele.lname}`)
    })
}

//delete user
const DelUser = (id)=>{
    const allData = ReadFromJson();
    const remained = allData.filter((ele)=>{
        return ele.id !== id;
    })
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
    ReadUser
}
