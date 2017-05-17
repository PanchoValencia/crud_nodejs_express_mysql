'use strict';

var mysql = require('mysql');
var dateFormat = require('dateFormat');

// controlador de comentarios

module.exports = {
    getComment : function( req ,res , next ){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var comment = null;

        db.query('select * from comment_user inner join persona on comment_user.cod_persona=persona.cod_persona inner join comentarios on comment_user.cod_comentarios=comentarios.cod_comentarios' , function(err, rows, fields){
            if(err) throw err;

            comment = rows;
            db.end();
            res.render('foro' , {
                comment : comment,
                isAuthenticated : req.isAuthenticated(),
                user :req.user
            });
        });

    },

    newComment : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var fechaActual = new Date();
        var Fecha = dateFormat(fechaActual , 'yyyy-mm-dd h:MM:ss');

        var comment = {
            comentario : req.body.coment,
            fecha : Fecha
        }

        db.query('INSERT INTO comentarios SET ?', comment, function(err, rows, fields){
            if(err){
                throw err;
            }
        });

        var id = 0;

        db.query('SELECT * FROM comentarios ORDER BY cod_comentarios DESC LIMIT 1', function(err , rows , fields){
            if(err) throw err;

            if(rows.length > 0){
                
                var codigoCod = {
                    id : rows[0].cod_comentarios,
                    getId : function(){
                        return this.id
                    }
                };

                var getId = codigoCod.getId();

                var relation = {
                    cod_persona : req.body.idUser ,
                    cod_comentarios : getId
                };

                db.query('INSERT INTO comment_user SET ?', relation, function(err, rows, fields){
                    if(err) throw err;
                    db.end();
                    res.redirect('/foro');
                });
            }
        });
    }
}
//
