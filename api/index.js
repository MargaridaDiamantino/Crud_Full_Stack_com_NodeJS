import express from "express"
import userRoutes from "./router/user.js"
const app = express()


// Configurar cabeçalhos CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir apenas esse domínio
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(express.json())
app.use("/",userRoutes)

app.listen(8800)