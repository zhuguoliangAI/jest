import { timer } from './timer';

// test('test timer without fakeTime', (done) => {
//     timer(() => {
//         expect(1).toBe(1);
//         done();
//     })
// });


jest.useFakeTimers();
test('test timer with fakeTime', () => {
    const fn = jest.fn();
    timer(fn);
    // jest.runOnlyPendingTimers() 
    // jest.advanceTimersByTime()
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
});