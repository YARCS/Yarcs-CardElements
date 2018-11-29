const Tram = require('tram-one');
const svg = Tram.svg({
  ElectricType: require('./ElectricType'),
  HammerType: require('./HammerType'),
  SwordType: require('./SwordType'),
});

module.exports = (attrs, [type]) => {
  switch(type) {
    case 'Electric': return svg`<ElectricType />`
    case 'Hammer': return svg`<HammerType />`
    case 'Sword': return svg`<SwordType />`
    default: console.error(`type ${type} not found`)
  }
}