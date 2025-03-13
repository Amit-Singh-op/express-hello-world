const express=require("express")

const app=express()

app.get("/",(req,res)=>{
  return res.send({message:"hello world"})
})

app.listen(5000, () => console.log(`Server running on port 5000`));
