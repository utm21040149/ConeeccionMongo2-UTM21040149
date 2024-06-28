const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017/BASE-DE-DATOS'

mongoose.connect(url_bd)
.then (() =>{
    console.log('Soy todo poderosoy funciono')
})

.catch(()=>{
        console.log('Maybe dormir haga que funcione')
})

const empleadoEsquema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    puesto: { type: String },
    salario: { type: Number },
    departamento: { type: String },
    fechaContrato: { type: Date },
  });
  
  const Empleado = mongoose.model('Empleado', empleadoEsquema);

  const empleado1 = new Empleado({
    nombre: 'Luis',
    apellido: 'Ruelas',
    edad: 20,
    puesto: 'Administrativo',
    salario: 400000,
    departamento: 'Logistica',
    fechaContrato: new Date('2024-08-24'),
  });

  empleado1.save((err, empleado) => {
    if (err) return console.error(err);
    console.log('Empleado guardado:', empleado);
  });
  
  