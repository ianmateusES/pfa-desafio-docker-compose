
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modulos').del()
    .then(function () {
      return knex('modulos').insert([
        {id: '0d8591b3', name: 'kafka'},
        {id: '0d8591d2', name: 'Docker'},
        {id: '0d8595b5', name: 'Kubernetes'},
        {id: '0dd511d2', name: 'Service Mesh com Istio'},
      ]);
    });
};
