var mysql = require('mysql');

// controlador de comentarios personales

module.exports = {
    newUser : function( req ,res , next ){

        //var fechaActual = new Date();
        //var fecha = dateFormat(fechaActual , 'yyyy-mm-dd');

        var usuario =
        {
                nombre_persona : req.body.new_user,
                contraseña : req.body.new_password
        }

        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        db.query("INSERT INTO persona SET ?" , usuario , function(err, rows, fields){
            if(err) throw err;

            db.end();
        });

        res.render('index');
    },

    logout : function(req, res , next){
        req.logout();
        res.redirect('/');
    }
}
