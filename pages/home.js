const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  'AttackCard': require('../elements/AttackCard')
})

module.exports = (store, actions) => {
  const advanceColor = () => {
    actions.advance()
  }
  return html`
    <div>
      <AttackCard
        name="Arc Lightning"
        ap="2"
        type="lightning"
        baseType="INT"
        range="Line of Sight*"
        damage="3"
        crit="2"
        success="3"
        miss="1"
        description="Shoot out a bolt of electric energy that travels between foes."
        ability="On a successful attack, you may play this ability again, targeting another enemy (this can be done as many times as you successfully draw from the fate deck). *Line of Sight is from target to target."
        flavor="In an instant the cave lit up, and just as soon as it appeared it returned to darkness, except now the air filled with scent of burnt flesh of our enemies..."
      />
    </div>
  `
}
