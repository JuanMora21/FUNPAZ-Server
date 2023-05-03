import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/EntidadesMultimedias','EntidadesMultimediasController.index');
    Route.post('/EntidadesMultimedias','EntidadesMultimediasController.store');
    Route.get('/EntidadesMultimedias/:id','EntidadesMultimediasController.show');
    Route.put('/EntidadesMultimedias/:id','EntidadesMultimediasController.update');
    Route.delete('/EntidadesMultimedias/:id','EntidadesMultimediasController.destroy');
}).middleware(['auth:api','permiso'])