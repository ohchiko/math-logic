
import Header from './_header';
import Tables from '../core/tables.json';

var app = {
    oninit: (vnode) => {
        if (!vnode.attrs.type) {
            m.route.set(m.route.get(), { type: 'negasi' });
            vnode.attrs.type = 'negasi';
        }
    },
    view: (vnode) => {
        return m('.container.flex', [
            m(Header, { invert: true }),
            m('.content', {
                style: { backgroundColor: randomizeColor() }
            }, [
                m('.title',
                    m('.title-text', 'TABEL KEBENARAN')),
                m('.types.flex', [
                    m('.type', {
                        onclick: () => m.route.set(m.route.get(), { type: 'negasi' }),
                        class: vnode.attrs.type == 'negasi' ? 'active' : ''
                    },
                        m('span', 'Negasi')),
                    m('.type', {
                        onclick: () => m.route.set(m.route.get(), { type: 'konjungsi' }),
                        class: vnode.attrs.type == 'konjungsi' ? 'active' : ''
                    },
                        m('span', 'Konjungsi')),
                    m('.type', {
                        onclick: () => m.route.set(m.route.get(), { type: 'disjungsi' }),
                        class: vnode.attrs.type == 'disjungsi' ? 'active' : ''
                    },
                        m('span', 'Disjungsi')),
                    m('.type', {
                        onclick: () => m.route.set(m.route.get(), { type: 'implikasi' }),
                        class: vnode.attrs.type == 'implikasi' ? 'active' : ''
                    },
                        m('span', 'Implikasi')),
                    m('.type', {
                        onclick: () => m.route.set(m.route.get(), { type: 'biimplikasi' }),
                        class: vnode.attrs.type == 'biimplikasi' ? 'active' : ''
                    },
                        m('span', 'Biimplikasi')),
                ]),
                m('.table-container',
                    vnode.attrs.type == 'negasi'
                    ? m('table', [
                        m('thead',
                            m('tr', [
                                m('th', 'p'),
                                m('th', '~p')
                            ])),
                        m('tbody', [
                            m('tr', [
                                m('td', 'B'),
                                m('td', 'S')
                            ]),
                            m('tr', [
                                m('td', 'S'),
                                m('td', 'B')
                            ])
                        ])
                    ])
                    : m('table', [
                        m('thead',
                            m('tr', [
                                m('th', 'p'),
                                m('th', 'q'),
                                m('th', `p ${Tables[vnode.attrs.type].prefix} q`)
                            ])),
                        m('tbody', Tables[vnode.attrs.type].values.map((o) => {
                            return m('tr', o.map((i) => {
                                return m('td', i);
                            }));
                        }))
                    ]))
            ])
        ]);
    }
};

export default app;
