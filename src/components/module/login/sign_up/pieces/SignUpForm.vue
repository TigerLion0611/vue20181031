<template>
    <form id="signUpForm">
        <div id="signUpCt">
            <input-term-group  :input-term-group="inputTermGroup"></input-term-group>
        </div>
        <div id="signUpOpt">
            <ctm-button :disabled="!canSignUp" :ctmBtn="ctmBtn" @click.native="signUp"></ctm-button>
        </div>
    </form>
</template>
<style>
    #signUpForm {
        box-sizing: border-box;
        border-top: 1px solid #c7cfd6;
        display: grid;
        grid-template-rows: 7fr 3fr;
    }
    #signUpCt {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 40px;
    }
    #signUpOpt {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    import InputTermGroup from "../../../../common/InputTermGroup";
    import CtmButton from "../../../../common/CtmButton";
    export default {
        name: 'SignUpForm',
        components: {CtmButton, InputTermGroup},
        data () {
            return {
                inputTermGroup: [
                    {
                        label: '用户名',
                        name: 'username',
                        required: true,
                        tip: '6~20个字符（可包含数字字母下划线）',
                        minLength: 6,
                        maxLength: 20,
                        typeRegExp: /[a-zA-Z0-9-_]/g
                    },
                    {
                        label: '密码',
                        name: 'password',
                        type: 'password',
                        required: true,
                        tip: '6~16个字符',
                        blurEqValidate: 'repeatPassword',
                        minLength: 6,
                        maxLength: 16,
                        typeRegExp: /[a-zA-Z0-9!@#$%^&*-_<>?{}]/g
                    },
                    {
                        label: '重复密码',
                        name: 'repeatPassword',
                        type: 'password',
                        required: true,
                        tip: '6~16个字符',
                        blurEqValidate: 'password',
                        minLength: 6,
                        maxLength: 16,
                        typeRegExp: /[a-zA-Z0-9!@#$%^&*-_<>?{}]/g
                    },
                    {
                        label: '昵称',
                        name: 'nikename',
                        required: true,
                        tip: '3~18个字符',
                        minLength: 3,
                        maxLength: 18
                    },
                    {
                        label: '手机',
                        name: 'tel',
                        required: true,
                        tip: '11位标准手机号码',
                        minLength: 11,
                        maxLength: 11
                    }
                ],
                ctmBtn: {
                    text: '注 册'
                }
            }
        },
        computed: {
            canSignUp () {
                return this.inputValidate.requiredValidate(this.inputTermGroup)
                    && this.inputValidate.maxLengthValidateForGroup(this.inputTermGroup)
                    && this.inputValidate.minLengthValidateForGroup(this.inputTermGroup);
            }
        },
        methods: {
            signUp () {
                if (!this.inputValidate.requiredValidate(this.inputTermGroup)) {
                    let inputTerms = this.inputValidate.invalidRequiredGroup(this.inputTermGroup);
                    window.console.log(inputTerms);
                    return alert(`${inputTerms[0].label}必须填写!`)
                }
                let map = {};
                this.inputTermGroup.forEach(inputTerm => map[inputTerm.name] = inputTerm.value);
                delete map['repeatPassword'];
                this.$http.post(this.api.user.signUp, map).then(res => {
                    if (res.status === 200) {
                        this.$emit ('signUpSuccess');
                        alert('注册成功！');
                    }
                })
            }
        }
    }
</script>