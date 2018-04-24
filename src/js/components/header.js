var app = {
    view: () => {
        return m('header.flex', [
            m('.title.flex',
                m('span', 'mathLogics')),
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
                    m('a', { href: '#' },
                        m('span', 'Konjungsi'))),
                m('li.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Disjungsi'))),
                m('li.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Implikasi'))),
                m('li.nav-text',
                    m('a', { href: '#' },
                        m('span', 'Biimplikasi'))),
                m('li.nav-text',
                    m('a', { href: '#' },
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
