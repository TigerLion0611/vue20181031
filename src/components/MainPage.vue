<template>
    <div id="main">
        <module-with-shadow id="home">
            <MyHead id="head"></MyHead>
            <my-menu id="menu"></my-menu>
            <my-content id="content">
                <router-view></router-view>
            </my-content>
        </module-with-shadow>
    </div>
</template>
<style>
    #main {
        box-sizing: border-box;
        padding: 1vw;
        width: 100vw;
        height: 100vh;
        min-width: 1024px;
        min-height: 640px;
    }
    #head {
        grid-area: head;
    }
    #menu {
        grid-area: menu;
    }
    #content {
        grid-area: content;
    }
    #home {
        display: grid;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: .3vw;
        background-color: white;
        grid-template-columns: 2fr 8fr;
        grid-template-rows: 1fr 11fr;
        grid-template-areas: "head head"
        "menu content";
    }
</style>
<script>
    import ModuleWithShadow from "./common/ModuleWithShadow";
    import MyMenu from "./module/main/MyMenu";
    import MyContent from "./module/main/MyContent";
    import MyHead from "./module/main/MyHead";
    export default {
        name: 'MainPage',
        components: {MyHead, MyContent, MyMenu, ModuleWithShadow},
        created () {
        },
        computed: {
            height () {
                let nvw = window.screen.availWidth / 100;
                let xvh = window.innerHeight / nvw;
                return xvh + 'vw'
            }
        },
        mounted () {
        },
        methods: {
        }
    }
</script>