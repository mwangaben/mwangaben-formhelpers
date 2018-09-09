import {mount} from '@vue/test-utils';
import Signup from '../components/Signup.vue'; 
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
import moxios from 'moxios';


describe('Signup', () => {
    let wrapper, b;
    beforeEach(() => {
        moxios.install();

        wrapper = mount(Signup);
        b = new Helpers(wrapper, expect);
    });

     afterEach(() => {
       moxios.uninstall();
     });

    it('submits the data', () => {
        b.type('Benedict', '#name');

        b.click('.btn');

        moxios.stubRequest('/register', {
            status: 400, 

            response: {
                message: ['Error']
            },

            
        })


        // b.see()
    });
});