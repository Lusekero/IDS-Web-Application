import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
    ...required,
    message: 'This Field is required.'
});

extend('email', {
    ...email,
    message: 'This Field must be a valid email.'
});

extend('min', {
    ...min,
    message: 'This Field must contain at least {length} characters.'
});

extend('max', {
    ...max,
    message: 'This Field must not contain more than {length} characters.'
});

extend('check_password', {
    validate: value => {
        return (/[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[!@#$%^&*()_\-+=`~<>?\\/;,.'"\][{}]/.test(value));
    }
});

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
});