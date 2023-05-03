import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Usuario from 'App/Models/Usuario';
import Administrador from 'App/Models/Administrador';
import Paciente from 'App/Models/Paciente';
import Profesional from 'App/Models/Profesional';
import Eps from 'App/Models/Eps';
import Entidad from 'App/Models/Entidad';
import Hash from '@ioc:Adonis/Core/Hash';
import EpsInfo from 'App/Models/EpsInfo';


enum tipoIdentificacion {
  CC = 'C.C',
  TI = 'T.I',
  CE = 'C.E',
  Pasaporte = 'Pasaporte'
}

enum genero {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Otro = 'Otro'
}

enum estadoCivil {
  Soltero = 'Solter@',
  Casado = 'Casad@',
  UnionLibre = 'Union Libre',
  Divorciado = 'Divorciad@',
  Viudo = 'Viud@'
}

enum especialidad {
  Psiquiatria = "Psiquiatria",
  Psicologia = "Psicologia",
}

enum regimen {
  Contributivo = 'Contributivo',
  Subsidiado = 'Subsidiado',
}

enum tipoBeneficiario {
  Cotizante ='Cotizante',
  Beneficiario = 'Beneficiario',
}

enum rangoSalarial {
  Rango1 = 'Rango 1',
  Rango2 = 'Rango 2',
  Rango3 = 'Rango 3',
}

enum estado {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
  Retirado = 'Retirado',
  EnEspera = 'En espera',
  Suspendido = 'Suspendido',
}

enum tipo {
  Publicacion = 'Publicacion',
  Servicio = 'Servicio',
  Ubicacion = 'Ubicacion',
  Profesional = 'Profesional',
}

export default class UsuariosSeeder extends BaseSeeder {

public async run() {
  // Administrator
  const adminUsuario = await Usuario.create({
    correo_electronico: 'admin@example.com',
    contrasena: await Hash.make('adminpassword'),
    id_rol: 1, // Assuming 1 is the admin role ID
  });

  await Administrador.create({
    nombre: 'Admin Name',
    telefono: '1234567890',
    id_usuario: adminUsuario.id,
  });

  // Patient
  const patientUsuario = await Usuario.create({
    correo_electronico: 'patient@example.com',
    contrasena: await Hash.make('patientpassword'),
    id_rol: 4, // Assuming 2 is the patient role ID
  });

  const eps =await Eps.create({
    nombre: 'Salud Total'
  })

  const epsInfo = await EpsInfo.create({
    id_eps: eps.id,
    regimen: regimen.Contributivo,
    tipo_beneficiario: tipoBeneficiario.Cotizante,
    rango_salarial: rangoSalarial.Rango1,
    estado: estado.Activo,
  });
  
  await Paciente.create({
    numero_identificacion: '123456789',
    tipo_identificacion: tipoIdentificacion.CC,
    nombre: 'Patient Name',
    fecha_nacimiento: new Date('1990-01-01'),
    genero: genero.Masculino,
    estado_civil: estadoCivil.Soltero,
    id_eps: epsInfo.id, // Assuming 1 is the EPS ID
    direccion: 'Patient Street 123',
    telefono: '9876543210',
    id_usuario: patientUsuario.id,
  });

  // Professional
  const professionalUsuario = await Usuario.create({
    correo_electronico: 'professional@example.com',
    contrasena: await Hash.make('professionalpassword'),
    id_rol: 3, // Assuming 3 is the professional role ID
  });

  const entidad = await Entidad.create({
    tipo: tipo.Profesional,
  });

  await Profesional.create({
    nombre: 'Professional Name',
    especialidad: especialidad.Psiquiatria,
    horario: 'Monday-Friday 9am-5pm',
    telefono: '5551234567',
    id_usuario: professionalUsuario.id,
    id_entidad: entidad.id, // Assuming 1 is the Entidad ID
  });
}

}



