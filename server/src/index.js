const app=require("./app");

app.listen(app.get('port'),(err)=>{
    if(err){
        console.error(err)
    }
    console.log('Connection successfull  with port: ',app.get('port'))
})