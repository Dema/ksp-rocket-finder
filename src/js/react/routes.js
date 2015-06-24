var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');

var RocketFinderPage = require('./pages/RocketFinderPage');
var TechTreePage = require('./pages/TechTreePage');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="rocketFinder" handler={RocketFinderPage} />
        <route name="techTree" handler={TechTreePage} />
    </Route>
);

module.exports = routes;
