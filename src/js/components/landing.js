
import Header from './header';

var app = {
    view: () => {
        return m('.landing.flex', [
            m(Header),
            m('.landing-content', [
                m('.landing-title', [
                    m('.title-text', 'LEARN'),
                    m('.title-text', 'MATH LOGICS'),
                    m('.title-text.invert', 'THROUGH'),
                    m('.title-text.invert', 'WEB APPLICATION')
                ]),
                m('.landing-desc',
                    m('span', 'Pelajari logika matematika\
                                serta lakukan perhitungan\
                                melalui aplikasi ini.'))
            ])
        ]);
    }
};

export default app;
