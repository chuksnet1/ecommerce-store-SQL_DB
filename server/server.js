import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { getAll, getById, getByTitle, getId, registerUserValue, signInUser , addColumn} from "./database.js";

const app = express()
app.use(express.json())
app.use(express.static('public'));
app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.get('/getAll', async (req, res) => {
    try {
        const result = await getAll()
        res.status(200).json(result)
    } catch (error) {
        res.send("message", error)
    }
})

//addColumn
//registerUserValue("kc@gmail.com", "123", "kc", "uroko")

app.post('/register', async (req, res) => {
    try {


        const newUser = req.body;
        //console.log(newUser)
        const {username, password, firstname, surname} = req.body;
        const result = await signInUser(username, password)

        if (result.length !== 0) {    
            res.status(400).json({'message':'this user already exist'})
            return
        }else{
            const resultReg = await registerUserValue(username, password, firstname, surname)
            res.send(resultReg)
        }

    } catch (error) {
        res.status(500).json({"message": error})
    }
})

app.post('/signin', async(req, res)=>{
    try {
        const {username, password} = req.body;
        const result = await signInUser(username, password)

        if (result.length !== 0) {
            
            res.send(result)
        }else{
            res.status(400).json({"message":"this user is not registered"})
        }
        
    } catch (error) {
        res.send('message', error)
    }
})

app.get('/', async (req, res) => {
    const show = await getId()
    console.log(show[0])
    //show.map((e) => { console.log(e.id) })
    res.send(show)
})


app.get('/product/:prodId', async (req, res) => {
    const id = req.params.prodId
    try {
        const result = await getById(id)
        res.send(result)
    } catch (error) {
        res.send("message", error)
    }
});


app.listen(8080, () => {
    console.log('server is running')
})