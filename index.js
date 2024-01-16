const express = require("express");
const app = express();

let iffy = 99

app.get("/", (req, res)=>{
    res.send(`<h1>${iffy} bottles on the wall</h1> 
    <a href="/${iffy - 1}"> take one down, pass it around </a>`)
})

app.get("/:number_of_bottles", (req, res)=>{
    if(req.params.number_of_bottles > 0){
        res.send(
            `<h1>${req.params.number_of_bottles} bottles on the wall </h1>
            <a href="/${req.params.number_of_bottles - 1}"> Take one and pass it around </a> `
        )
        //thinking to do this to get more than one things to send more than one things to the page at a time took me a riduculous amount of time smh
    }
    else{
        res.send(
            `<h1>${req.params.number_of_bottles} bottles on the wall </h1>
            <a href="/"> Restart </a> `
            
        )        
    }

})


app.listen(3000, ()=>{
    console.log("running on port 5000");
});

