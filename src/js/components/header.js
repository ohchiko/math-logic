var app = {
    view: () => {
        return m('header.flex', [
            m('.title',
                [
                    m('span', 'mathLogics'),
                    m('span', 'Math Truth Table')
                ]),
            m('.flex'),
            m('.nav-container.flex', [
                m('.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Konjungsi'))),
                m('.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Disjungsi'))),
                m('.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Implikasi'))),
                m('.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Biimplikasi'))),
                m('.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Tabel Kebenaran'))),
            ])
        ]);
    }
};

export default app;
