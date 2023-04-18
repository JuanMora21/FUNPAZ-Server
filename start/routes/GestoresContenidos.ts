import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/GestoresContenidos','GestoresContenidosController.index');
    Route.post('/GestoresContenidos','GestoresContenidosController.store');
    Route.get('/GestoresContenidos/:id','GestoresContenidosController.show');
    Route.put('/GestoresContenidos/:id','GestoresContenidosController.update');
    Route.delete('/GestoresContenidos/:id','GestoresContenidosController.destroy');
})//.middleware(['auth:api','permission'])