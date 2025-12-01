import {z} from "zod";

const telefonoRegEx = new RegExp (
    /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
)

//validaciones con zod -- construir un schema
export const personalSchema = z.object({
    nombre: z.string().min(2, 'Minimo 2 caracteres').max(200, 'Maximo 200 caracteres'),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
     //telefono: z.string().regex(telefonoRegEx),
    //estatus: z.number('Solo numeros').int().positive('Solo numeros positivos').min(1).max(2)
    estatus: z.number()
});