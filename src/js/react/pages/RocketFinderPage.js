var React = require('react');
var Immutable = require('immutable');

// var BeanListActions = require('../../flux/actions/BeanListActions');
// var BeanListStore = require('../../flux/stores/BeanListStore');

 var PlanetsStore = require('../../flux/stores/PlanetsStore');

var ListenerMixin = require('alt/mixins/ListenerMixin');

// var BeanListItem = require('../components/BeanListItem');
var PlanetsSelector = require('../components/PlanetsSelector');

var RocketFinderPage = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
         return {planetsStore:PlanetsStore.getState()};
    },

    componentWillMount() {
        this.listenTo(PlanetsStore, this._onChange);
    },

    componentDidMount() {

        // Simple way of implementing a caching of sorts...
        // Should probably be implemented properly in the
        // Web API though, not at the view level

        // if (!this.state.beanList.length) {
        //     BeanListActions.requestBeanList();
        // }
    },

    _onChange() {
        // this.setState( BeanListStore.getState() );
    },

    render() {
      var planets = this.state.planetsStore.planets.map((planet, idx)=>{
        return <option value={idx} key={planet.name}>{planet.name}</option>;
      });
        // var beanList = null;
        //
        // if (this.state.loadingBeanList) {
        //     beanList = (
        //         <div className="loading-element">LOADING...</div>
        //     );
        // } else {
        //     beanList = this.state.beanList.map(function(listItem) {
        //         return (
        //             <BeanListItem key={listItem.bean_id} bean={listItem} />
        //         );
        //     })
        // }

        return (
          <div className="col-xs-4">
          <form className="form-horizontal">
            <div className="form-group">
                <label className="col-xs-2" htmlFor="planet">Planet</label>
                <select id="planetInput" className="col-xs-10">{planets}</select>
                </div>
                <div className="form-group">
                  <label className="col-xs-2" htmlFor="playloadMass">Payload mass</label>
                  <input type="text" className="col-xs-10" />
                </div>
          </form>
        </div>

        );
    }
});

module.exports = RocketFinderPage;
