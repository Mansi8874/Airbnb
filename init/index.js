const mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");

let MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connected To DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

let initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner: "654217c7b3af25ba03a30f0b",}));
    await Listing.insertMany(initData.data);
    console.log("data was Initialized");
}
initDB();