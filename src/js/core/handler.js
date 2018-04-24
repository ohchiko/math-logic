
import {
    negasi,
    konjungsi,
    disjungsi,
    implikasi,
    biimplikasi
} from './operations';

const app = function () {
    var str = null,
        neg = /~\d/,
        opReg = /[\^|v|\=\>|\<\=\>]+/;

    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = arguments[i].replace(/benar|true|t|b/, '1');
        arguments[i] = arguments[i].replace(/salah|false|f|s/, '0');
    }
    if (arguments.length > 1) {
        var a = arguments[0],
            b = arguments[1],
            op = arguments[2];

        if (!a || !b || !op) {
            console.error('Invalid argument(s) supplied.');
            return 'invalid';
        }

        str = operate(a, b, op);
    } else {
        arguments[0] = arguments[0].replace(/benar|true|t|b/, '1');
        arguments[0] = arguments[0].replace(/salah|false|f|s/, '0');
        str = arguments[0];
        if (str.length == 3) {
            if (neg.test(str)) {
                let val = neg.exec(str) + '',
                    a = val.charAt(1);

                str = str.replace(val, negasi(a));
            }

            let a = str.charAt(0),
                b = /\d$/.exec(str) + '',
                op = opReg.exec(str) + '';

            str = operate(a, b, op);
        } else {
            var reg = /\d[\^|v|\=\>|\<\=\>]+\d/;

            while (neg.test(str)) {
                let val = neg.exec(str) + '',
                    a = val.charAt(1);

                str = str.replace(val, negasi(a));
            }

            while (reg.test(str)) {
                let val = reg.exec(str) + '',
                    a = val.charAt(0),
                    b = /\d$/.exec(val) + '',
                    op = opReg.exec(val) + '';

                str = str.replace(val, '#');

                let res = operate(a, b, op);

                let hashtag = /\(#\)/;
                if (hashtag.test(str)) str = str.replace(hashtag, res);
                else str = str.replace(/#/, res);
            }
            if (str.length > 1) {
                console.error('Invalid argument(s) supplied.');
                return 'invalid';
            }
        }
    }
    return str;
}

const operate = (a, b, op) => {
    switch (op) {
        case '^':
            return konjungsi(a, b)
            break;

        case 'v':
            return disjungsi(a, b)
            break;

        case '=>':
            return implikasi(a, b)
            break;

        case '<=>':
            return biimplikasi(a, b)
            break;
    }
}

export default app;
