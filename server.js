const { program } = require('commander');
const express = require('express');
const http = require('http');


const app = express();

program
    .requiredOption('-h, --host <host>', 'Адреса сервера')
    .requiredOption('-p, --port <port>', 'Порт сервера')
    .requiredOption('-c, --cache <cache>', 'Шлях до кешу')
    .parse(process.argv);

const options = program.opts();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(options.port, options.host, () => {
    console.log(`Server started at http://${options.host}:${options.port}`);
});
