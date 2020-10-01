require('./database');
const app = require('./app');

app.listen(app.get('port'));

console.log("El servidor funciona en el puerto ", app.get('port'));