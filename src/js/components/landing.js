
import Header from './_header';

var app = {
  view: () => {
    return m('.container.flex', [
      m(Header),
      m('.content', {
        style: { backgroundColor: randomizeColor() }
      }, [
        m('.title', [
          m('.title-text',
            m('span', 'LEARN')),
          m('.title-text',
            m('span', 'MATH LOGICS')),
          m('.title-text.invert',
            m('span', 'THROUGH')),
          m('.title-text.invert',
            m('span', 'WEB APPLICATION'))
        ]),
        m('.desc',
          m('span', 'Pelajari logika matematika\
                    lakukan penghitungan\
                    melalui aplikasi ini.'))
      ])
    ]);
  }
};

export default app;
