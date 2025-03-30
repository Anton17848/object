function extractSpecialAttacks({ special }) {
    return special.map((attack) => {
      const { id, name, icon, description = 'Описание недоступно' } = attack;
      return { id, name, description, icon };
    });
  }
  
  module.exports = extractSpecialAttacks;
  