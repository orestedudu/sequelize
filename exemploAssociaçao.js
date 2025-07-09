// hasOne (Um-para-Um)
Usuario.hasOne(Perfil);
Perfil.belongsTo(Usuario);

// hasMany (Um-para-Muitos)
Categoria.hasMany(Produto);
Produto.belongsTo(Categoria);

// belongsToMany (Muitos-para-Muitos)
Aluno.belongsToMany(Curso, { through: 'Matriculas' });
Curso.belongsToMany(Aluno, { through: 'Matriculas' });
