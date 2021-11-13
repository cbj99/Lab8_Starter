// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber() test #1 (result should be true)', () => {
    expect(functions.isPhoneNumber('626-278-0824')).toBe(true);
});
test('isPhoneNumber() test #2 (result should be true)', () => {
    expect(functions.isPhoneNumber('472-798-1342')).toBe(true);
});
test('isPhoneNumber() test #3 (result should be false)', () => {
    expect(functions.isPhoneNumber('1353512535313')).toBe(false);
});
test('isPhoneNumber() test #4 (result should be false)', () => {
    expect(functions.isPhoneNumber('6262780824')).toBe(false);
});


test('isEmail() test #1 (result should be true)', () => {
    expect(functions.isEmail('bac001@ucsd.edu')).toBe(true);
});
test('isEmail() test #2 (result should be true)', () => {
    expect(functions.isEmail('cbjun@qq.com')).toBe(true);
});
test('isEmail() test #3 (result should be false)', () => {
    expect(functions.isEmail('bac001@ucsd')).toBe(false);
});
test('isEmail() test #4 (result should be false)', () => {
    expect(functions.isEmail('bac001.edu@ucsd')).toBe(false);
});


test('isStrongPassword() test #1 (result should be true)', () => {
    expect(functions.isStrongPassword('edgnb')).toBe(true);
});
test('isStrongPassword() test #2 (result should be true)', () => {
    expect(functions.isStrongPassword('woaisst0708')).toBe(true);
});
test('isStrongPassword() test #3 (result should be false)', () => {
    expect(functions.isStrongPassword('12345678')).toBe(false);
});
test('isStrongPassword() test #4 (result should be false)', () => {
    expect(functions.isStrongPassword('vlc7823#%$%$GJGX')).toBe(false);
});


test('isDate() test #1 (result should be true)', () => {
    expect(functions.isDate('11/12/1999')).toBe(true);
});
test('isDate() test #2 (result should be true)', () => {
    expect(functions.isDate('7/8/2000')).toBe(true);
});
test('isDate() test #3 (result should be false)', () => {
    expect(functions.isDate('6/9/23451151')).toBe(false);
});
test('isDate() test #4 (result should be false)', () => {
    expect(functions.isDate('110/105/3')).toBe(false);
});


test('isHexColor() test #1 (result should be true)', () => {
    expect(functions.isHexColor('#882244')).toBe(true);
});
test('isHexColor() test #2 (result should be true)', () => {
    expect(functions.isHexColor('#4a412a')).toBe(true);
});
test('isHexColor() test #3 (result should be false)', () => {
    expect(functions.isHexColor('#84864868')).toBe(false);
});
test('isHexColor() test #4 (result should be false)', () => {
    expect(functions.isHexColor('#lasfufuail')).toBe(false);
});