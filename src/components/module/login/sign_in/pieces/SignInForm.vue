<template>
    <form id="signInForm">
        <div id="signInCt">
            <input-term-group  :input-term-group="inputTermGroup"></input-term-group>
        </div>
        <div id="signInOpt" style="text-align: center">
            <ctm-button :ctmBtn="ctmBtn" @click.native="signIn"></ctm-button>
        </div>
    </form>
</template>
<style>
    #signInForm {
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 7fr 3fr;
    }
    #signInCt {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 40px;
    }
    #signInOpt {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    import InputTermGroup from "../../../../common/InputTermGroup";
    import CtmButton from "../../../../common/CtmButton";
    export default {
        name: 'SignInForm',
        components: {CtmButton, InputTermGroup},
        data () {
            return {
                inputTermGroup: [
                    {
                        label: '用户名',
                        name: 'username',
                        required: true
                    },
                    {
                        label: '密码',
                        name: 'password',
                        type: 'password',
                        required: true
                    }
                ],
                ctmBtn: {
                    text: '登 录'
                }
            }
        },
        methods: {
            signIn () {
                if (this.inputValidate.requiredValidate(this.inputTermGroup)) {
                    let map = {};
                    this.inputTermGroup.forEach(
                        inputTerm => map[inputTerm.name] = inputTerm.value
                    );
                    this.$http.get(this.api.user.signIn, {params: map}).then(
                        res => {
                            if (res.status === 200) {
                                sessionStorage.setItem('role', res.headers['role']);
                                sessionStorage.setItem('userId', res.headers['userid']);
                                sessionStorage.setItem('X-CSRF-TOKEN', res.headers['x-csrf-token']);
                                this.$router.push('/')
                            }
                        }
                    )
                }
            }
        }
    }
</script>