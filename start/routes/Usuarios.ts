import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Usuarios','UsuariosController.index');
    Route.post('/Usuarios','UsuariosController.store');
    Route.get('/Usuarios/:id','UsuariosController.show');
    Route.put('/Usuarios/:id','UsuariosController.update');
    Route.delete('/Usuarios/:id','UsuariosController.destroy');
})//.middleware(['auth:api','permission'])