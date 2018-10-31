<template>
    <div id="signUpHead">
        <div id="loginTip">
            <h2>注册</h2>
        </div>
        <my-logo></my-logo>
    </div>
</template>
<style>
    #signUpHead {
        box-sizing: border-box;
        display: flex;
        padding: 1% 3% 1% 2%;
        justify-content: space-between;
        align-items: center;
    }
    #loginTip {
        flex: 1;
    }
    #loginLogo {
        height: 100%;
        flex: 1;
    }
</style>
<script>
    import MyLogo from "../../../main/MyLogo";
    export default {
        name: 'SignInHead',
        components: {MyLogo}
    }
</script>