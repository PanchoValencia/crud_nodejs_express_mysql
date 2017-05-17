var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

/* HOME PAGE */
router.get('/', controllers.homecontroller.index);

/* FORO */
router.get('/foro', AuthMiddleware.isLogged ,controllers.commentcontroller.getComment);

/* NEW COMMENT */
router.post('/addComment', AuthMiddleware.isLogged , controllers.commentcontroller.newComment);

/* OWN COMMENTS MANAGEMENT WHEN IS LOGGED*/
router.post('/adminComentarios', AuthMiddleware.isLogged ,controllers.adminCommentscontroller.adminComment);

/* OWN COMMENTS MANAGEMENT WHEN DELETE OR UPDATE*/
router.get('/administrarComentarios', AuthMiddleware.isLogged ,controllers.adminCommentscontroller.adminComment);

/* DELETE COMMENT */
router.post('/deleteComent', AuthMiddleware.isLogged ,controllers.adminCommentscontroller.deleteComment);

/* UPDATE COMMENT */
router.post('/updateComent', AuthMiddleware.isLogged ,controllers.adminCommentscontroller.updateComment);

/* ADD USER */
router.post('/index', controllers.usersController.newUser);


/* LOGIN */
router.post('/auth/signin', passport.authenticate('local', {
    successRedirect : '/foro',
    failureRedirect : '/'
}));

/* LOGOUT */
router.get('/auth/logout', controllers.usersController.logout);

module.exports = router;
