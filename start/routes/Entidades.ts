import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Entidades','EntidadesController.index');
    Route.post('/Entidades','EntidadesController.store');
    Route.get('/Entidades/:id','EntidadesController.show');
    Route.put('/Entidades/:id','EntidadesController.update');
    Route.delete('/Entidades/:id','EntidadesController.destroy');
})//.middleware(['auth:api','permission'])