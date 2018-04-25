
import Header from './header';

var app = {
    view: (vnode) => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'NEGASI')),
                m('.desc',
                    m('span', 'Negasi (ingkaran) adalah\
                                pernyataan yang menyangkal\
                                pernyataan yang diberikan\
                                (lawan dari pernyataan yang diberikan).')),
                m('.calculator', [
                    m('form.flex', {
                        onsubmit: (e) => {
                            e.preventDefault();

                            let result = handle('~' + e.target.elements.stm.value);
                            if (vnode.attrs.mode) {
                                result = convert(result, vnode.attrs.mode);
                            }
                            document.getElementById('res').value = result;
                        }
                    }, [
                        m('input', {
                            type: 'text',
                            name: 'stm',
                            placeholder: 'Pernyataan (co. 1|benar|true|...)',
                            required: 'required'
                        }),
                        m('button', { type: 'submit' }, 'Result')
                    ]),
                    m('.modes.flex', [
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
                    ]),
                    m('.result.flex', [
                        m('input#res', {
                            placeholder: 'Hasil',
                            readonly: 'readonly'
                        }),
                        m('button', {
                            type: 'button',
                            onclick: (e) => {
                                let result = e.target.previousSibling,
                                    modes = result.parentNode.previousSibling,
                                    form = modes.previousSibling;
                                result.value = '';
                                m.route.set(m.route.get(), {mode: ''});
                                form.reset();

                            }
                        }, 'Reset')
                    ])
                ])
            ])
        ]);
    }
};

const convert = (val, to) => {
    val = val.replace(/benar|true|t|b/, '1');
    val = val.replace(/salah|false|f|s/, '0');
    val = +val;
    to = to.split('/');
    return val ? to[0] : to[1];
}

export default app;
