import Counter from './Counter';

let counter = null;

// jest hooks
// hooks 作用域 在describe内部
beforeAll(() => {
    counter = new Counter();
    console.log('beforeAll hooks');
})

beforeEach(() => {
    counter = new Counter();
    console.log('beforeEach hooks');
})

afterEach(() => {
    console.log('aftereach hooks');
})

afterAll(() => {
    console.log('afterAll hooks');
})

// 可以用describe进行分组
describe('add 相关代码', () => {
    test('test Counter addOne', () => {
        console.log('test Counter addOne');
        counter.addOne();
        expect(counter.number).toBe(1);
    });
    test('test Counter addTwo', () => {
        counter.addTwo();
        expect(counter.number).toBe(2);
    });
});

describe('minus 相关代码', () => {
    test('test Counter minusOne', () => {
        console.log('test Counter minusOne');
        counter.minusOne();
        expect(counter.number).toBe(-1);
    });
    test('test Counter minusOne', () => {
        counter.minusTwo();
        expect(counter.number).toBe(-2);
    });
});