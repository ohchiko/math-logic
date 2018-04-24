
import Header from './header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header, {invert: true}),
            m('.content', [
                m('.title',
                    m('.title-text', 'NEGASI')),
                m('.desc',
                    m('span', 'Negasi (ingkaran) adalah\
                                pernyataan yang menyangkal\
                                pernyataan yang diberikan\
                                (lawan dari pernyataan yang diberikan).'))
            ])
        ]);
    }
};

export default app;
