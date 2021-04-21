import { runCallBack } from './demo';

test('test runCallBack', () => {
    // mock 函数 捕获函数的调用
    const func = jest.fn();
    // 修改函数返回值
    func.mockReturnValueOnce('hello')
    runCallBack(func);
    expect(func).toBeCalled();
    // mock 包含调用信息
    // calls 调用的参数
    // results 函数返回值
    console.log(func.mock);
    // 改变函数内部实现
    // jest.mock('axios')
    // mockResolvedValue 可以模拟http请求等异步调用的返回值
})