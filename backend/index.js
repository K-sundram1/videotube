const express=require('express')
const app=express();

// in the this app we can send request and recieve the requeest
app.get('/',(req,res)=>{
    console.log("server is rady");
})
//as we know that there is an issue of cros in the api so we can use
app.get('/api/jokes',(req,res)=>{
    const jokesArray = [
        {
          id: 1,
          title: "Tech Joke",
          joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 2,
          title: "Math Joke",
          joke: "Why was the math book sad? It had too many problems."
        },
        {
          id: 3,
          title: "Physics Joke",
          joke: "Why can't you trust an atom? Because they make up everything!"
        },
        {
          id: 4,
          title: "Computer Joke",
          joke: "Why do Java developers wear glasses? Because they don't C#!"
        },
        {
          id: 5,
          title: "General Joke",
          joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        }
      ];
      
    res.send(jokesArray);
      

})
// kisi n kisi port pe listen bhi krnwana hoga
const port=4000;
app.listen(port,()=>{
    console.log(`port is sucessfully running at port http://localhost:${port} `)
   
})


