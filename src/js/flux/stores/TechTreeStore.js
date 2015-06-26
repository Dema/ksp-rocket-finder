// var BeanListActions = require('../actions/BeanListActions');
var alt = require('../alt');
var Immutable = require('immutable');
class TechTreeStore {
  constructor() {
    // this.bindActions(BeanListActions);


    this.techTree = Immutable.List([{
      name: "Start",
      techLevel: 0,
      parts: [{
          type: "BOOSTER",
          name: "RT-5 \"Flea\" Solid Fuel Booster",
          cost: 200.0,
          massTotal: 1.5,
          massDry: 0.45,
          ispAtm: 140,
          ispVac: 165,
          fuelConsumption: 15.8,
          fuelAmount: 140
        }

      ]
    }]);
  }

}

module.exports = alt.createStore(TechTreeStore);
