<template>
    <div id="loginPage" :style="{height: height}">
        <login></login>
    </div>
</template>
<style>
    #loginPage {
        box-sizing: border-box;
        background: url('../assets/image/NewZealand.jpg');
        display: flex;
        align-items: center;
    }
</style>
<script>
    import Login from "./module/login/Login";
    export default {
        name: 'LoginPage',
        components: {Login},
        data () {
            return {
                height: window.screen.availHeight * 0.882 + 'px'
            }
        },
        computed: {
            // height () {
            //     return window.screen.availHeight * 0.882 + 'px';
            // }
        },
        created () {
            this.$http.get(this.api.security.csrf).then((res) => {
                if (res.status === 200) {
                    sessionStorage.setItem('X-CSRF-TOKEN', res.data);
                }
            })
        }
    }
</script>