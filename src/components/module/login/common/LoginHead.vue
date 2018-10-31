<template>
    <div id="LoginHead">
        <div id="loginTip">
            <h2>{{tip}}</h2>
        </div>
        <my-logo id="loginLogo"></my-logo>
    </div>
</template>
<style>
    #LoginHead {
        box-sizing: border-box;
        display: flex;
        padding: 1% 3% 1% 2%;
        justify-content: space-between;
        align-items: center;
        border-bottom:  1px solid #c7cfd6;
    }
    #loginTip {
        flex: 1;
    }
    #loginLogo {
        flex: 1;
    }
</style>
<script>
    import MyLogo from "../../main/MyLogo";
    export default {
        name: 'LoginHead',
        components: {MyLogo},
        props: ['tip']
    }
</script>