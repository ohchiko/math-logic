window.m = require('mithril');

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
