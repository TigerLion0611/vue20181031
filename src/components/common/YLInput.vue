<template>
    <label class="inputTerm">
        <span class="label">
            <span v-if="ylInput.required" class="requiredInput">*&nbsp; </span>{{ylInput.label}}：
        </span>
        <input :type="ylInput.type? ylInput.type : 'text'"
               :name="ylInput.name"
               :title="ylInput.label"
               :maxlength="ylInput.maxLength"
               autocomplete="off"
               v-model="ylInput.value"
               @blur="onblur"/>
        <span v-if="ylInput.tip" class="inputTip">{{ylInput.tip}}</span>
    </label>
</template>
<style>
    label.inputTerm {
        display: grid;
        align-items: center;
        grid-template-columns: 2fr 3fr 2fr;
    }
    span.requiredInput {
        color: red
    }
    span.label {
        text-align: right;
    }
    label.inputTerm input {
        display: inline-block;
        padding:.8vw .3vw;
        width:90%;
        border-width: 0 0 1px;
        border-radius: 0;
        border-style: solid;
        border-color: rgba(0,0,0,.12);
        box-shadow: inset 0 -1px 0 rgba(0,0,0,0);
        font-size: 1.2vw;
        background: transparent;
        outline: none;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    }
    span.inputTip {
        flex: 4;
        font-size: 12px;
        color: #303030;
    }
</style>
<script>
    export default {
        name: 'YLInput',
        props: ['ylInput'],
        data () {
            return {
            }
        },
        watch: {
            ylInput: {
                handler (newInput) {
                    if (this.inputValidate.maxLengthValidate(newInput)) {
                        this.$set(newInput, 'value', newInput.value.substring(0, newInput.value.length - 1))
                    }
                    let result = this.inputValidate.regExpReplace(newInput);
                    if (result !== undefined) {
                        this.$set(newInput, 'value', result);
                    }
                },
                deep: true
            }
        },
        methods: {
            onblur () {
                // if (this.inputValidate.minLengthValidate(this.inputTerm)) {
                //
                // }
                if (this.ylInput.value && this.ylInput.blurEqValidate) {
                    let entry = {};
                    entry[this.ylInput.name] = this.ylInput.value;
                    this.$emit('triggerBlur', entry)
                }
            }
        }
    }
</script>