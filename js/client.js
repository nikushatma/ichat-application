// const socket = io('http://localhost:3000');

// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp');
// const messageContainer = document.querySelector(".container");

// const append = (message,position) => {
//     const messageElement = document.createElement('div')
//     messageElement.innerText = message;
//     messageElement.classList.add('message'); 
//     messageElement.classList.add(position); 
//     messageContainer.append(messageElement);
// }

// const name = prompt("Enter your name ");
// socket.emit('new-user-joined', name);

// socket.on('user-joined',data =>{
//     append(`${name} joined the chat`, 'right')
// })
// socket.on('receive',data =>{
//     append(`${data.message} : ${data.users}`, 'left')
// })