
import Header from './header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'BIIMPLIKASI')),
                m('.desc',
                    m('span', 'Biimplikasi (jika dan hanya jika) adalah pernyataan majemuk\
                                yang hanya akan bernilai benar jika\
                                kedua pernyataan bernilai sama (benar/salah).'))
            ])
        ]);
    }
};

export default app;
