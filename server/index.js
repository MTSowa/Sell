import express from "express"
import bodyPaser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"


//routes
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyPaser.json({limit:'30mb',extended:true}));
app.use(bodyPaser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://martintitus:sowam57@cluster0.kbnan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`))).catch((error)=>console.log(error.message))

// mongoose.set('useFindAndModify',false)