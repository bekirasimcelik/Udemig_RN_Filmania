const http = require( "http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");

//* 1) Server Oluştur
const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            return getRequest(req, res);

        case "POST":
            return postRequest(req, res);

        case "DELETE":
            return deleteRequest(req, res);

        default:
            // Cevabın durum kodunu belirler
            res.statusCode = 404;

            // Gönderilecek cevaba headers içeriğini ekleme
            res.setHeader("Content-Type", "application/json");

            // Cevabın içeriğini belirler
            res.write(JSON.stringify({
                message: "istek yapılan yol tanımsız."
            }));

            // client'e cevap gönder
            res.end();
    };
});

//* 2) Belirli porta gelen istekleri Dinle
const port = 5005;

server.listen(port, () => {
    console.log(`Server ${port} 'a gelen istekleri dinlemeye başladı.`)
});
