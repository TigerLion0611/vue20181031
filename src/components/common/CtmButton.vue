<template>
    <div class="ctmBtn" :style="style">
        <i v-if="ctmBtn.icon"></i>
        <span>
            {{ ctmBtn.text }}
        </span>
    </div>
</template>
<style scoped>
    .ctmBtn {
        display: flex;
        box-sizing: border-box;
        border: 1px solid #e8e8e8;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: .5vw 1vw;
    }

    .ctmBtn i {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        content: url("../../assets/svg/add.svg");
        z-index: 2;
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'CtmButton',
        props: ['ctmBtn'],
        computed: {
            style () {
                return {
                    cursor: this.ctmBtn.disabled? 'not-allowed' : 'pointer'
                }
            }
        }
    }
</script>