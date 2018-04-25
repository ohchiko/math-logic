
import Header from './_header';
import Modes from './_modes';
import Result from './_result';

var app = {
    view: (vnode) => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'DISJUNGSI')),
                m('.desc',
                    m('span', 'Disjungsi (atau) adalah pernyataan majemuk\
                                yang hanya akan bernilai benar jika\
                                salah satu pernyataan bernilai benar.')),
                    m('.calculator', [
                        m('form.flex', {
                            onsubmit: (e) => {
                                e.preventDefault();

                                let result = handle(
                                    e.target.elements.stm1.value,
                                    e.target.elements.stm2.value,
                                    'v'
                                );
                                if (vnode.attrs.mode) {
                                    result = convert(result, vnode.attrs.mode);
                                }
                                document.getElementById('res').value = result;
                            }
                        }, [
                            m('input', {
                                type: 'text',
                                name: 'stm1',
                                placeholder: 'Pernyataan 1 (co. 1|benar|true|...)',
                                required: 'required',
                                autocomplete: 'off'
                            }),
                            m('.separator.flex',
                                m('span', 'v')),
                            m('input', {
                                type: 'text',
                                name: 'stm2',
                                placeholder: 'Pernyataan 2 (co. 1|benar|true|...)',
                                required: 'required',
                                autocomplete: 'off'
                            }),
                            m('button', { type: 'submit' }, 'Result')
                        ]),
                        m(Modes, vnode.attrs),
                        m(Result)
                    ])
            ])
        ]);
    }
};

export default app;
