const Tram = require('tram-one');

module.exports = (attrs, children) => Tram.svg()`
  <g>
    <defs>
      <marker id="a" orient="auto" overflow="visible" refX="0.0" refY="0.0">
        <path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" stroke-width=".1875" d="M-2-1.2L1.5 0-2 1.2a2 2 0 0 0 0-2.4z"/>
      </marker>
    </defs>
    <g fill="none" stroke="#fff" stroke-linecap="round">
      <path d="M1.3 2C5 1 8 6.6 6 9M1.3 2L6 9"/>
      <path marker-end="url(#a)" d="M5.7 291l2.7-1.7" transform="translate(0 -287)"/>
      <path d="M1.5 6.8l3.1-2"/>
    </g>
  </g>
`