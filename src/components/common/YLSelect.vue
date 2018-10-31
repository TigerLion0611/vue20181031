<template>
    <div class="select" :style="{width: getWidest() + 24 + 'px', height: height + 'px'}">
        <div class="input_in">
            <input
                    v-model="options[selected]"
                    @click="turn"
                    type="text"
                    class="fakeSelect"
                    :style="{width: getWidest() + 'px',  height: height - 2 + 'px'}"
            />
            <i
                    :key="1"
                    :class="arrowClass"
                    @click="turn">
            </i>
        </div>
        <div
                v-if="select"
                class="fakeOption"
                :style="{width: getWidest() + 24 + 'px'}">
            <ul>
                <li
                        v-for="(text, key) in options"
                        v-if="key != selected"
                        :key="key"
                        @click="changeSelect(key)">
                    {{text}}
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    div.select {
        position: relative;
        background: white;
        /*border: 1px solid #e8e8e8;*/
    }
    div.input_in {
        display: flex;
        align-items: center;
        border: 1px solid #e8e8e8;
        padding: 0 5px;
    }
    div.input_in>input{
        flex: 1;
        border: none;
        outline: none;
    }
    input.fakeSelect {
        text-align: center;
    }
    /** 下拉项的总体设置 */
    .fakeOption {
        left: 0;
        z-index: 999;
        background: white;
        position: absolute;
        border: 1px solid #e8e8e8;
        padding: 0;
        /*border-top: none;*/
    }

    /** 下拉列表的样式设置 */
    .fakeOption>ul{
        color: #c6c6c6; /** 列表字体颜色 */
        text-align: center; /** 居中 */
        border-top: none; /** 去掉顶部的边框显得更贴近输入框 */
        list-style: none; /** 去掉列表项默认的黑点 */
        /*padding-left: 0; !** 去掉列表项默认的黑点后,padding-left的位置还在，所以手动去掉左边的padding*!*/
        cursor: pointer; /** 鼠标样式 */
        padding: 0;
        margin: 0;
    }
    /** 鼠标滑过的样式 */
    .fakeOption>ul>li:hover{
        background: #e8e8e8;
    }

    .fakeOption>ul>li{
        height: 25px;
    }

    /** 向下的箭头 */
    i.arrow1 {
        z-index:5;
        background-image: url(../../assets/svg/1.svg); /*引入图片图片*/

        background-repeat: no-repeat; /*设置图片不重复*/

        background-position: center; /*图片显示的位置*/

        width: 10px; /*设置图片显示的宽*/

        height: 10px; /*图片显示的高*/

        cursor: pointer;
    }
    /** 向上的箭头的箭头 */
    i.arrow2 {
        z-index:5;
        background-image: url(../../assets/svg/2.svg); /*引入图片图片*/

        background-repeat: no-repeat; /*设置图片不重复*/

        background-position: center; /*图片显示的位置*/

        width: 10px; /*设置图片显示的宽*/

        height: 10px; /*图片显示的高*/

        cursor: pointer;
    }
    /** 向下的箭头转向朝上的动画 */
    i.turnUp{
        animation: .3s linear 0s myrotate;
        -webkit-animation: .3s linear 0s myrotate;/* Safari and Chrome */
        animation-fill-mode:forwards;/*动画播放完毕时停止，不回到初始状态*/
        -webkit-animation-fill-mode:forwards;
    }
    /** 向上的箭头转向朝下的动画 */
    i.turnDown{
        animation: .3s linear 0s myrotate2;
        -webkit-animation: .3s linear 0s myrotate2;/* Safari and Chrome */
        animation-fill-mode:forwards;/*动画播放完毕时停止，不回到初始状态*/
        -webkit-animation-fill-mode:forwards;
    }
    @keyframes myrotate{
        form {transform:rotate(0deg);}
        to    {transform:rotate(-180deg);}
    }
    @-webkit-keyframes myrotate{/* Safari and Chrome */
        form {transform:rotateX(0deg);}
        to    {transform:rotateX(180deg);}
    }
    @keyframes myrotate2{
        form {transform:rotate(0deg);}
        to    {transform:rotate(180deg);}
    }
    @-webkit-keyframes myrotate2{/* Safari and Chrome */
        form {transform:rotate(0deg);}
        to    {transform:rotate(180deg);}
    }
</style>
<script>
    export default {
        name: 'YlSelect',
        props: ['options'],
        data () {
            return {
                height: 0,
                show: true,
                select: false,
                selected: Object.keys(this.options)[0],
                arrowUp: false,
                arrowClass: ['arrow1']
            }
        },
        created: function () {
            this.getWidest()
        },
        mounted: function () {
            this.height = document.getElementsByClassName('select')[0].parentNode.parentNode.clientHeight
        },
        methods: {
            changeSelect: function (key) {
                this.selected = key
                this.turn()
                this.$emit('changeSelect', key)
            },
            getWidest: function () {
                let widthArr = []
                for (let i in this.options) {
                    widthArr.push(this.getWidth(this.options[i]))
                }
                return widthArr.sort().pop()
            },
            getWidth: function (text) {
                let width = 0
                // /.*[\u4e00-\u9fa5]+.*/ 是否包含中文
                let regex = /[\u4e00-\u9fa5]/ // 是否是中文
                if (text) {
                    for (let i in text) {
                        if (regex.test(text[i])) {
                            width += 18
                        } else {
                            width += 8
                        }
                    }
                }
                return width
            },
            turn: function () {
                this.arrowUp = !this.arrowUp
                this.select = !this.select
                if (this.arrowUp) {
                    this.arrowClass = ['arrow1', 'turnUp']
                } else {
                    this.arrowClass = ['arrow2', 'turnDown']
                }
            }
        }
    }
</script>
