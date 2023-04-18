import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Ubicaciones','UbicacionesController.index');
    Route.post('/Ubicaciones','UbicacionesController.store');
    Route.get('/Ubicaciones/:id','UbicacionesController.show');
    Route.put('/Ubicaciones/:id','UbicacionesController.update');
    Route.delete('/Ubicaciones/:id','UbicacionesController.destroy');
})//.middleware(['auth:api','permission'])