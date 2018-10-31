<template>
    <div class="bubble" :style="{top: bubbleTop, left: bubbleLeft}">
        <div class="back-triangle"></div>
        <div class="front-triangle"></div>
        <div class="bubble-content" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    div.bubble {
        position: absolute;
    }
    div.back-triangle {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        border-left: .5vw solid transparent;
        border-right: .5vw solid transparent;
        border-bottom: .6vw solid #e8e8e8;
        z-index: 9998;
    }
    div.front-triangle {
        content: '';
        top: 0.1vw;
        left: 0.1vw;
        position: absolute;
        border-left: .4vw solid transparent;
        border-right: .4vw solid transparent;
        border-bottom: .5vw solid white;
        z-index: 9999;
    }
    div.bubble-content {
        top: 0.55vw;
        position: absolute;
        background-color: white;
        border: 1px solid #e8e8e8;
        z-index: 9997;
        box-shadow: 0 .4vw .5vw #979797;
        box-sizing: border-box;
        border-radius: .4vw;
    }
</style>
<script>
    export default {
        name: 'Bubble',
        data () {
            return {
                bubbleTop: undefined,
                bubbleLeft: undefined,
                contentStyle: undefined
            }
        },
        mounted () {
            this.showBubble();
            this.contentOffset();
        },
        methods: {
            showBubble () {
                let targetElement = document.getElementsByClassName('bubble')[0].parentNode;
                let top = targetElement.offsetTop;
                let height = targetElement.clientHeight;
                let bottom = top + height;
                this.bubbleTop = bottom / (window.screen.availWidth / 100)  + 0.1 + 'vw';

                let left = targetElement.offsetLeft;
                let width = targetElement.clientWidth;
                let middle = left + width / 2;
                this.bubbleLeft = middle / (window.screen.availWidth / 100) - 0.375 + 'vw';
            },
            contentOffset () {
                let contentStyle = {};
                let contentElement = document.getElementsByClassName('bubble-content')[0];
                let width = contentElement.clientWidth;
                let bubbleElement = document.getElementsByClassName('bubble')[0];
                let left = bubbleElement.offsetLeft;
                let isOverflowLeft = left - window.screen.availWidth / 100 < 0;
                let isOverflowRight = left + width > window.screen.availWidth - window.screen.availWidth / 100;
                if (isOverflowLeft) {
                    contentStyle.left = '1vw';
                }
                if (isOverflowRight) {
                    contentStyle.right = (- (window.screen.availWidth - left - window.screen.availWidth / 100)) / (window.screen.availWidth / 100) + 0.5 + 'vw';
                }
                this.contentStyle = contentStyle;
            }
        }
    }
</script>