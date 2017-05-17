var mysql = require('mysql');

// controlador de comentarios personales

module.exports = {
    adminComment : function( req ,res , next ){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        var comment = null;

        //var idUser = req.body.idUsuario;

        db.query('select * from comentarios inner join comment_user on comentarios.cod_comentarios=comment_user.cod_comentarios inner join persona on comment_user.cod_persona=persona.cod_persona and comment_user.cod_persona=?',[req.body.idUsuario] , function(err, rows, fields){
            if(err) throw err;

            comment = rows;
            db.end();
            res.render('adminComentarios' , {comment : comment});
        });

    },

    deleteComment : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        /*var cod = {
            cod_comentarios : req.body.codigo
        }*/

        db.query('DELETE FROM comment_user WHERE cod_comentarios = ?', [req.body.codigo] , function(err , rows , fields){
            if(err) throw err;
        });
        db.query('DELETE FROM comentarios WHERE cod_comentarios = ?', [req.body.codigo] , function(err , rows , fields){
            if(err) throw err;

            db.end();

            res.redirect('/foro');
        });
    },

    updateComment : function(req, res, next){
        var config = require('.././database/config');

        var db = mysql.createConnection(config);
        db.connect();

        db.query('UPDATE comentarios SET comentario = ? WHERE cod_comentarios = ?', [req.body.updComent , req.body.codigoUp] , function(err, rows, fields){
            if(err) throw err;

            db.end();

            res.redirect('/foro');
        });
    }
}
//
