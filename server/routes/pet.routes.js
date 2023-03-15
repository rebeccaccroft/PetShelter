const PetController = require('../controllers/pet.controllers')

module.exports = (app) => {
    app.get('/api/allPets', PetController.getAllPets)

    app.get('/api/pet/:id', PetController.getOnePet)

    app.post('/api/addPet', PetController.addPet)

    app.put('/api/update/:id', PetController.updateOnePet)

    app.delete('/api/delete/:id', PetController.deleteOnePet)
}