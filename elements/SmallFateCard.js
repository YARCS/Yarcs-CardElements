const Tram = require('tram-one')
const html = Tram.html()

const getTypeColor = (type) => {
  switch(type) {
    case 'crit': return '#cb4d68';
    case 'success': return '#5bb361';
    case 'miss': return '#11adc1';
  }
  return 'black';
}

const cardContainerStyle = `
  display: flex;
`

const cardStyle = (type) => {
  return `
    background: white;
    height: 3px;
    width: 2px;
    border: 1px solid ${getTypeColor(type)};
    border-radius: 1px;
    transform: rotate(-15deg) scale(0.8);
  `
}


const renderCard = (type) => html`<div style=${cardStyle(type)} />`

module.exports = (attrs) => {
  const numberOfCards = Number(attrs.number) || 0;
  return html`
    <div style=${cardContainerStyle}>
      ${[...Array(numberOfCards)].map(renderCard.bind(null, attrs.type))}
    </div>
  `
}
