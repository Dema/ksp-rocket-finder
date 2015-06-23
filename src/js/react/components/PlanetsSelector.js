var React = require('react');
var Immutable = require('immutable');

var PlanetsSelector = React.createClass({

  render(){
    var planets = this.props.planets.map((planet, idx)=>{
      return <option value={idx} key={planet.name}>{planet.name}</option>;
    });

    return <select onChange={this.props.onPlanetChange}>{planets}</select>;
  }
});
module.exports = PlanetsSelector;
