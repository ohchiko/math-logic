
window.m = require('mithril');

import handle from './core/handler';

var layoutNg = {
    view: () => {
        return [
            m('h1', 'Negasi'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('ng')
                        .value = handle(
                            '~' + e.target.elements.state.value
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state',
                    placeholder: 'Pernyataan'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#ng', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

var layoutKj = {
    view: () => {
        return [
            m('h1', 'Konjungsi'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('kj')
                        .value = handle(
                            e.target.elements.state1.value,
                            e.target.elements.state2.value,
                            '^'
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state1',
                    placeholder: 'Pernyataan 1'
                }),
                m('input', {
                    type: 'text',
                    name: 'state2',
                    placeholder: 'Pernyataan 2'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#kj', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

var layoutDj = {
    view: () => {
        return [
            m('h1', 'Disjungsi'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('dj')
                        .value = handle(
                            e.target.elements.state1.value,
                            e.target.elements.state2.value,
                            'v'
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state1',
                    placeholder: 'Pernyataan 1'
                }),
                m('input', {
                    type: 'text',
                    name: 'state2',
                    placeholder: 'Pernyataan 2'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#dj', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

var layoutIp = {
    view: () => {
        return [
            m('h1', 'Implikasi'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('ip')
                        .value = handle(
                            e.target.elements.state1.value,
                            e.target.elements.state2.value,
                            '=>'
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state1',
                    placeholder: 'Pernyataan 1'
                }),
                m('input', {
                    type: 'text',
                    name: 'state2',
                    placeholder: 'Pernyataan 2'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#ip', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

var layoutBp = {
    view: () => {
        return [
            m('h1', 'Biimplikasi'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('bp')
                        .value = handle(
                            e.target.elements.state1.value,
                            e.target.elements.state2.value,
                            '<=>'
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state1',
                    placeholder: 'Pernyataan 1'
                }),
                m('input', {
                    type: 'text',
                    name: 'state2',
                    placeholder: 'Pernyataan 2'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#bp', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

var layoutMn = {
    view: () => {
        return [
            m('h1', 'Manual'),
            m('form', {
                onsubmit: (e) => {
                    e.preventDefault();

                    document.getElementById('mn')
                        .value = handle(
                            e.target.elements.state.value
                        );
                }
            }, [
                m('input', {
                    type: 'text',
                    name: 'state',
                    placeholder: 'Pernyataan'
                }),
                m('button', {
                    type: 'submit'
                }, 'Hitung')
            ]),
            m('input#mn', {
                placeholder: 'Hasil',
                readonly: 'readonly'
            })
        ];
    }
}

m.render(document.body, [
    m(layoutNg),
    m(layoutKj),
    m(layoutDj),
    m(layoutIp),
    m(layoutBp),
    m(layoutMn)
]);
