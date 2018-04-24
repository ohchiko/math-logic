
import Header from './header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'MANUAL')),
                m('.desc',
                    m('span', 'Tentukan hasil dari pernyataan yang Anda tulis sendiri.'))
            ])
        ]);
    }
};

export default app;
