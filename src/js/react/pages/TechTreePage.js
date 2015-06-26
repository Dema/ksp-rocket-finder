var React = require('react');
var Immutable = require('immutable');

var TechTreeStore = require('../../flux/stores/TechTreeStore');

var ListenerMixin = require('alt/mixins/ListenerMixin');

// var BeanListItem = require('../components/BeanListItem');

var RocketFinderPage = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
         return {techTreeStore:TechTreeStore.getState()};
    },

    componentWillMount() {
        this.listenTo(TechTreeStore, this._onChange);
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
        return (
          <div><h2>Tech Tree</h2>
            <ul>{this.state.techTreeStore.techTree}</ul>
          </div>
        );
    }
});

module.exports = RocketFinderPage;
