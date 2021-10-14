const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get('/', controller.getAllSkills)
router.get('/:id', controller.getSingleSkill)
router.post('/', controller.addSkill)
router.put('/:id', controller.updateSkill)
router.delete('/:id', controller.deleteSkill)

module.exports = router