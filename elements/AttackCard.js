const Tram = require('tram-one')
const htmlForeignObject = ({style}, children) => Tram.html()`<div style=${style}>${children}</div>`

const svg = Tram.svg({
  htmlForeignObject,
  SmallFateGroup: require('./SmallFateGroup')
})

const borderStyle = `
  font-size: 3px;
  font-weight: bold;
  text-align: center;
  color: white;
  border: 1px solid #393457;
  border-radius: 10px;
  background: #393457
`

const apStyle = `
  font-size: 6px;
  font-weight: 900;
  text-align: center;
  color: #393457;
  border: 1px solid #393457;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  background: white;
`

const nameStyle = (name) => `
  font-size: ${name.length > 16 ? 4 : 5}px; 
  font-weight: bold; 
  color: white;
  line-height: 4px;
`
const nameYPosition = (name) => {
  if (name.length <= 16) {
    return 2;
  }
  if (name.length > 20) {
    return 1;
  }
  return 3;
};

module.exports = (attrs) => {
  console.log(attrs);
  return svg`
    <svg style="border-radius: 18px" width="216" height="336" enable-background="new" viewBox="0 0 57.2 88.9">
      <defs>
        <linearGradient id="f">
          <stop offset="0" stop-color="#fffffd"/>
        </linearGradient>
        <linearGradient id="e" gradientTransform="translate(0 -2.1)">
          <stop offset="0" stop-color="#393457"/>
        </linearGradient>
        <linearGradient id="d">
          <stop offset="0" stop-color="#fff"/>
          <stop offset="1" stop-color="#e2d9ba"/>
        </linearGradient>
        <marker id="q" orient="auto" overflow="visible">
          <g fill="#393457" stroke="#393457" transform="translate(-13)">
            <circle cx="3" r=".8"/>
            <circle cx="6.5" r=".8"/>
            <circle cx="10" r=".8"/>
          </g>
        </marker>
        <marker id="s" orient="auto" overflow="visible">
          <g fill="#393457" stroke="#393457">
            <circle cx="3" r=".8"/>
            <circle cx="6.5" r=".8"/>
            <circle cx="10" r=".8"/>
          </g>
        </marker>
        <radialGradient id="k" cx="30.2" cy="49.1" r="29.6" fx="30.2" fy="49.1" gradientTransform="matrix(1.39236 .73939 -1.3314 2.5072 54.9 -99.1)" gradientUnits="userSpaceOnUse" href="#d"/>
        
        <linearGradient id="l" x1="-1" x2="58.2" y1="44.4" y2="44.4" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="r" x1="52.7" x2="58.8" y1="12.8" y2="12.8" gradientTransform="translate(0 -2.1)" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="p" x1="-2.4" x2="47.5" y1="12.8" y2="12.8" gradientTransform="translate(0 -2.1)" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="v" x1="2.1" x2="12.7" y1="17" y2="17" gradientTransform="translate(0 -2.1)" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="O" x1="6.1" x2="8.9" y1="225.1" y2="225.1" gradientTransform="translate(0 -2.1)" gradientUnits="userSpaceOnUse" href="#f"/>
        <linearGradient id="w" x1="20" x2="55.7" y1="17" y2="17" gradientTransform="translate(9 4.2)" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="m" x1="52.8" x2="58.1" y1="86.2" y2="86.2" gradientTransform="translate(-.6)" gradientUnits="userSpaceOnUse" href="#e"/>
        <linearGradient id="n" x1="52.8" x2="58.1" y1="86.2" y2="86.2" gradientTransform="translate(31.2 -88.8)" gradientUnits="userSpaceOnUse" href="#e"/>
      </defs>
      <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path fill="url(#k)" stroke="url(#l)" d="M0 0h57.2v88.9H0z"/>
        <path fill="none" stroke="url(#m)" stroke-dashoffset="17.6" d="M57.2 83.9a5 5 0 0 1-5 5"/>
        <path fill="none" stroke="url(#n)" stroke-dashoffset="17.6" d="M88.9-5a5 5 0 0 1-5 5" transform="rotate(90)"/>
      </g>
      <path fill="url(#e)" d="M0 0h57.2v9.5H0z"/>
      <path fill="none" stroke="url(#p)" stroke-dashoffset="4.6" stroke-linecap="round" stroke-width=".5" marker-end="url(#q)" d="M0 10.7h47.3"/>
      <text style="line-height:1.25;-inkscape-font-specification:'EB Garamond, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" x="1.2" y="95.6" stroke-width=".3" font-family="EB Garamond" font-size="4.2" font-weight="400" letter-spacing="0" word-spacing="0"/>
      <path fill="none" stroke="url(#r)" stroke-dashoffset="4.6" stroke-linecap="round" stroke-width=".5" marker-start="url(#s)" d="M53 10.7H57"/>
      <g stroke-linecap="round">
        <path fill="none" stroke="url(#v)" stroke-width="6" d="M9.6 14.9H5.2"/>
        <path fill="none" stroke="url(#w)" stroke-width="6" d="M52.5 21.5H5.2"/>
      </g>
      <g>
        <foreignObject x="33" y="19" width="20" height="5">
          <htmlForeignObject style="font-size: 4px; font-weight: bold; text-align: right; color: white;">
            DMG ${attrs.damage}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="26" y="12" width="20" height="5">
          <htmlForeignObject style=${borderStyle}>
            ${attrs.range}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="14" y="12" width="10" height="5">
          <htmlForeignObject style=${borderStyle}>
            ${attrs.baseStat}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="4" y="${nameYPosition(attrs.name)}" width="40" height="10">
          <htmlForeignObject style=${nameStyle(attrs.name)}>
            ${attrs.name}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="45" y="1" width="10" height="10">
          <htmlForeignObject style=${apStyle}>
            ${attrs.ap}
          </htmlForeignObject>
        </foreignObject>
        <path fill="url(#O)" d="M6.8 221.3h2l-1 1.1h1l-2.1 2.3.7-1.5h-.8z" transform="translate(0 -208.1)"/>
        <foreignObject x="2" y="30" width="53" height="20">
          <htmlForeignObject style="font-size: 3px; text-align: center">
            ${attrs.description}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="2" y="44" width="53" height="20">
          <htmlForeignObject style="font-size: 3px; text-align: center">
            ${attrs.ability}
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="2" y="70" width="53" height="20">
          <htmlForeignObject style="font-size: 3px; text-align: center; font-style: italic;">
            "${attrs.flavor}"
          </htmlForeignObject>
        </foreignObject>
        <foreignObject x="3" y="19" width="33" height="6">
            <SmallFateGroup 
              crit=${attrs.crit}
              success=${attrs.success}
              miss=${attrs.miss}
            />
        </foreignObject>
      </g>
    </svg>
  `
}
