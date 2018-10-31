<template>
    <module-with-shadow id="signInModule">
        <div id="SignIn">
            <login-head :tip="'登录'"></login-head>
            <sign-in-form></sign-in-form>
            <sign-in-foot @createAccount="toSignUp"></sign-in-foot>
        </div>
    </module-with-shadow>
</template>
<style>
    #signInModule {
        box-sizing: border-box;
        margin: auto;
        width: 30%;
        background: #ffffff;
        border-radius: 5px;
        opacity: 0.8;
    }
    #SignIn {
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 1fr 3fr 1fr;
    }
</style>
<script>
    import ModuleWithShadow from "../../../common/ModuleWithShadow";
    import LoginHead from "../common/LoginHead";
    import SignInForm from "../sign_in/pieces/SignInForm";
    import SignInFoot from "./pieces/SignInFoot";
    export default {
        name: 'SignIn',
        components: {SignInFoot, SignInForm, LoginHead, ModuleWithShadow},
        methods: {
            toSignUp () {
                this.$emit('toSignUp')
            }
        }
    }
</script>