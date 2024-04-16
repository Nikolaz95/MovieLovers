import express from "express"
import dotenv from "dotenv"
import errorMiddleware from "./middlewares/errors.js";
import { connectDataBase } from "./config/dbConnect.js";
import cookieParser from "cookie-parser";
const app = express();

// Handle  Uncaught exceptions

process.on('uncaughtException', (err) => {
    console.log(`ERROR: ${err}`);
    console.log(`Shutting down server due to uncaught exception`);
    process.exit(1);
});


dotenv.config({ path: "backend/config/config.env" });


//Connecting to database 
connectDataBase();


app.use(express.json())
app.use(cookieParser())


//import all routes
import authRoutes from "./routes/auth.js";



app.use("/api/", authRoutes);


//use error middleware
app.use(errorMiddleware);


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

//Handle Unhandled Promise rejections

process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
