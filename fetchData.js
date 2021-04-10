import axios from 'axios';

export const fetchDate = (fn) => {
    axios.get('http://www.dell-lee.com/react/api/demo1.json')
    .then((res) => {
        fn(res.data);
    })
}