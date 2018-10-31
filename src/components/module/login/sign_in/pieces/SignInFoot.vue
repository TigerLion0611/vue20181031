<template>
    <div id="signInFoot">
        <h3>
            <span @click="forgotPassword">忘记密码？</span>
            &nbsp;|&nbsp;
            <span @click="createAccount">创建账户</span>
        </h3>
    </div>
</template>
<style>
    #signInFoot {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2%;
        border-top: 1px solid #c7cfd6;
    }
    #signInFoot span {
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'SignInFoot',
        methods: {
            forgotPassword () {
                alert('暂无此功能！')
            },
            createAccount () {
                this.$emit('createAccount')
            }
        }
    }
</script>