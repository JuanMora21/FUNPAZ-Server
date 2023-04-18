import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Administradores','AdministradoresController.index');
    Route.post('/Administradores','AdministradoresController.store');
    Route.get('/Administradores/:id','AdministradoresController.show');
    Route.put('/Administradores/:id','AdministradoresController.update');
    Route.delete('/Administradores/:id','AdministradoresController.destroy');
})//.middleware(['auth:api','permission'])