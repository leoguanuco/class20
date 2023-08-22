const path = require('path');
const platos = [{
    id:1,
    nombre:"Carpaccio fresco",
    descripcion:"Entrada Carpaccio de salmón con cítricos",
    price:"U$S 65.50",
},
{
    id:2,
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra ",
    price:"U$S 47.00",
},
{
    id:3,
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    price:"U$S 27.50",
},
{
    id:4,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price:"U$S 37.50",
}];

const mainController = {
    home: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    test: (req,res)=>{
        res.send('Hola esto esta funcionando');
    },
    details: (req,res)=>{
        const id = req.params.id;

        const platoEncontrado = platos.find((plato)=>{
            return plato.id == id;
        })

        res.render('details', {plato:platoEncontrado})
    }
}

module.exports = mainController;