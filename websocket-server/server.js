const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
    console.log('Client connected');
    
    // Send a test message every 5 seconds
    const sendTestMessage = () => {
        const testData = {
            timestamp: new Date().toLocaleString(),
            direction: Math.floor(Math.random() * 360),
            alert: Math.random() < 0.1 // 10% chance to trigger alert
        };
        ws.send(JSON.stringify(testData));
    };
    const intervalId = setInterval(sendTestMessage, 5000);

    ws.on('close', () => {
        clearInterval(intervalId);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server running on ws://localhost:3000');