
import Header from './_header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'TABEL KEBENARAN'))
            ])
        ]);
    }
};

export default app;
