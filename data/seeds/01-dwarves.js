
exports.seed = function(knex) {
  return knex('companions').insert([
      {dwarf_id: 1, dwarf_name: 'Balin'},
      {dwarf_id: 2, dwarf_name: 'Gloin'},
      {dwarf_id: 3, dwarf_name: 'Nori'},
      {dwarf_id: 4, dwarf_name: 'Oin'},
      {dwarf_id: 5, dwarf_name: 'Gloin'},
      {dwarf_id: 6, dwarf_name: 'Dwalin'}
     
  ]);
};