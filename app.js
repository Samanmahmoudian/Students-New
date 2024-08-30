const express = require("express") 
const app = express() 
const port = 1111
app.use(express.json()) 
app.use(express.urlencoded())
app.use(express.static("public"))
 
app.get('/' , (req , res)=>{ 
    res.sendFile(__dirname+"/index.html")
}) 
 
app.listen(port , ()=>{ 
    console.log('connected...') 
})

let students = []



app.get('/students' , (req , res)=>{
    res.send(students)
})

app.get('/students/:id' , (req , res)=>{
    const student = students.find(x => x.id == Number(req.params.id))
    if (!student) {res.status(404).send("Data is not given...")}
    else{res.send(student)}
})
app.post("/students" , (req , res) => {

    const student = {
        name : req.body.name , 
        family : req.body.family,
        id : req.body.id,
        dob : req.body.dob,
        major : req.body.major,
        uni : req.body.uni
    }
    students.push(student)
    res.send(student)
    
})
app.put("/students/:id" , (req , res) => {
    const student = students.find(x => x.id == Number(req.params.id))
    if (!student) {res.status(404).send("Data is not given...")}
    else{

            student.name = req.body.name,
            student.family = req.body.family,
            student.id = req.body.id,
            student.dob = req.body.dob,
            student.major = req.body.major,
            student.uni = req.body.uni
        

    }
})
app.delete("/students/:id" , (req , res) => {
    const student = students.find(x => x.id == Number(req.params.id))

  
            students.splice(students.indexOf(student) , 1)
    
})

         


