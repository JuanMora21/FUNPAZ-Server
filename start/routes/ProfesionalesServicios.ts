import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/ProfesionalesServicios','ProfesionalesServiciosController.index');
    Route.post('/ProfesionalesServicios','ProfesionalesServiciosController.store');
    Route.get('/ProfesionalesServicios/:id','ProfesionalesServiciosController.show');
    Route.put('/ProfesionalesServicios/:id','ProfesionalesServiciosController.update');
    Route.delete('/ProfesionalesServicios/:id','ProfesionalesServiciosController.destroy');
}).middleware(['auth:api','permiso'])