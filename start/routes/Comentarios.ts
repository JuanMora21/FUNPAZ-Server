import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Comentarios','ComentariosController.index');
    Route.post('/Comentarios','ComentariosController.store');
    Route.get('/Comentarios/:id','ComentariosController.show');
    Route.put('/Comentarios/:id','ComentariosController.update');
    Route.delete('/Comentarios/:id','ComentariosController.destroy');
}).middleware(['auth:api','permiso'])