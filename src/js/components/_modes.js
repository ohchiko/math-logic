const app = {
    view: (vnode) => {
        return m('.modes.flex', [
            m('.mode', {
                onclick: () => {
                    m.route.set(m.route.get(), { mode: '1/0' });
                    let val = document.getElementById('res').value;
                    if (val != '') {
                        document.getElementById('res')
                            .value = convert(val, '1/0');
                    }
                },
                class: vnode.attrs.mode == '1/0' ? 'active' : ''
            },
                m('span', '1/0')),
            m('.mode', {
                onclick: () => {
                    m.route.set(m.route.get(), { mode: 'benar/salah' });
                    let val = document.getElementById('res').value;
                    if (val != '') {
                        document.getElementById('res')
                            .value = convert(val, 'benar/salah');
                    }
                },
                class: vnode.attrs.mode == 'benar/salah' ? 'active' : ''
            },
                m('span', 'benar/salah')),
            m('.mode', {
                onclick: () => {
                    m.route.set(m.route.get(), { mode: 'true/false' });
                    let val = document.getElementById('res').value;
                    if (val != '') {
                        document.getElementById('res')
                            .value = convert(val, 'true/false');
                    }
                },
                class: vnode.attrs.mode == 'true/false' ? 'active' : ''
            },
                m('span', 'true/false')),
            m('.mode', {
                onclick: () => {
                    m.route.set(m.route.get(), { mode: 'b/s' });
                    let val = document.getElementById('res').value;
                    if (val != '') {
                        document.getElementById('res')
                            .value = convert(val, 'b/s');
                    }
                },
                class: vnode.attrs.mode == 'b/s' ? 'active' : ''
            },
                m('span', 'b/s')),
            m('.mode', {
                onclick: () => {
                    m.route.set(m.route.get(), { mode: 't/f' });
                    let val = document.getElementById('res').value;
                    if (val != '') {
                        document.getElementById('res')
                            .value = convert(val, 't/f')
                    }
                },
                class: vnode.attrs.mode == 't/f' ? 'active' : ''
            },
                m('span', 't/f'))
        ]);
    }
};

export default app;
