const fs = require("fs");
const url = require("url");

/**
 * Eğer ki clien'tan gelen istek /api/movies adresine gelirse bütün filmleri gönder.
 * Eğer /api/movies/10 adresinden gelirse url sonundaki id değerine göre filmi gönder.
 */

module.exports = async (req, res) => {

    // Yapılan isteğin temel adresi
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

    // Url'in sonundaki id değerini bir değişkene aktar.
    const id = req.url.split("/")[3];

    if (req.url === "/api/movies") {

        // 1) Durum koddu belirle
        res.statusCode = 200;

        // 2) Headerlaro belirle
        res.setHeader("Content-Type", "application/json");

        // 3) JSON dosyasından bütün filmleri al
        const movies = fs.readFileSync("./data/movies.json", "utf-8");

        // 4) Client'a cevap gönder
        return res.end(movies);
    } else if (baseUrl === "/api/movies" && id) {

        // 1) Bütün filmleri al (javascript formatında al)
        const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

        // 2) URL'e eklenen id 'ye karşılık gelen filmi dizide bul
        const movie = data.movies.find((movie) => movie.id === id);

        // 3) Eğerki film bulunursa client'a gönder.
        if (movie) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(movie));

        } else {
            // 4) Eğer ki film bulunamazsa client'a hata gönder.
            return res.end("id bulunamadı.")
        }

    } else {
        return res.end("Yol bulunamadi");
    }
};