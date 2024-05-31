//node server 
const io = require('socket.io')(3000,{
    cors: {
        origin: "*"
    }
});

const users ={};

io.on('connection',(socket) =>{ //listen all user who comes in ichat
    socket.on('new-user-joined',name =>{
        console.log("new user", name); //when a connection build then it's handel
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name); //event
    });
    socket.on('send',message => {  //event
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
    socket.on('disconnect',message => {  //event
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    });
});


