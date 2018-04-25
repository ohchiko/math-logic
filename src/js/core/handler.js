
import {
    negasi,
    konjungsi,
    disjungsi,
    implikasi,
    biimplikasi
} from './operations';

const app = function () {
    var str = null,
        opReg = /[\^|v|\=\>|\<\=\>]+/;

    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = arguments[i].toLowerCase().replace(/benar|true|t|b/g, '1');
        arguments[i] = arguments[i].toLowerCase().replace(/salah|false|f|s/g, '0');
    }
    if (arguments.length > 1) {
        var a = arguments[0],
            b = arguments[1],
            op = arguments[2];

        a = checkNegate(a);
        b = checkNegate(b);

        if (!a || !b || !op) {
            console.error('Invalid argument(s) supplied.');
            return 'invalid';
        }

        str = operate(a, b, op);
    } else {
        str = arguments[0];

        str = checkNegate(str);

        if (str.length == 3) {
            let a = str.charAt(0),
                b = /\d$/.exec(str) + '',
                op = opReg.exec(str) + '';

            str = operate(a, b, op);
        } else {
            var reg = /\d[\^|v|\=\>|\<\=\>]+\d/;

            str = checkNegate(str);

            while (reg.test(str)) {
                str = checkNegate(str);

                let val = reg.exec(str) + '',
                    a = val.charAt(0),
                    b = /\d$/.exec(val) + '',
                    op = opReg.exec(val) + '';

                str = str.replace(val, '#');

                let res = operate(a, b, op);

                let hashtag = /\(#\)/;
                if (hashtag.test(str)) str = str.replace(hashtag, res);
                else str = str.replace(/#/, res);

                str = checkNegate(str);
            }

            str = checkNegate(str);

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

const checkNegate = (str) => {
    var regex = /~\d/;
    while (regex.test(str)) {
        let val = regex.exec(str) + '',
            a = val.charAt(1);

        str = str.replace(val, negasi(a));
    }
    return str;
}

export default app;
