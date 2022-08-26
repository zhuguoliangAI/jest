import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'


describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
      // test
    })
    expect(wrapper.text()).toMatch(msg);
    
    // const root = document.createElement('div');
    // root.className = 'root';
    // document.body.appendChild(root);
    // new Vue({
    //   render: h => h(HelloWorld, {
    //     props: {
    //       msg: 'zgl'
    //     }
    //   })
    // }).$mount('.root');
    console.log(document.body.innerHTML);
  })
})
