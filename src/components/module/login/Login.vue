<template>
    <sign-in v-if="!signUpMode" @toSignUp="signUpMode = true"></sign-in>
    <sign-up v-else @signUpSuccess="signUpMode = false"></sign-up>
</template>
<style>
</style>
<script>
    import SignIn from "./sign_in/SignIn";
    import ModuleWithShadow from "../../common/ModuleWithShadow";
    import SignUp from "./sign_up/SignUp";
    export default {
        name: 'Login',
        components: {ModuleWithShadow, SignIn, SignUp},
        data () {
            return {
                signUpMode: false
            }
        }
    }
</script>