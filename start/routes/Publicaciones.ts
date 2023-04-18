import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Publicaciones','PublicacionesController.index');
    Route.post('/Publicaciones','PublicacionesController.store');
    Route.get('/Publicaciones/:id','PublicacionesController.show');
    Route.put('/Publicaciones/:id','PublicacionesController.update');
    Route.delete('/Publicaciones/:id','PublicacionesController.destroy');
})//.middleware(['auth:api','permission'])