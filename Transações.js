const t = await sequelize.transaction();
try {
  await Usuario.create({ nome: 'João' }, { transaction: t });
  await Perfil.create({ bio: 'Dev' }, { transaction: t });
  await t.commit();
} catch (err) {
  await t.rollback();
}
