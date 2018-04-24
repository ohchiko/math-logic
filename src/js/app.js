window.m = require('mithril');

import Home from './components/landing';

m.route.prefix('#');
m.route(document.body, '', {
    '': Home
});
