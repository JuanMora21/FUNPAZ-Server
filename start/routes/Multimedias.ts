import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Multimedias','MultimediasController.index');
    Route.post('/Multimedias','MultimediasController.store');
    Route.get('/Multimedias/:id','MultimediasController.show');
    Route.put('/Multimedias/:id','MultimediasController.update');
    Route.delete('/Multimedias/:id','MultimediasController.destroy');
})//.middleware(['auth:api','permission'])