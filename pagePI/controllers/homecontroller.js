//home controller

module.exports = {
    //funciones del controlador

    index : function( req , res , next ){
        res.render( 'index' , {titulo : 'Programación en Internet'} );
    }
}
