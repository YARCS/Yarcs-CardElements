module.exports = {
  init: () => ({}),
  addCards: (cards, sheetData) => {
    return sheetData
      .filter((data, index) => index !== 0 && data.length !== 0)
      .reduce((cardsMap, newCardData) => {
        const [name, cardPool, baseStat, ap, damage, range, description, ability, crit, success, miss, flavor] = newCardData;
        return Object.assign({}, cardsMap, {[name]: {
          name,
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
      }, cards)
  }
}