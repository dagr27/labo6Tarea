var convertor = {
    convertir: function parseTo(measure, a, b, tipo) {
        let result;
        if (tipo == 'L') {
            if (a == 'm') {
                if (b == 'cm') {
                    result = measure * 100;
                    b = "cm";
                    return (result + b);
                }
                else if (b == 'km') {
                    result = measure / 1000;
                    b = "km";
                    return (result + b);
                }
                else if (b == 'ft') {
                    result = measure * 3.28;
                    b = "ft";
                    return (result + b);
                }
            }
            else if (a == 'km') {
                if (b == 'm') {
                    result = measure * 1000;
                    b = "m";
                    return (result + b);
                }
            }
            else if (a == 'ft')
                if (b == 'm') {
                    result = measure * 0.3048;
                    b = "m";
                    return (result + b);
                }
        }
        else if (tipo == 'T') {
            if (a == 'c') {
                if (b == 'f') {
                    result = (measure * (9 / 5)) + 32;
                    b = "f";
                    return (result + b);
                }
                else if (b == 'k') {
                    result = measure + 273.15;
                    b = "k";
                    return (result + b);
                }
            }
            else if (a == 'f') {
                if (b == 'c') {
                    result = (measure - 32) * (5 / 9);
                    b = "c";
                    return (result + b);
                }
                else if (b == 'k') {
                    result = (measure + 459.67) * (5 / 9);
                    b = "k";
                    return (result + b);
                }
            }
            else if (a == 'k')
                if (b == 'f') {
                    result = measure * (9 / 5) - 459.67;
                    b = "f";
                    return (result + b);
                }
                else if (b == 'c') {
                    result = measure - 273.15;
                    b = "c";
                    return (result + b);
                }
        }
        return 0;
    }
}