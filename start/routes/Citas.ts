import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Citas','CitasController.index');
    Route.post('/Citas','CitasController.store');
    Route.get('/Citas/:id','CitasController.show');
    Route.put('/Citas/:id','CitasController.update');
    Route.delete('/Citas/:id','CitasController.destroy');
})//.middleware(['auth:api','permission'])