var app = {
    view: (vnode) => {
        return m('header.flex', {
            class: vnode.attrs.invert ? 'invert' : '',
            oncreate: (e) => e.dom.style.backgroundColor = document.querySelector('.content').style.backgroundColor,
            onupdate: (e) => e.dom.style.backgroundColor = document.querySelector('.content').style.backgroundColor
        }, [
            m('.title.flex',
                m('a', {
                    href: '',
                    oncreate: m.route.link
                }, 'mathLogics')),
            m('.flex'),
            m('.nav-bar.flex', {
                onclick: (e) => {
                    let next = document.querySelector('ul.nav-container');
                    if (next.classList) {
                        next.classList.toggle('active');
                        next.previousSibling.classList.toggle('active');
                    } else {
                        var nextCls = next.className.split(' '),
                            eCls = next.previousSibling.className.split(' '),
                            i = nextCls.indexOf('active');

                        if (i >= 0) {
                            nextCls.splice(i, 1);
                            eCls.splice(i, 1);
                        }
                        else {
                            nextCls.push('active');
                            eCls.push('active');
                            next.className = nextCls.join(' ');
                            next.previousSibling.className = nextCls.join(' ');
                        }
                    }
                }
            }, [
                m('i.fas.fa-bars.fa-fw.fa-lg'),
                m('i.fas.fa-times.fa-fw.fa-lg')
            ]),
            m('ul.nav-container.flex', [
                m('li.nav-text',
                    m('a', {
                        href: '/negasi',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/negasi') ? 'active' : ''
                    },
                        m('span', 'Negasi'))),
                m('li.nav-text',
                    m('a', {
                        href: '/konjungsi',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/konjungsi') ? 'active' : ''
                    },
                        m('span', 'Konjungsi'))),
                m('li.nav-text',
                    m('a', {
                        href: '/disjungsi',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/disjungsi') ? 'active' : ''
                    },
                        m('span', 'Disjungsi'))),
                m('li.nav-text',
                    m('a', {
                        href: '/implikasi',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/implikasi') ? 'active' : ''
                    },
                        m('span', 'Implikasi'))),
                m('li.nav-text',
                    m('a', {
                        href: '/biimplikasi',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/biimplikasi') ? 'active' : ''
                    },
                        m('span', 'Biimplikasi'))),
                m('li.nav-text',
                    m('a', {
                        href: '/manual',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/manual') ? 'active' : ''
                    },
                        m('span', 'Manual'))),
                m('li.nav-text',
                    m('a', {
                        href: '/tabel',
                        oncreate: m.route.link,
                        class: m.route.get().includes('/tabel') ? 'active' : ''
                    },
                        m('span', 'Tabel Kebenaran'))),
            ]),
            m('.nav-cover', {
                onclick: (e) => {
                    let next = document.querySelector('ul.nav-container');
                    if (next.classList) {
                        next.classList.toggle('active');
                        next.previousSibling.classList.toggle('active');
                    } else {
                        var nextCls = next.className.split(' '),
                            eCls = next.previousSibling.className.split(' '),
                            i = nextCls.indexOf('active');

                        if (i >= 0) {
                            nextCls.splice(i, 1);
                            eCls.splice(i, 1);
                        }
                        else {
                            nextCls.push('active');
                            eCls.push('active');
                            next.className = nextCls.join(' ');
                            next.previousSibling.className = nextCls.join(' ');
                        }
                    }
                }
            })
        ]);
    }
};

export default app;
