//node server which will handle socket io connections
//yha basically humne bola hum socket.io use krna chahte hai 8000 port ke saath 
//const io se humne yha io ko initialise kr liya hai
const io = require('socket.io')(8000)

//ye function humne apne users ke liye bnaya hai
const users = {};

//socket.io server is an instance of http, attaches itself to an http instance
//it will listen to incoming events

//jese he connection aae ek arrow function ko run krdo
//here socket is a particular connection, so io.on here is a socket.io instance
//which will listen to many socket connections, toh ajb bhi koi msg aaega,io.on usse listen krega
//io.on saare listen krega  
io.on('connection', socket =>{
    //user-joined is a custom event here, isko hum listen krenge fir emmet krenge
    //socket.on ek particular connection ke liye hai, ki jab bhi ek part. conn. ke saath kuch hoga
    //toh uske saath kya krenge hum
    socket.on('new-user-joined', name =>{
        console.log("New User", name)
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message, name: user[socket.id]})
    });

})