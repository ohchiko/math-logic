
import Header from './header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'IMPLIKASI')),
                m('.desc',
                    m('span', 'Implikasi (jika, maka) adalah pernyataan majemuk\
                                yang hanya akan bernilai salah jika\
                                pernyataan pertama benar dan\
                                pernyataan ke-dua bernilai salah.'))
            ])
        ]);
    }
};

export default app;
