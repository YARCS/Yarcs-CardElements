const Tram = require('tram-one');

const groupStyle = ({crit = 0, success = 0, miss = 0}) => {
  const numberOfCards = Number(crit) + Number(success) + Number(miss);
  const scale = numberOfCards >= 9
    ? 1 - ((numberOfCards - 8) / 10)
    : 1
  return `
    display: flex;
    justify-content: space-evenly;
    transform: scale(${scale});
  `
}

module.exports = (attrs, children) => Tram.html({
  SmallFateCard: require('./SmallFateCard')
})`
<div style=${groupStyle(attrs)}>
  <SmallFateCard number=${attrs.crit} type="crit" />
  <SmallFateCard number=${attrs.success} type="success" />
  <SmallFateCard number=${attrs.miss} type="miss" />
</div>
`