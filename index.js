const express = require ("express");
const massive = require ("massive");
const routes = require ("./products_controller");
const dotenv = require("dotenv")
dotenv.config();
const app = express();
app.use(express.json());


massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
        console.log("DB Connected")
    }).catch(error => {
        console.log(error)
    })


app.get("/api/products", routes.getAll);
app.get("/api/products/:id", routes.getOne);
app.put("/api/products/:id", routes.update);
app.post("/api/products", routes.create);
app.delete("/api/products/:id", routes.delete);

app.listen(3000, () => {
    console.log("Listening on 3000");
})