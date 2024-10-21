import os from "os";

// Observar la arquitectura del sistema
console.log("Arquitectura:", os.arch());

// Observar el tipo de sistema operativo
console.log("Plataforma:", os.platform());

// Observar la cantidad total de memoria
console.log("Memoria total:", os.totalmem());

// Observar la memoria libre
console.log("Memoria libre:", os.freemem());

// Observar la información de la CPU
console.log("Información de la CPU:", os.cpus());
