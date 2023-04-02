// creates an instance of the express library and assigns it to a local constant "app"
import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
// developers use app to configure the server on what to do when various types of requesets are recieved
const app = express()
app.use(cors())
// configures an HTTP handler by mapping url pattern '/hello' to a function that handles the HTTP request (listen)
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);