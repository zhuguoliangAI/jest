const { TestScheduler } = require('jest');
import { add, minus, multi } from './math';

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
})

test('测试乘法 3 * 7', () => {
    expect(multi(3, 7)).toBe(21);
})

test('测试减法 7 - 3', () => {
    expect(minus(7, 3)).toBe(4);
})


