"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Usuario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Usuario"));
const Administrador_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Administrador"));
const Paciente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Paciente"));
const Profesional_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profesional"));
const Eps_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Eps"));
const Entidad_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Entidad"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
var tipoIdentificacion;
(function (tipoIdentificacion) {
    tipoIdentificacion["CC"] = "C.C";
    tipoIdentificacion["TI"] = "T.I";
    tipoIdentificacion["CE"] = "C.E";
    tipoIdentificacion["Pasaporte"] = "Pasaporte";
})(tipoIdentificacion || (tipoIdentificacion = {}));
var genero;
(function (genero) {
    genero["Masculino"] = "Masculino";
    genero["Femenino"] = "Femenino";
    genero["Otro"] = "Otro";
})(genero || (genero = {}));
var estadoCivil;
(function (estadoCivil) {
    estadoCivil["Soltero"] = "Solter@";
    estadoCivil["Casado"] = "Casad@";
    estadoCivil["UnionLibre"] = "Union Libre";
    estadoCivil["Divorciado"] = "Divorciad@";
    estadoCivil["Viudo"] = "Viud@";
})(estadoCivil || (estadoCivil = {}));
var especialidad;
(function (especialidad) {
    especialidad["Psiquiatria"] = "Psiquiatria";
    especialidad["Psicologia"] = "Psicologia";
})(especialidad || (especialidad = {}));
var regimen;
(function (regimen) {
    regimen["Contributivo"] = "Contributivo";
    regimen["Subsidiado"] = "Subsidiado";
})(regimen || (regimen = {}));
var tipoBeneficiario;
(function (tipoBeneficiario) {
    tipoBeneficiario["Cotizante"] = "Cotizante";
    tipoBeneficiario["Beneficiario"] = "Beneficiario";
})(tipoBeneficiario || (tipoBeneficiario = {}));
var rangoSalarial;
(function (rangoSalarial) {
    rangoSalarial["Rango1"] = "Rango 1";
    rangoSalarial["Rango2"] = "Rango 2";
    rangoSalarial["Rango3"] = "Rango 3";
})(rangoSalarial || (rangoSalarial = {}));
var estado;
(function (estado) {
    estado["Activo"] = "Activo";
    estado["Inactivo"] = "Inactivo";
    estado["Retirado"] = "Retirado";
    estado["EnEspera"] = "En espera";
    estado["Suspendido"] = "Suspendido";
})(estado || (estado = {}));
var tipo;
(function (tipo) {
    tipo["Publicacion"] = "Publicacion";
    tipo["Servicio"] = "Servicio";
    tipo["Ubicacion"] = "Ubicacion";
    tipo["Profesional"] = "Profesional";
})(tipo || (tipo = {}));
class UsuariosSeeder extends Seeder_1.default {
    async run() {
        const adminUsuario = await Usuario_1.default.create({
            correo_electronico: 'admin@example.com',
            contrasena: await Hash_1.default.make('adminpassword'),
            id_rol: 1,
        });
        await Administrador_1.default.create({
            nombre: 'Admin Name',
            telefono: '1234567890',
            id_usuario: adminUsuario.id,
        });
        const patientUsuario = await Usuario_1.default.create({
            correo_electronico: 'patient@example.com',
            contrasena: await Hash_1.default.make('patientpassword'),
            id_rol: 4,
        });
        const eps = await Eps_1.default.create({
            nombre: 'EPS Example',
            regimen: regimen.Contributivo,
            tipo_beneficiario: tipoBeneficiario.Cotizante,
            rango_salarial: rangoSalarial.Rango1,
            estado: estado.Activo,
        });
        await Paciente_1.default.create({
            numero_identificacion: '123456789',
            tipo_identificacion: tipoIdentificacion.CC,
            nombre: 'Patient Name',
            fecha_nacimiento: new Date('1990-01-01'),
            genero: genero.Masculino,
            estado_civil: estadoCivil.Soltero,
            id_eps: eps.id,
            direccion: 'Patient Street 123',
            telefono: '9876543210',
            id_usuario: patientUsuario.id,
        });
        const professionalUsuario = await Usuario_1.default.create({
            correo_electronico: 'professional@example.com',
            contrasena: await Hash_1.default.make('professionalpassword'),
            id_rol: 3,
        });
        const entidad = await Entidad_1.default.create({
            tipo: tipo.Profesional,
        });
        await Profesional_1.default.create({
            nombre: 'Professional Name',
            especialidad: especialidad.Psiquiatria,
            horario: 'Monday-Friday 9am-5pm',
            telefono: '5551234567',
            id_usuario: professionalUsuario.id,
            id_entidad: entidad.id,
        });
    }
}
exports.default = UsuariosSeeder;
//# sourceMappingURL=UsuariosSeeder.js.map