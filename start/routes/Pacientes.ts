import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/Pacientes','PacientesController.index');
    Route.post('/Pacientes','PacientesController.store');
    Route.get('/Pacientes/:id','PacientesController.show');
    Route.put('/Pacientes/:id','PacientesController.update');
    Route.delete('/Pacientes/:id','PacientesController.destroy');
}).middleware(['auth:api','permiso'])