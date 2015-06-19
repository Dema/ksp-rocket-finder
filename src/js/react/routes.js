var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');

var RocketFinderPage = require('./pages/RocketFinderPage');
// var BeanItemPage = require('./pages/BeanItemPage');
// var BeanItemEditPage = require('./pages/BeanItemEditPage');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="rocketFinder" handler={RocketFinderPage} />
    </Route>
);

module.exports = routes;
