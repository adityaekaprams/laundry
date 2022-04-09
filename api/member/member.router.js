const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    } = require('./member.controller');
const authorize = require('../auth/authorize');
const {IsKasir, IsAdmin, IsOwner, IsAdminKasir} = require('../auth/role');

// routes
router.get('/',  controllerGetAll); 
router.get('/:id_member',  controllerGetId); 
router.post('/',  controllerAdd); 
router.put('/',  controllerEdit); 
router.delete('/:id_member', controllerDelete); 
module.exports = router;