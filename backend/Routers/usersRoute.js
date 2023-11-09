const express= require('express');
const { getUtilisateur,
     postUtilisateur, updateUtilisateur, deleteUtilisateur } = require('../Controllers/usersController');
const router= express.Router()


router.route('/').get(getUtilisateur)
                 .post(postUtilisateur);

router.route('/:id').put(updateUtilisateur)
                    .delete(deleteUtilisateur)

module.exports= router