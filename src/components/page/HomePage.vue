<template>
    <module-with-shadow id="home" :style="style">
        <MyHead id="head"></MyHead>
        <my-menu id="menu"></my-menu>
        <my-content id="content"></my-content>
    </module-with-shadow>
</template>
<style>
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
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        background-color: white;
        grid-template-columns: 2fr 7fr;
        grid-template-rows: 1fr 9fr;
        grid-template-areas: "head head"
                             "menu content";
    }
</style>
<script>
    import ModuleWithShadow from "../common/ModuleWithShadow";
    import MyMenu from "../module/main/MyMenu";
    import MyContent from "../module/main/MyContent";
    import MyHead from "../module/main/MyHead";
    export default {
        name: 'Background',
        components: {MyHead, MyContent, MyMenu, ModuleWithShadow},
        data () {
            return {
                style: {
                    height: window.innerHeight * 0.96 + 'px'
                }
            }
        }
    }
</script>