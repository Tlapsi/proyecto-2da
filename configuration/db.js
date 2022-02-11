const mongoose = require('mongoose');
const cadena = 'mongodb+srv://Alan11:knotslip@clustertese.g8dvg.mongodb.net/test';

mongoose.connect(cadena, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(dato =>{
    console.log('conectado');
})
.catch(error =>{
    console.log(error);
})
