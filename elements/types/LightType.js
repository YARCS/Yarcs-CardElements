const Tram = require('tram-one');

module.exports = (attrs, children) => Tram.svg()`
  <path fill="#fff" stroke="#fff" stroke-dashoffset="17.57479477" stroke-linecap="square" stroke-linejoin="round" stroke-width=".241" d="M5.8 9C4 11.2 8.5 6.4 5.6 6c-3.6-.8.8 1.7-2.8 2.3-3 .5 3.6.2 2-2.2-2-3-.7 1.8-3.7-.3-2.4-1.8 2.4 2.7 3-.2.7-3.6-1.8.8-2.4-2.8-.5-3-.2 3.6 2.2 2 3-2-1.8-.7.3-3.7 1.8-2.4-2.7 2.4.2 3 3.6.7-.8-1.8 2.8-2.4 3-.5-3.6-.2-2 2.3C7.2 7 6 2 9 4.2c2.4 1.8-2.4-2.7-3 .2-.7 3.6 1.8-.8 2.4 2.8.5 3 .2-3.6-2.3-2C3 7.3 8 6 5.8 9z"/>
`