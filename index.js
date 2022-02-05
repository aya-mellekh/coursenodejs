const http= require('http')

const server =http.createServer((req, res)=>{

   
//    if(req.url=='/home'){
//     res.statusCode=200
//        res.write('welcome to home')
//    }else if(req.url=='contact'){
//     res.statusCode=200
//        res.write('welcom from contact')
//    }else{
//     res.statusCode=404
//        res.write('not found')
//    }
   
   
    
//    res.end()
   
})
server.listen(5002,()=>{console.log('server is running')} )

