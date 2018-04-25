
import Header from './_header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'DISJUNGSI')),
                m('.desc',
                    m('span', 'Disjungsi (atau) adalah pernyataan majemuk\
                                yang hanya akan bernilai benar jika\
                                salah satu pernyataan bernilai benar.'))
            ])
        ]);
    }
};

export default app;
