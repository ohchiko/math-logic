
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
                    m('.title-text', 'NEGASI')),
                m('.desc',
                    m('span', 'Negasi (ingkaran) adalah\
                                pernyataan yang menyangkal\
                                pernyataan yang diberikan\
                                (lawan dari pernyataan yang diberikan).')),
                m('.calculator.flex', [
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
                        m('.separator.flex',
                            m('span', '~')),
                        m('input', {
                            type: 'text',
                            name: 'stm',
                            placeholder: 'Pernyataan (co. 1|benar|true|...)',
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
