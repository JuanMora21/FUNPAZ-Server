import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Eps','EpsController.index');
    Route.post('/Eps','EpsController.store');
    Route.get('/Eps/:id','EpsController.show');
    Route.put('/Eps/:id','EpsController.update');
    Route.delete('/Eps/:id','EpsController.destroy');
})//.middleware(['auth:api','permission'])