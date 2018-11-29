const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  'AttackCard': require('../elements/AttackCard')
})

module.exports = (store, actions) => {
  console.log(store.cards)
  if (Object.keys(store.cards).length === 0) {
    return html`<div>Loading...</div>`
  }
  const cardElements = Object.keys(store.cards)
    .map((cardKey) => store.cards[cardKey])
    .map((card) => html`
      <AttackCard
        name=${card.name}
        ap=${card.ap}
        type=${card.type}
        baseStat=${card.baseStat}
        range=${card.range}
        damage=${card.damage}
        crit=${card.crit}
        success=${card.success}
        miss=${card.miss}
        description=${card.description}
        ability=${card.ability}
        flavor=${card.flavor}
      />
    `)
  return html`
    <div>
      ${cardElements}
    </div>
  `
}
