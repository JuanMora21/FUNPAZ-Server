import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Mapas','MapasController.index');
    Route.post('/Mapas','MapasController.store');
    Route.get('/Mapas/:id','MapasController.show');
    Route.put('/Mapas/:id','MapasController.update');
    Route.delete('/Mapas/:id','MapasController.destroy');
})//.middleware(['auth:api','permission'])