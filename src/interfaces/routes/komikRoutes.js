const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.get('/', controller.getAll);        // GET    /komik
  router.get('/:id', controller.getById);    // GET    /komik/:id
  router.post('/', controller.create);       // POST   /komik
  router.put('/:id', controller.update);     // PUT    /komik/:id
  router.delete('/:id', controller.delete);  // DELETE /komik/:id

  return router;
};
