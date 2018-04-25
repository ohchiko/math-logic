const convert = (from, to) => {
    if (from == 'invalid') return from;
    from = from + '';
    to = to + '';
    from = from.replace(/benar|true|t|b/, '1');
    from = from.replace(/salah|false|f|s/, '0');
    from = +from;
    to = to.split('/');
    return from ? to[0] : to[1];
}

export default convert;
