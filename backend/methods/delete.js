const fs = require("fs");

module.exports = async (req, res) => {
  // istek atılan temel adres
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // url'in sonundaki id değerini al
  const id = req.url.split("/")[3];

  if (baseUrl === "/api/movies" && id) {
    // bütün filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // id'Li film dizide ara
    const isFound = data.movies.find((i) => i.id === id);

    // dizide film yoksa hata gönder
    if (!isFound) {
      res.writeHead(404);
      return red.end("id geçersiz");
    }

    // diziden id si bilinen filmi kaldır
    const filtred = data.movies.filter((item) => item.id != id);

    // json dosyasına yeni diziyi aktar
    fs.writeFileSync("./data/movies.json", JSON.stringify({movies: filtred}));

    // client'a cevap gönder
    res.writeHead(204, { "Content-Type": "application/json" });
    return res.end();
  } else {
    res.writeHead(404);
    return res.end("Yol Bulunamadı");
  }
};
