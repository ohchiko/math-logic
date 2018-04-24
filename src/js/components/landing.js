
import Header from './header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header),
            m('.content', [
                m('.title', [
                    m('.title-text', 'LEARN'),
                    m('.title-text', 'MATH LOGICS'),
                    m('.title-text.invert', 'THROUGH'),
                    m('.title-text.invert', 'WEB APPLICATION')
                ]),
                m('.desc',
                    m('span', 'Pelajari logika matematika\
                                serta lakukan perhitungan\
                                melalui aplikasi ini.'))
            ])
        ]);
    }
};

export default app;
