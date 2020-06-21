const router = require('express').Router();
const MainController = require('../controller/MainController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /main/login:
*    post:
*     description: LogIn a user and return the token 
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required:
*             - email
*             - password
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*           example: {
*             "email": "sample@email.com",
*             "password": "password",             
*           }
*     responses:
*       200:
*         schema:
*           type: object
*           properties:
*             id:
*               type: integer
*             name:
*               type: string
*             email:
*               type: string
*             token:
*               type: string
*         examples:
*           application/json: {
*             "id": 1,
*             "name": "SampleName",
*             "email": "Sample@email.com",
*             "token":"1234SampleToken4321"
*           }
*       400:
 *         description: Error, not correct data (email or password)
*/
router.post('/login', MainController.login);

/**
 * @swagger
 * /main/signin:
*    post:
*     description: Create a user in our application 
*     parameters:
*       - name: body
*         in: body
*         required: true
*         schema:
*           type: object
*           required:
*             - name
*             - email
*             - password
*           properties:
*             idLanguage:
*               type: string
*           example: {
*             "name": "SampleName",
*             "email": "sample@email.com",   
*             "password": "password", 
*             "address": "sampleAddres",          
*           }
*     responses:
*       201:
*         description: Created
*       400:
*         description: This email already exist. Did u forget ur password?
*       500:
*         description: An error has occur, please try again later
*/
router.post('/signin', MainController.signIn);

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *    type: apiKey
 *    name: authorization
 *    in: header
 * /main/logout:
 *    get:
 *     description: LogOut of the user in the system
 *     security:
 *       - autorization: [] 
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Correct LogOut
 *       401:
 *         description: Token incorrect
 *       500:
 *         description: An error has occur, please try again later.
 */
router.get('/logout', auth, MainController.logout);

/**
 * @swagger
 * /main/trending:
 *    get:
 *     description: Returns list of movies are trending
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Movies
 *       500:
 *         description: An error has occur, please try again later.
 */
router.get('/trending', MainController.getTredingMovies)

/**
 * @swagger
 * /main/genders:
 *    get:
 *     description: Returns list of genders that can find in the movies.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Genders
 *       500:
 *         description: An error has occur, please try again later.
 */
router.get('/genders', MainController.getGenders);


module.exports = router;