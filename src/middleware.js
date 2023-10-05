const middleware = (req, res, next) => {
    res.on("finish", () => {
        if (![2, 3].includes(firstNumberIs(res.statusCode)) && ![401, 403].includes(res.statusCode)) {
            console.log("Entramos");
            const errorMsg = `Ruta: ${req.url}, Método: ${req.method}, Código de Estado: ${res.statusCode}`;
            process.emit('uncaughtException', new Error(errorMsg));
        }
    })
    next();
}

const firstNumberIs = (number) => Number(String(number).charAt(0));

module.exports = {
    middleware
}