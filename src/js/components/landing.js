
import Header from './_header';

var app = {
    view: () => {
        return m('.container.flex', [
            m(Header),
            m('.content', {
                style: { backgroundColor: randomizeColor() }
            }, [
                m('.title', [
                    m('.title-text', 'LEARN'),
                    m('.title-text', 'MATH LOGICS'),
                    m('.title-text.invert', 'THROUGH'),
                    m('.title-text.invert', 'WEB APPLICATION')
                ]),
                m('.desc',
                    m('span', 'Pelajari logika matematika\
                                serta lakukan penghitungan\
                                melalui aplikasi ini.'))
            ])
        ]);
    }
};

export default app;
