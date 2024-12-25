import express from 'express';
import config from './utils/configManager.js';
import cors from "cors";
import productRouter from "./routes/products.js";
import { Home } from './controllers/HomeController.js';
import userRouter from './routes/users.js';
import Services from './services.js';
import AppDB from './db/AppDB.js';
import UserManager from './utils/UserManager.js';

const app = express()

// export let services = new Services()
export let AppDBContext = new AppDB(config.MONGO_DB_CONNECTION_STR)
// services.addSingleton("AppDB",AppDB,[config.MONGO_DB_CONNECTION_STR])
// services.addSingleton("UserManager",UserManager,["$AppDB"])

app.use(cors({
    origin: config.CORS_ORIGIN_URL  
}));



app.get("/",Home)


//All App routes
app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(config.BACKEND_PORT_NO)
console.log(`The server is listening on: http://localhost:${config.BACKEND_PORT_NO}`)

