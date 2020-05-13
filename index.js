/* index.js */

// импорт модуля "http"
const http = require('http');
const port = 8000;
const fs = require("fs");

const logFile = fs.createWriteStream("log.txt", {flags: "a"});

// коллбек на каждый HTTP-запрос
const requestHandler = (request, response) => {
    console.log(request.url);
    logFile.write(`Запит: ${request.url}\n`);
    // console.log(request);
    response.end('Ping-Pong');
};

// создание HTTP-сервера
const server = http.createServer(requestHandler);

// начало прослушивания HTTP-сервера
server.listen(port, (err) => {
    if (err) {
        return console.log('Ошибочка вышла', err);
    }
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});