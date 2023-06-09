"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Permiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permiso"));
const Rol_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Rol"));
const RolPermiso_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/RolPermiso"));
class default_1 extends Seeder_1.default {
    async run() {
        await Permiso_1.default.createMany([
            { url: '/Administradores', metodo: 'GET' },
            { url: '/Administradores', metodo: 'POST' },
            { url: '/Administradores/:id', metodo: 'GET' },
            { url: '/Administradores/:id', metodo: 'PUT' },
            { url: '/Administradores/:id', metodo: 'DELETE' },
            { url: '/Citas', metodo: 'GET' },
            { url: '/Citas', metodo: 'POST' },
            { url: '/Citas/:id', metodo: 'GET' },
            { url: '/Citas/:id', metodo: 'PUT' },
            { url: '/Citas/:id', metodo: 'DELETE' },
            { url: '/Comentarios', metodo: 'GET' },
            { url: '/Comentarios', metodo: 'POST' },
            { url: '/Comentarios/:id', metodo: 'GET' },
            { url: '/Comentarios/:id', metodo: 'PUT' },
            { url: '/Comentarios/:id', metodo: 'DELETE' },
            { url: '/Entidades', metodo: 'GET' },
            { url: '/Entidades', metodo: 'POST' },
            { url: '/Entidades/:id', metodo: 'GET' },
            { url: '/Entidades/:id', metodo: 'PUT' },
            { url: '/Entidades/:id', metodo: 'DELETE' },
            { url: '/EntidadesMultimedias', metodo: 'GET' },
            { url: '/EntidadesMultimedias', metodo: 'POST' },
            { url: '/EntidadesMultimedias/:id', metodo: 'GET' },
            { url: '/EntidadesMultimedias/:id', metodo: 'PUT' },
            { url: '/EntidadesMultimedias/:id', metodo: 'DELETE' },
            { url: '/Eps', metodo: 'GET' },
            { url: '/Eps', metodo: 'POST' },
            { url: '/Eps/:id', metodo: 'GET' },
            { url: '/Eps/:id', metodo: 'PUT' },
            { url: '/Eps/:id', metodo: 'DELETE' },
            { url: '/GestoresContenidos', metodo: 'GET' },
            { url: '/GestoresContenidos', metodo: 'POST' },
            { url: '/GestoresContenidos/:id', metodo: 'GET' },
            { url: '/GestoresContenidos/:id', metodo: 'PUT' },
            { url: '/GestoresContenidos/:id', metodo: 'DELETE' },
            { url: '/Mapas', metodo: 'GET' },
            { url: '/Mapas', metodo: 'POST' },
            { url: '/Mapas/:id', metodo: 'GET' },
            { url: '/Mapas/:id', metodo: 'PUT' },
            { url: '/Mapas/:id', metodo: 'DELETE' },
            { url: '/MapasUbicaciones', metodo: 'GET' },
            { url: '/MapasUbicaciones', metodo: 'POST' },
            { url: '/MapasUbicaciones/:id', metodo: 'GET' },
            { url: '/MapasUbicaciones/:id', metodo: 'PUT' },
            { url: '/MapasUbicaciones/:id', metodo: 'DELETE' },
            { url: '/Multimedias', metodo: 'GET' },
            { url: '/Multimedias', metodo: 'POST' },
            { url: '/Multimedias/:id', metodo: 'GET' },
            { url: '/Multimedias/:id', metodo: 'PUT' },
            { url: '/Multimedias/:id', metodo: 'DELETE' },
            { url: '/Pacientes', metodo: 'GET' },
            { url: '/Pacientes', metodo: 'POST' },
            { url: '/Pacientes/:id', metodo: 'GET' },
            { url: '/Pacientes/:id', metodo: 'PUT' },
            { url: '/Pacientes/:id', metodo: 'DELETE' },
            { url: '/Permisos', metodo: 'GET' },
            { url: '/Permisos', metodo: 'POST' },
            { url: '/Permisos/:id', metodo: 'GET' },
            { url: '/Permisos/:id', metodo: 'PUT' },
            { url: '/Permisos/:id', metodo: 'DELETE' },
            { url: '/Profesionales', metodo: 'GET' },
            { url: '/Profesionales', metodo: 'POST' },
            { url: '/Profesionales/:id', metodo: 'GET' },
            { url: '/Profesionales/:id', metodo: 'PUT' },
            { url: '/Profesionales/:id', metodo: 'DELETE' },
            { url: '/ProfesionalesServicios', metodo: 'GET' },
            { url: '/ProfesionalesServicios', metodo: 'POST' },
            { url: '/ProfesionalesServicios/:id', metodo: 'GET' },
            { url: '/ProfesionalesServicios/:id', metodo: 'PUT' },
            { url: '/ProfesionalesServicios/:id', metodo: 'DELETE' },
            { url: '/Publicaciones', metodo: 'GET' },
            { url: '/Publicaciones', metodo: 'POST' },
            { url: '/Publicaciones/:id', metodo: 'GET' },
            { url: '/Publicaciones/:id', metodo: 'PUT' },
            { url: '/Publicaciones/:id', metodo: 'DELETE' },
            { url: '/Servicios', metodo: 'GET' },
            { url: '/Servicios', metodo: 'POST' },
            { url: '/Servicios/:id', metodo: 'GET' },
            { url: '/Servicios/:id', metodo: 'PUT' },
            { url: '/Servicios/:id', metodo: 'DELETE' },
            { url: '/Testimonios', metodo: 'GET' },
            { url: '/Testimonios', metodo: 'POST' },
            { url: '/Testimonios/:id', metodo: 'GET' },
            { url: '/Testimonios/:id', metodo: 'PUT' },
            { url: '/Testimonios/:id', metodo: 'DELETE' },
            { url: '/Ubicaciones', metodo: 'GET' },
            { url: '/Ubicaciones', metodo: 'POST' },
            { url: '/Ubicaciones/:id', metodo: 'GET' },
            { url: '/Ubicaciones/:id', metodo: 'PUT' },
            { url: '/Ubicaciones/:id', metodo: 'DELETE' },
            { url: '/Usuarios', metodo: 'GET' },
            { url: '/Usuarios', metodo: 'POST' },
            { url: '/Usuarios/:id', metodo: 'GET' },
            { url: '/Usuarios/:id', metodo: 'PUT' },
            { url: '/Usuarios/:id', metodo: 'DELETE' },
            { url: '/RolesPermisos', metodo: 'GET' },
            { url: '/RolesPermisos', metodo: 'POST' },
            { url: '/RolesPermisos/:id', metodo: 'GET' },
            { url: '/RolesPermisos/:id', metodo: 'PUT' },
            { url: '/RolesPermisos/:id', metodo: 'DELETE' },
            { url: '/Roles', metodo: 'GET' },
            { url: '/Roles', metodo: 'POST' },
            { url: '/Roles/:id', metodo: 'GET' },
            { url: '/Roles/:id', metodo: 'PUT' },
            { url: '/Roles/:id', metodo: 'DELETE' },
        ]);
        await Rol_1.default.createMany([
            { nombre: 'Administrador' },
            { nombre: 'Gestor de contenido' },
            { nombre: 'Profesional' },
            { nombre: 'Paciente' },
        ]);
        await RolPermiso_1.default.createMany([
            { id_rol: 1, id_permiso: 1 },
            { id_rol: 1, id_permiso: 2 },
            { id_rol: 1, id_permiso: 3 },
            { id_rol: 1, id_permiso: 4 },
            { id_rol: 1, id_permiso: 5 },
            { id_rol: 1, id_permiso: 6 },
            { id_rol: 1, id_permiso: 7 },
            { id_rol: 1, id_permiso: 8 },
            { id_rol: 1, id_permiso: 9 },
            { id_rol: 1, id_permiso: 10 },
            { id_rol: 1, id_permiso: 11 },
            { id_rol: 1, id_permiso: 12 },
            { id_rol: 1, id_permiso: 13 },
            { id_rol: 1, id_permiso: 14 },
            { id_rol: 1, id_permiso: 15 },
            { id_rol: 1, id_permiso: 16 },
            { id_rol: 1, id_permiso: 17 },
            { id_rol: 1, id_permiso: 18 },
            { id_rol: 1, id_permiso: 19 },
            { id_rol: 1, id_permiso: 20 },
            { id_rol: 1, id_permiso: 21 },
            { id_rol: 1, id_permiso: 22 },
            { id_rol: 1, id_permiso: 23 },
            { id_rol: 1, id_permiso: 24 },
            { id_rol: 1, id_permiso: 25 },
            { id_rol: 1, id_permiso: 26 },
            { id_rol: 1, id_permiso: 27 },
            { id_rol: 1, id_permiso: 28 },
            { id_rol: 1, id_permiso: 29 },
            { id_rol: 1, id_permiso: 30 },
            { id_rol: 1, id_permiso: 31 },
            { id_rol: 1, id_permiso: 32 },
            { id_rol: 1, id_permiso: 33 },
            { id_rol: 1, id_permiso: 34 },
            { id_rol: 1, id_permiso: 35 },
            { id_rol: 1, id_permiso: 36 },
            { id_rol: 1, id_permiso: 37 },
            { id_rol: 1, id_permiso: 38 },
            { id_rol: 1, id_permiso: 39 },
            { id_rol: 1, id_permiso: 40 },
            { id_rol: 1, id_permiso: 41 },
            { id_rol: 1, id_permiso: 42 },
            { id_rol: 1, id_permiso: 43 },
            { id_rol: 1, id_permiso: 44 },
            { id_rol: 1, id_permiso: 45 },
            { id_rol: 1, id_permiso: 46 },
            { id_rol: 1, id_permiso: 47 },
            { id_rol: 1, id_permiso: 48 },
            { id_rol: 1, id_permiso: 49 },
            { id_rol: 1, id_permiso: 50 },
            { id_rol: 1, id_permiso: 51 },
            { id_rol: 1, id_permiso: 52 },
            { id_rol: 1, id_permiso: 53 },
            { id_rol: 1, id_permiso: 54 },
            { id_rol: 1, id_permiso: 55 },
            { id_rol: 1, id_permiso: 56 },
            { id_rol: 1, id_permiso: 57 },
            { id_rol: 1, id_permiso: 58 },
            { id_rol: 1, id_permiso: 59 },
            { id_rol: 1, id_permiso: 60 },
            { id_rol: 1, id_permiso: 61 },
            { id_rol: 1, id_permiso: 62 },
            { id_rol: 1, id_permiso: 63 },
            { id_rol: 1, id_permiso: 64 },
            { id_rol: 1, id_permiso: 65 },
            { id_rol: 1, id_permiso: 66 },
            { id_rol: 1, id_permiso: 67 },
            { id_rol: 1, id_permiso: 68 },
            { id_rol: 1, id_permiso: 69 },
            { id_rol: 1, id_permiso: 70 },
            { id_rol: 1, id_permiso: 71 },
            { id_rol: 1, id_permiso: 72 },
            { id_rol: 1, id_permiso: 73 },
            { id_rol: 1, id_permiso: 74 },
            { id_rol: 1, id_permiso: 75 },
            { id_rol: 1, id_permiso: 76 },
            { id_rol: 1, id_permiso: 77 },
            { id_rol: 1, id_permiso: 78 },
            { id_rol: 1, id_permiso: 79 },
            { id_rol: 1, id_permiso: 80 },
            { id_rol: 1, id_permiso: 81 },
            { id_rol: 1, id_permiso: 82 },
            { id_rol: 1, id_permiso: 83 },
            { id_rol: 1, id_permiso: 84 },
            { id_rol: 1, id_permiso: 85 },
            { id_rol: 1, id_permiso: 86 },
            { id_rol: 1, id_permiso: 87 },
            { id_rol: 1, id_permiso: 88 },
            { id_rol: 1, id_permiso: 89 },
            { id_rol: 1, id_permiso: 90 },
            { id_rol: 1, id_permiso: 91 },
            { id_rol: 1, id_permiso: 92 },
            { id_rol: 1, id_permiso: 93 },
            { id_rol: 1, id_permiso: 94 },
            { id_rol: 1, id_permiso: 95 },
            { id_rol: 1, id_permiso: 96 },
            { id_rol: 1, id_permiso: 97 },
            { id_rol: 1, id_permiso: 98 },
            { id_rol: 1, id_permiso: 99 },
            { id_rol: 1, id_permiso: 100 },
            { id_rol: 1, id_permiso: 101 },
            { id_rol: 1, id_permiso: 102 },
            { id_rol: 1, id_permiso: 103 },
            { id_rol: 1, id_permiso: 104 },
            { id_rol: 1, id_permiso: 105 },
            { id_rol: 2, id_permiso: 71 },
            { id_rol: 2, id_permiso: 72 },
            { id_rol: 2, id_permiso: 73 },
            { id_rol: 2, id_permiso: 74 },
            { id_rol: 2, id_permiso: 75 },
            { id_rol: 2, id_permiso: 46 },
            { id_rol: 2, id_permiso: 47 },
            { id_rol: 2, id_permiso: 48 },
            { id_rol: 2, id_permiso: 49 },
            { id_rol: 2, id_permiso: 50 },
            { id_rol: 2, id_permiso: 34 },
            { id_rol: 2, id_permiso: 36 },
            { id_rol: 2, id_permiso: 37 },
            { id_rol: 2, id_permiso: 38 },
            { id_rol: 2, id_permiso: 39 },
            { id_rol: 2, id_permiso: 40 },
            { id_rol: 2, id_permiso: 41 },
            { id_rol: 2, id_permiso: 42 },
            { id_rol: 2, id_permiso: 43 },
            { id_rol: 2, id_permiso: 44 },
            { id_rol: 2, id_permiso: 45 },
            { id_rol: 2, id_permiso: 86 },
            { id_rol: 2, id_permiso: 87 },
            { id_rol: 2, id_permiso: 88 },
            { id_rol: 2, id_permiso: 89 },
            { id_rol: 2, id_permiso: 90 },
            { id_rol: 3, id_permiso: 8 },
            { id_rol: 3, id_permiso: 9 },
            { id_rol: 3, id_permiso: 10 },
            { id_rol: 3, id_permiso: 101 },
            { id_rol: 3, id_permiso: 64 },
            { id_rol: 3, id_permiso: 53 },
            { id_rol: 4, id_permiso: 81 },
            { id_rol: 4, id_permiso: 82 },
            { id_rol: 4, id_permiso: 83 },
            { id_rol: 4, id_permiso: 84 },
            { id_rol: 4, id_permiso: 85 },
            { id_rol: 4, id_permiso: 11 },
            { id_rol: 4, id_permiso: 12 },
            { id_rol: 4, id_permiso: 13 },
            { id_rol: 4, id_permiso: 14 },
            { id_rol: 4, id_permiso: 15 },
            { id_rol: 4, id_permiso: 71 },
            { id_rol: 4, id_permiso: 73 },
            { id_rol: 4, id_permiso: 6 },
            { id_rol: 4, id_permiso: 7 },
            { id_rol: 4, id_permiso: 8 },
            { id_rol: 4, id_permiso: 10 },
            { id_rol: 4, id_permiso: 54 },
            { id_rol: 4, id_permiso: 36 },
            { id_rol: 4, id_permiso: 38 },
            { id_rol: 4, id_permiso: 86 },
            { id_rol: 4, id_permiso: 88 },
            { id_rol: 4, id_permiso: 61 },
            { id_rol: 4, id_permiso: 63 },
            { id_rol: 4, id_permiso: 76 },
            { id_rol: 4, id_permiso: 78 },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=PermisosSeeder.js.map