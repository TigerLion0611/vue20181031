<template>
    <p id="title">
        <span>YLBT</span>
    </p>
</template>
<style scoped>
    p {
        display: flex;
        align-items: center;
        height: 100%;
        width: 5vw;
        position: relative;
        font-family: Segoe, Verdana, sans-serif;
        font-size: 2vw;
        font-weight: bold;
        text-shadow: .1vw 0 .2vw #006;
        padding-left: .5vw;
    }
    p::after {
        position: absolute;
        content: "YLBT";
        right: 0;
        color: #ffff00;
        z-index: 1;
        text-shadow: .1vw .1vw .05vh #600;
    }
    p span {
        position: absolute;
        z-index: 2;
        right: 0;
        color: #d12;
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgb(53, 53, 53)), to(rgba(98, 255, 87, 0)));
    }
</style>
<script>
    export default {
        name: 'MyLogo'
    }
</script>