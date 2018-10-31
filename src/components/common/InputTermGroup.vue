<template>
    <div class="inputTermGroup">
        <y-l-input v-for="ylInput in inputTermGroup"
                    :ylInput="ylInput"
                    :key="ylInput.name"
                    @triggerBlur="triggerBlur">
        </y-l-input>
    </div>
</template>
<style scoped>
    .inputTermGroup {
        /*flex: 1;*/
    }
</style>
<script>
    import YLInput from "./YLInput";
    export default {
        name: 'InputTermGroup',
        components: {YLInput},
        props: ['inputTermGroup'],
        methods: {
            triggerBlur (entry) {
                let key = Object.keys(entry)[0];
                let input = this.inputTermGroup.filter(inputTerm => inputTerm.name === key)[0]
                let compareKey = input.blurEqValidate
                let compareInput = this.inputTermGroup.filter(inputTerm => inputTerm.name === compareKey)[0]
                if (compareInput.value) {
                    if (input.value !== compareInput.value) {
                        alert('密码不一致！请重新输入密码！')
                        input.value = ''
                        compareInput.value = ''
                    }
                }
            }
        }
    }
</script>