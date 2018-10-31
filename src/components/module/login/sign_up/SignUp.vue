<template>
    <module-with-shadow id="signUpModule">
        <div id="signUp">
            <login-head :tip="'注册'"></login-head>
            <sign-up-form @signUpSuccess="signUpSuccess"></sign-up-form>
        </div>
    </module-with-shadow>
</template>
<style>
    #signUpModule {
        box-sizing: border-box;
        margin: auto;
        width: 50%;
        background: #ffffff;
        border-radius: 5px;
        opacity: 0.8;
    }
    #signUp {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 7fr;
    }
</style>
<script>
    import ModuleWithShadow from "../../../common/ModuleWithShadow";
    import LoginHead from "./pieces/SignUpHead";
    import SignUpForm from "./pieces/SignUpForm";
    export default {
        name: 'SignUp',
        components: {SignUpForm, LoginHead, ModuleWithShadow},
        methods: {
            signUpSuccess () {
                this.$emit ('signUpSuccess')
            }
        }
    }
</script>