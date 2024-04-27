const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'objetos_perdidos'
});

conexion.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa")
    }
});

const boton = document.getElementById("buscas");

conexion.query('SELECT * FROM guardados', (error, results) => {
    if (error) {
        console.error('Error al realizar la consulta: ', error);
        return res.status(500).json({ error: 'Error en la consulta' });
    }
    if (results.length === 0) {
        return res.status(404).json({ error: 'Elemento no encontrado' });
    }
    console.log(results);
    boton.addEventListener('click', console.log(results));
});


conexion.end();
