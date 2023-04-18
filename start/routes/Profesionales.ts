import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Profesionales','ProfesionalesController.index');
    Route.post('/Profesionales','ProfesionalesController.store');
    Route.get('/Profesionales/:id','ProfesionalesController.show');
    Route.put('/Profesionales/:id','ProfesionalesController.update');
    Route.delete('/Profesionales/:id','ProfesionalesController.destroy');
})//.middleware(['auth:api','permission'])