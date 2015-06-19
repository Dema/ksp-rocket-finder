//var BeanListActions = require('../actions/BeanListActions');
var alt = require('../alt');
var Immutable = require('immutable');

class RocketPartsListStore {
    constructor() {
      //  this.bindActions(BeanListActions);

        this.beanList = [];
    }

    onRequestBeanList() {
    }

    onReceiveBeanList(rawList) {
        this._init(rawList);
    }

    _init(rawList) {
        this.beanList = rawList;
    }
}

module.exports = alt.createStore(RocketPartsListStore);
