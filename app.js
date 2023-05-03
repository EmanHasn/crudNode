const yargs = require("yargs");
const logicFun = require("./logicFile")

//Add User
yargs.command({
    command:"add",
    describe:"to add user",
    builder:{
        id:{
            decribe:"this is id",
            type:"string",
            demandOption:true
        },
        fname:{
            decribe:"this is first name",
            type:"string",
            demandOption:true
        },
        lname:{
            decribe:"this is last name",
            type:"string",
            demandOption:false
        },
        city:{
            decribe:"this is first name",
            type:"string",
            demandOption:true
        },
        age:{
            decribe:"this is first name",
            type:"string",
            demandOption:true
        }
    },
    handler:(dataFromJson)=>{
        logicFun.addUser(dataFromJson.id, dataFromJson.fname , dataFromJson.lname , dataFromJson.age , dataFromJson.city)
    }
})
console.log(yargs.parse());

//list User
yargs.command({
    command:"list",
    describe:"to read users' names",
    handler:()=>{
        logicFun.ListUsers()
    }
})
console.log(yargs.argv)

//Delete User
yargs.command({
    command:"delete",
    describe:"to delete user",
    builder:{
        id:{
            decribe:"this is id",
            type:"string",
            demandOption:true
        }
    },
    handler:(dataFromJson)=>{
        logicFun.DelUser(dataFromJson.id)
    }
})
console.log(yargs.argv);

//Read single User
yargs.command({
    command:"read",
    describe:"to read user data",
    builder:{
        id:{
            decribe:"this is id",
            type:"string",
            demandOption:true
        }
    },
    handler:(dataFromJson)=>{
        logicFun.ReadUser(dataFromJson.id)
    }
})
console.log(yargs.argv);



