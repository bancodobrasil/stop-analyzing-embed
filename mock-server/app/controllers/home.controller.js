const home = (req, res) => {
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write("<html><body><p>Greetings from stop analyzing!</p></body></html>");
    res.end();
};

module.exports = {home}