
import {
    negasi,
    konjungsi,
    disjungsi,
    implikasi,
    biimplikasi
} from './single';

const app = (str) => {
    var neg = /~\d/;
    if (str.length == 3) {
        if (neg.test(str)) {
            let val = neg.exec(str) + '',
                a = val.charAt(1);

            str = str.replace(val, + negasi(a));
        }

        let a = str.charAt(0),
            b = /\d$/.exec(str) + '',
            op = /[\^|v|\=\>|\<\=\>]+/.exec(str) + '';

        str = operate(a, b, op);
    } else {
        var reg = /\d[\^|v|\=\>|\<\=\>]+\d/;

        while (neg.test(str)) {
            let val = neg.exec(str) + '',
                a = val.charAt(1);

            str = str.replace(val, + negasi(a));
        }

        while (reg.test(str)) {
            let val = reg.exec(str) + '',
                a = val.charAt(0),
                b = /\d$/.exec(val) + '',
                op = /[\^|v|\=\>|\<\=\>]+/.exec(val) + '';

            str = str.replace(val, '#');

            let res = operate(a, b, op);

            let hashtag = /\(#\)/;
            if (hashtag.test(str)) str = str.replace(hashtag, res);
            else str = str.replace(/#/, res);
        }
        if (str.length > 1) {
            console.error('Invalid argument supplied.');
            return 'invalid';
        }
    }
    return str;
}

const operate = (a, b, op) => {
    switch (op) {
        case '^':
            return + konjungsi(a, b)
            break;

        case 'v':
            return + disjungsi(a, b)
            break;

        case '=>':
            return + implikasi(a, b)
            break;

        case '<=>':
            return + biimplikasi(a, b)
            break;
    }
}

export default app;
