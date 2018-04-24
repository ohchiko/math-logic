
export const negasi = (a) => {
    a = a == true;
    return !a;
}

export const konjungsi = (a, b) => {
    a = a == true;
    b = b == true;
    return a && b;
}

export const disjungsi = (a, b) => {
    a = a == true;
    b = b == true;
    return a || b;
}

export const implikasi = (a, b) => {
    a = a == true;
    b = b == true;
    if (!b && a) return false;
    return true;
}

export const biimplikasi = (a, b) => {
    a = a == true;
    b = b == true;
    if ((a && b) || (!a && !b)) return true;
    return false;
}
