import mysql from 'mysql2/promise';
import { type PersonalNuevo } from '../typesPersonal.js'; 

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pw12001300'
});

export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal");
        return results;
    } catch (error) {
        return{ error: "No se puede obtener la lista de personal"};
    }
}
export const encuentraPersonal = async (id: number) => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal WHERE id = ? LIMIT 1", [id]);
        return results;
    } catch (error) {
        return{ error: "No se puede obtener la persona solicitada"};
    }
}
export const agregarPersonal = async (nuevo: PersonalNuevo) => {
    try {
        const [results] = await conexion.query("INSERT INTO personal (nombre,direccion,telefono,estatus) VALUES (?,?,?,?)",
        [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    } catch (error) {
        return{ error: "No se puede agregar al personal"};
    }
}