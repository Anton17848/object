const assert = require('assert');
const orderByProps = require('../orderByProps');

describe('orderByProps', () => {
  it('should sort object properties according to the provided order and alphabetically for the rest', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const sortOrder = ['name', 'level'];
    const expectedResult = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ];

    assert.deepStrictEqual(orderByProps(obj, sortOrder), expectedResult);
  });

  it('should handle an empty sort order array', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const sortOrder = [];
    const expectedResult = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ];

    assert.deepStrictEqual(orderByProps(obj, sortOrder), expectedResult);
  });

  it('should handle a sort order array with all object keys', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const sortOrder = ['name', 'level', 'attack', 'defence', 'health'];
    const expectedResult = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ];

    assert.deepStrictEqual(orderByProps(obj, sortOrder), expectedResult);
  });
});
