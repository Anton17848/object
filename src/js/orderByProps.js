function orderByProps(obj, sortOrder) {
  const result = [];
  const remainingKeys = new Set(Object.keys(obj));

  // Добавляем свойства в порядке, указанном в sortOrder
  for (let i = 0; i < sortOrder.length; i++) {
    const key = sortOrder[i];
    if (obj.hasOwnProperty(key)) {
      result.push({ key, value: obj[key] });
      remainingKeys.delete(key);
    }
  }

  // Добавляем оставшиеся свойства в алфавитном порядке
  const sortedRemainingKeys = Array.from(remainingKeys).sort();
  for (const key of sortedRemainingKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}

module.exports = orderByProps;