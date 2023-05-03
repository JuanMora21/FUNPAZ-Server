import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import Permiso from "App/Models/Permiso"
import RolPermiso from "App/Models/RolPermiso"

export default class PermisoGuard {
    public async handle({ auth, request }: HttpContextContract, next: () => Promise<void>) {
      const url = request.url()
      const metodo = request.method()
      const parts = url.split('/')
  
      let new_url = "/"+parts[1]
      const usuario_id_rol = auth.user?.id_rol
      let has_Permisos:boolean 
      console.log(usuario_id_rol, new_url,metodo)
      
      has_Permisos = await this.verifyPermisos(usuario_id_rol, new_url, metodo)
      
      if (!has_Permisos) {
        /**
         * The usuario doesnt have the right Permisos for its request
         */
         throw new AuthenticationException(
          'Missing right Permisos',
          'E_MISSINGS_PermisoS'
        )
      } 
  
      // The usuario has Permiso
      console.log("Permiso otorgado")
      await next()
    
    }
  
  
    protected async verifyPermisos(usuario_id_rol, url, metodo):Promise<boolean>{
      let rolPermiso = await RolPermiso.query().where('id_rol', '=', usuario_id_rol)
      for(let i=0;i<rolPermiso.length;i++){
        let permiso = await Permiso.find(rolPermiso[i].id_permiso)
        if (permiso?.url == url && permiso?.metodo == metodo.toUpperCase()) 
          return true
      }
      return false
    }
  
  
  }