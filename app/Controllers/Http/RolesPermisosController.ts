import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RolPermiso from 'App/Models/RolPermiso';

export default class RolesPermisosController {
  /**
   * Listar todos los roles y permisos
   */
  public async index({ response }: HttpContextContract) {
    try {
      const RolesPermisos = await RolPermiso.all();
      response.status(200).json({
        message: 'Lista de roles y permisos obtenida exitosamente.',
        data: RolesPermisos
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al obtener los roles y permisos.',
        data: null
      });
    }
  }

  /**
   * Obtener un Rol y permiso por su ID de Rol y ID de permiso
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const RolesPermisos = await RolPermiso.findOrFail({
        id_rol: params.id_rol,
        id_permiso: params.id_permiso,
      });
      response.status(200).json({
        message: 'Rol y permiso encontrado exitosamente.',
        data: RolesPermisos
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol y permiso no encontrados' });
    }
  }

  /**
   * Crear un nuevo Rol y permiso
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['id_rol', 'id_permiso']);
      const RolesPermisos = await RolPermiso.create(data);
      response.status(201).json({
        message: 'Rol y permiso creado exitosamente.',
        data: RolesPermisos
      });
    } catch (error) {
      response.status(500).json({
        message: 'Error al crear el Rol y permiso.',
        data: null
      });
    }
  }

  /**
   * Actualizar un Rol y permiso existente
   */
  public async update({ request, params, response }: HttpContextContract) {
    try {
      const RolesPermisos = await RolPermiso.findOrFail({
        id_rol: params.id_rol,
        id_permiso: params.id_permiso,
      });
      const data = request.only(['id_rol', 'id_permiso']);
      RolesPermisos.merge(data);
      await RolesPermisos.save();
      response.status(200).json({
        message: 'Rol y permiso actualizados exitosamente.',
        data: RolesPermisos
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol y permiso no encontrados' });
    }
  }

  /**
   * Eliminar un Rol y permiso existente
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const RolesPermisos = await RolPermiso.findOrFail({
        id_rol: params.id_rol,
        id_permiso: params.id_permiso,
      });
      await RolesPermisos.delete();
      response.status(200).json({
        message: 'Rol y permiso eliminados exitosamente.',
        data: RolesPermisos
      });
    } catch (error) {
      response.status(404).json({ message: 'Rol y permiso no encontrados' });
    }
  }
}