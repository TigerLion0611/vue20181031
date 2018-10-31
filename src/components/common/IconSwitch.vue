<template>
    <div class="icon-switch">
        <img v-show="alt === p.alt" v-for="(p, i) in iconPathList"
             :key="i"
             :src="p.path" @click="changeIcon(i)"/>
    </div>
</template>
<style>
    div.icon-switch {
        width: 100%;
        display: flex;
        flex: 1;
        align-items: center;

    }
    div.icon-switch img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'IconSwitch',
        props: ['iconPathList'],
        data () {
            return {
                alt: this.iconPathList[0].alt
            }
        },
        methods: {
            changeIcon (index) {
                let next = index + 1;
                if (next == this.iconPathList.length) {
                    next = 0;
                }
                this.alt = this.iconPathList[next].alt
                this.$emit('changeMode', this.iconPathList[index].value)
            }
        }
    }
</script>