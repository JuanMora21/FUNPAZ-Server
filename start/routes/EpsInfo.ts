import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/EpsInfo','EpsInfoController.index');
    Route.post('/EpsInfo','EpsInfoController.store');
    Route.get('/EpsInfo/:id','EpsInfoController.show');
    Route.put('/EpsInfo/:id','EpsInfoController.update');
    Route.delete('/EpsInfo/:id','EpsInfoController.destroy');
}).middleware(['auth:api','permiso'])