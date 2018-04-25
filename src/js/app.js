
window.m = require('mithril');
window.handle = require('./core/handler').default;
window.convert = require('./core/converter').default;
window.colors = [
    'turquoise',
    'thistle',
    'tan',
    'silver',
    'lightseagreen',
    'lightgrey',
    'antiquewhite'
];
window.randomizeColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

import Home from './components/landing';
import Negasi from './components/negasi';
import Konjungsi from './components/konjungsi';
import Disjungsi from './components/disjungsi';
import Implikasi from './components/implikasi';
import Biimplikasi from './components/biimplikasi';
import Manual from './components/manual';
import Tabel from './components/tabel';

m.route.prefix('#');
m.route(document.body, '', {
    '': Home,
    '/negasi': Negasi,
    '/konjungsi': Konjungsi,
    '/disjungsi': Disjungsi,
    '/implikasi': Implikasi,
    '/biimplikasi': Biimplikasi,
    '/manual': Manual,
    '/tabel': Tabel
});
