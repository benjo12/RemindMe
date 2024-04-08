import dotenv from 'dotenv'
dotenv.config()

import createEvent from './createEvent.js'
import mongoose from 'mongoose'

(async () =>{
   await mongoose.connect(process.env.MONGODB_URL)

   try {
       // Supongamos que 'date' y 'time' son strings en un formato específico
       await createEvent('65cd2bc1b744ba93c2af2011', '65d4f2fda59da005e452d4a4', '2024-11-10', '17:30');
       console.log('Event created successfully');
   } catch (error) {
       console.log(error);
   }

   // Cerrar la conexión a la base de datos después de haber terminado
   mongoose.disconnect();
})();
