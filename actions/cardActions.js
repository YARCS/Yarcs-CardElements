module.exports = {
  init: () => ({}),
  addCard: (cards, newCardData) => {
    const [cardName, cardPool, baseStat, ap, damage, range, description, ability, crit, success, miss, flavor] = newCardData;
    return Object.assign({}, cards, {[cardName]: {
      cardName,
      cardPool,
      baseStat,
      ap,
      damage,
      range,
      description,
      ability,
      crit,
      success,
      miss,
      flavor
    }});
  }
}