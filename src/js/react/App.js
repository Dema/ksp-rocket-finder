var React = require('react');
var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;

var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div>
              <h1>Optimal Rocket Finder</h1>
              <div className="container-fluid">
                <ul className="navigation">
                    <Link to='home'><li className="navigation-item">HOME</li></Link>
                    <Link to='techTree'><li className="navigation-item">Tech Tree</li></Link>
                </ul>
                <RouteHandler {...this.props} />
            </div>
          </div>
        );
    }
});

module.exports = App;
