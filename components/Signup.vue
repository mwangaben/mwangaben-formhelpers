<template>
    <div class="container">
        <form action="">
            <input type="text" name="name" id="name">
            <button @click="postData" class="btn">Submit</button>
        </form>
    </div>
</template>

<script>

import Form from '../index.js';
export default {
    data() {
        return {
            form: new Form({
               name: ''
            })
            
        }
    }, 
    methods: {
        postData() {
            this.form.post('/register').
            then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

