const express =require("express")
const app =express()
   
const authMiddleware=(req,res,next)=>{
    const auth =true
    if (auth){
        next()
    }
    else{
        res.send("404 not found")
    }
}
app.use(authMiddleware)
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/static/home.html");
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/static/style.css")

})
app.get("/service",(req,res)=>{
    res.sendFile(__dirname+"/static/service.html")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/static/contact.html")
})


PORT=5000
app.listen(PORT, (err) => err ? console.log(err) : console.log("my server is running on port ", PORT))