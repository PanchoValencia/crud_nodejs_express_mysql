var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');

module.exports = function( passport )
{

    passport.serializeUser(function(user, done){
        done(null , user);
    });

    passport.deserializeUser(function(obj, done){
        done(null , obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback : true
    }, function(req, username, password, done){

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('SELECT * FROM persona WHERE nombre_persona = ?', username , function(err, rows, fields){
            if(err) throw err;

            db.end();

            if(rows.length > 0){

                var user = rows[0];

                if(password == user.contraseña){
                    return done(null, {
                        id: user.cod_persona,
                        nombre : user.nombre_persona
                    });
                }
            }
            return done(null, false);
        });

    }
    ));

};
