import { fetchDate } from './fetchData';

test('fetch date test', (done) => {
    fetchDate((data) => {
        expect(data).toEqual({
            success: true
        });
        done();
    })
})