const assert = require('assert');
const extractSpecialAttacks = require('../extractSpecialAttacks');

describe('extractSpecialAttacks', () => {
  it('should extract special attacks with all fields', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }
      ]
    };
    const expectedResult = [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      }
    ];

    assert.deepStrictEqual(extractSpecialAttacks(character), expectedResult);
  });

  it('should handle missing description field', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
        }
      ]
    };
    const expectedResult = [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ];

    assert.deepStrictEqual(extractSpecialAttacks(character), expectedResult);
  });
});
