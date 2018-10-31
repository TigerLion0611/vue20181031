<template>
    <div class="yuliang-dialog">
        <div class="dialog-mask" @click="closeDialog">
        </div>
        <div class="dialog">
            <div class="dialog-head">
                <slot name="title"></slot>
                <img class="close" src="../../assets/svg/close.svg" @click="closeDialog"/>
            </div>
            <div class="dialog-body">
                <slot name="body"></slot>
            </div>
            <div class="dialog-foot">
                <ctm-button :ctm-btn="ctmBtn1" :style="{width: '100px'}" @click.native="confirm"></ctm-button>
                <ctm-button :ctm-btn="ctmBtn2" :style="{width: '100px'}" @click.native="closeDialog"></ctm-button>
            </div>
        </div>
    </div>
</template>
<style>
    div.yuliang-dialog {
        box-sizing: border-box;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.dialog-mask {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: .1;
        z-index: 998;
    }
    div.dialog {
        border: 1px solid darkgray;
        border-radius: .2vw;
        box-shadow: 0 .2vw .2vw #4f4f4f;
        background-color: white;
        display: grid;
        z-index: 999;
    }
    div.dialog-head {
        box-sizing: border-box;
        padding: .2vw .4vw;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5vw;
    }
    img.close {
        position: absolute;
        right: .4vw;
        width: 1.7vw;
        height: 1.7vw;
        cursor: pointer;
    }
    div.dialog-body {
        padding: 2vw 1vw 3vw;
        box-sizing: border-box;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
    }
    div.dialog-foot {
        height: 3vw;
        box-sizing: border-box;
        padding: .2vw 1vw;
        display: flex;
        justify-content: center;
    }
    div.dialog-foot div {
        margin: .2vw 1vw;
    }
</style>
<script>
    import ModuleWithShadow from "./ModuleWithShadow";
    import CtmButton from "./CtmButton";
    export default {
        name: 'YuliangDialog',
        components: {CtmButton, ModuleWithShadow},
        props: ['dialog'],
        data () {
            return {
                show: false,
                ctmBtn1: {
                    text: '确认'
                },
                ctmBtn2: {
                    text: '取消'
                }
            }
        },
        created () {
            this.show = true
        },
        methods: {
            closeDialog () {
                this.$emit('close')
            },
            confirm () {
                this.$emit('confirm')
            }
        }
    }
</script>