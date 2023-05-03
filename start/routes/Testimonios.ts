import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Testimonios','TestimoniosController.index');
    Route.post('/Testimonios','TestimoniosController.store');
    Route.get('/Testimonios/:id','TestimoniosController.show');
    Route.put('/Testimonios/:id','TestimoniosController.update');
    Route.delete('/Testimonios/:id','TestimoniosController.destroy');
}).middleware(['auth:api','permiso'])