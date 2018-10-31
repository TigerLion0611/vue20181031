<template>
    <div id="head">
        <my-logo></my-logo>
        <div style="display: flex; justify-content: space-between; align-items: center">
            <setting></setting>
            <head-portrait></head-portrait>
        </div>
    </div>
</template>
<style>
    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EBEBEB;
        height: 100%;
        width: 100%;
        border-top-left-radius: .3vw;
        border-top-right-radius: .3vw;
        padding: .3% 1.5%;
        box-sizing: border-box;
    }

</style>
<script>
    import ModuleWithShadow from "../../common/ModuleWithShadow";
    import MyLogo from "./MyLogo";
    import HeadPortrait from "../../common/HeadPortrait";
    import Setting from "../../common/Setting";
    import Bubble from "../../common/Bubble";
    export default {
        name: 'MyHead',
        components: {Bubble, Setting, HeadPortrait, MyLogo, ModuleWithShadow}
    }
</script>