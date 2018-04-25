
import Header from './_header';
import Modes from './_modes';
import Result from './_result';

var app = {
    view: (vnode) => {
        return m('.container.flex', [
            m(Header, { invert: true }),
            m('.content', {
                style: { backgroundColor: randomizeColor() }
            }, [
                m('.title',
                    m('.title-text', 'MANUAL')),
                m('.desc',
                    m('span', 'Tentukan hasil dari pernyataan yang Anda tulis sendiri.')),
                m('.calculator', [
                    m('form.flex', {
                        onsubmit: (e) => {
                            e.preventDefault();

                            var stm = e.target.elements.stm.value,
                                p = e.target.elements.p.value,
                                q = e.target.elements.q.value;

                            stm = stm.replace(/p/g, p);
                            stm = stm.replace(/q/g, q);

                            let result = handle(stm);
                            if (vnode.attrs.mode) {
                                result = convert(result, vnode.attrs.mode);
                            }
                            document.getElementById('res').value = result;
                        }
                    }, [
                        m('input', {
                            type: 'text',
                            name: 'p',
                            placeholder: 'p (co. 1|benar|true|...)',
                            required: 'required',
                            autocomplete: 'off',
                            autofocus: 'autofocus'
                        }),
                        m('input', {
                            type: 'text',
                            name: 'q',
                            placeholder: 'q (co. 1|benar|true|...)',
                            required: 'required',
                            autocomplete: 'off',
                            autofocus: 'autofocus'
                        }),
                        m('input', {
                            type: 'text',
                            name: 'stm',
                            placeholder: 'Pernyataan (co. p^q|p=>~q|...)',
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
