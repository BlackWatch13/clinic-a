import app from './app';




async function main (){
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    io.on('connection',()=>{});
    server.listen(3000);
    console.log('Server en puerto 3000');
};

main();