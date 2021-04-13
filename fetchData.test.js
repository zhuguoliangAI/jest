import { fetchDate, fetchData, fetchData404 } from './fetchData';


// 回掉类型异步函数的测试 
test('fetch date callback test', (done) => {
    fetchDate((data) => {
        expect(data).toEqual({
            success: true
        });
        done();
    })
})

// promise 异步函数的测试
test('fetch data promise test', () => {
    return fetchData().then(res => {
        expect(res.data).toEqual({
            success: true
        })
    })
})

test('fetch data 404', () => {
    // 下面的expect至少执行一次 否则当接口成功的时候expect不执行 测试用例已经是成功
    expect.assertions(1);
    return fetchData404().catch(error => {
        expect(error.toString().indexOf('404') > -1).toBe(true)
    })
})

// 推荐的做法 return 可以替换为 await
test('fetch data promise resolve', () => {
    return expect(fetchData()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test('fetch data promise reject', () => {
    return expect(fetchData404()).rejects.toThrow();
})