<template>
    <div id="headPortrait" @mouseenter="bubble = true" @mouseleave="bubble = false">
        <img src=""/>
        <bubble v-if="bubble">
            <ul-list :ul-list="ulList"></ul-list>
        </bubble>
    </div>
</template>
<style>
    #headPortrait {
        box-sizing: border-box;
        width: 2.3vw;
        height: 2.3vw;
        border: 1px solid #e8e8e8;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
<script>
    import Bubble from "./Bubble";
    import UlList from "./UlList";
    export default {
        name: 'HeadPortrait',
        components: {UlList, Bubble},
        data () {
            return {
                bubble: false,
                bubbleTop: undefined,
                bubbleLeft: undefined,
                ulList: [
                    {
                        enter: false,
                        icon: {
                            defaultPath: require('../../assets/svg/default/logout.svg'),
                            lightPath: require('../../assets/svg/light/logout.svg')
                        },
                        text: '登出',
                        trigger: this.logout
                    }
                ]
            }
        },
        methods: {
            logout () {
                this.$http.delete(this.api.user.logout).then(
                    res => {
                        if (res.status === 200) {
                            sessionStorage.removeItem('role');
                            sessionStorage.removeItem('userId');
                            sessionStorage.removeItem('X-CSRF-TOKEN');
                            this.$router.push('/login');
                        }
                    }
                );

            }
        }
    }
</script>
