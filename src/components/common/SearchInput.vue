<template>
    <div class="searchInput">
        <input class="loupe"
               v-model="searchInput.value"
               :type="searchInput.type ? searchInput.type : 'text'"
               :placeholder="searchInput.placeholder"
               :name="searchInput.name"/>
        <i class="clear" @click="clear"></i>
    </div>
</template>
<style>
    div.searchInput {
        width: 10vw;
        position: relative;
        display: flex;
        align-items: center;
    }
    input.loupe {
        width: 100%;
        height: 2vw;
        border-radius: .5vw;
        border: 1px solid #e8e8e8;
        padding: .2vw .5vw;
        font-size: 1.2vw;
        /*text-align: center;*/
    }
    input.loupe::-webkit-input-placeholder {
        background-repeat: no-repeat;
        background-image: url("../../assets/svg/loupe.svg");
        background-position: 1%;
        text-align: center;
        font-size: 1vw;
    }
    .clear {
        position: absolute;
        width: 1vw;
        height: 1vw;
        right: .3vw;
        content: url("../../assets/svg/cancel.svg");
        z-index: 2;
        cursor: pointer;
    }
</style>
<script>
    export default {
        name: 'searchInput',
        props: ['searchInput'],
        methods: {
            clear () {
                this.$set(this.searchInput, 'value', '')
            }
        }
    }
</script>