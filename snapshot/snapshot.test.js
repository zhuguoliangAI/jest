import { getConfig } from './snapshot';


test('test getConfig', () => {
    // 这样做不好 每当配置文件发生变化时 需要修改测试用例的代码
    // expect(getConfig()).toEqual({
    //     server: 'https://localhost',
    //     port: 80,
    // })

    //会根据配置返回值 生成快照 每当配置文件变化时 可检测到
    // 遇到每次都变化的 可以进行特殊处理 类似 time
    expect(getConfig()).toMatchSnapshot({
        time: expect.any(Date)
    });
})