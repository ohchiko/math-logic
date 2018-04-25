
import Header from './_header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'KONJUNGSI')),
                m('.desc',
                    m('span', 'Konjungsi (dan) adalah pernyataan majemuk\
                                yang hanya akan bernilai benar jika\
                                kedua pernyataan bernilai benar.'))
            ])
        ]);
    }
};

export default app;
