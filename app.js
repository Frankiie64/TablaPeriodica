const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const TablaPeriodicaRouter = require("./routes/tablaPeriodica");
const app = express();

const listarElementos = require("./helper/hbs/ListarElemento");
const comparacion = require("./helper/hbs/Comparar");
const color = require("./helper/hbs/SelectorColores");


app.engine("hbs",engine({
    helpers:{
        ListarPrimerArreglo:listarElementos.primeraTabla,
        ListarSegundoArreglo :listarElementos.segundaTabla,
        Comparance : comparacion.comparar,
        ComparacionUno : comparacion.compararConUnElemento,
        SelectColor : color.SelectColor

    },
}));
app.set("view engine","hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));

app.use(TablaPeriodicaRouter);

app.use("/",function(request,response){    

    response.status(404).render("404",{layout:false})
});

app.listen(3000);