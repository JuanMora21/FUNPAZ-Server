import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Servicios','ServiciosController.index');
    Route.post('/Servicios','ServiciosController.store');
    Route.get('/Servicios/:id','ServiciosController.show');
    Route.put('/Servicios/:id','ServiciosController.update');
    Route.delete('/Servicios/:id','ServiciosController.destroy');
})//.middleware(['auth:api','permission'])