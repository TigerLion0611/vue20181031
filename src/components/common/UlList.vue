<template>
    <ul class="ul-list">
        <li v-for="(li, index) in ulList" :key="index">
            <div @mouseenter="li.enter = true"
                 @mouseleave="li.enter = false"
                 @click="li.trigger">
                <img v-show="!li.enter" :src="li.icon.defaultPath"/>
                <img v-show="li.enter" :src="li.icon.lightPath"/>
                <span>
                    {{ li.text }}
                </span>
            </div>
        </li>
    </ul>
</template>
<style scoped>
    ul.ul-list {
        box-sizing: border-box;
    }
    ul.ul-list li{
        padding: 0.2vw 0.8vw;
        list-style-type: none;
        white-space: nowrap;
        cursor: pointer;
        border-radius: .2vw;
    }
    ul.ul-list li img{
        width: 1vw;
        height: 1vw;
        margin-right: .8vw;
    }
    ul.ul-list li div{
        display: flex;
        align-items: center;
    }
    ul.ul-list li:hover{
        background-color: #00EEEE;
        color: white;
    }
</style>
<script>
    export default {
        name: 'UlList',
        props: ['ulList']
    }
</script>