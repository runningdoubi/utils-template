/**
 * @jest-environment jsdom
 */

import {toString} from '../src/index';

// 需要验证console输出时使用
const originalLog = console.error;
let consoleOutput = [];
const mockLog = logData => consoleOutput.push(logData);
beforeEach(() => (console.error = mockLog));
afterEach(() => {
    consoleOutput.length = 0;
    console.error = originalLog;
    jest.clearAllMocks();
});

it('toString', () => {
    expect(toString({})).toBe('[object Object]');
    expect(toString([])).toBe('[object Array]');
    expect(toString('')).toBe('[object String]');
});
