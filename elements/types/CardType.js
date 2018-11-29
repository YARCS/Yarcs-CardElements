const Tram = require('tram-one');
const svg = Tram.svg({
  BowType: require('./BowType'),
  ElectricType: require('./ElectricType'),
  FireType: require('./FireType'),
  FistType: require('./FistType'),
  HammerType: require('./HammerType'),
  LightType: require('./LightType'),
  SwordType: require('./SwordType'),
  WaterType: require('./WaterType'),
});

const getType = (type) => {
  switch(type) {
    case 'Bow': return svg`<BowType />`
    case 'Electric': return svg`<ElectricType />`
    case 'Fire': return svg`<FireType />`
    case 'Fist': return svg`<FistType />`
    case 'Hammer': return svg`<HammerType />`
    case 'Light': return svg`<LightType />`
    case 'Sword': return svg`<SwordType />`
    case 'Water': return svg`<WaterType />`
    default: console.error(`type ${type} not found`)
  }
  return null;
}

module.exports = (attrs, [type]) => svg`
  <g fill="#fff" style="transform: translate(4.8px, 12.5px) scale(0.5)">
    ${getType(type)}
  </g>
`