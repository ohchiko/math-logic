
const app = {
    view: () => {
        return m('.result.flex', [
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
                    m.route.set(m.route.get(), {mode: '1/0'});
                    form.reset();
                }
            }, 'Reset')
        ]);
    }
};

export default app;
