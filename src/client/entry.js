import ReactDOM from 'react-dom';
import React from 'react';
import Search from '../imports/ui/components/search-component';

Meteor.startup(function () {
  ReactDOM.render(<Search/>, document.getElementById('render-target'));
});
