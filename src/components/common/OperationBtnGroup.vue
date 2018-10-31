<template>
    <div style="width: 100%" :style="operationBtnGroup.style">
        <ctm-button v-for="operationBtn in operationBtnGroup.items"
                    :key="operationBtn.label"
                    :ctm-btn="operationBtn" @click.native="operationBtn.trigger"></ctm-button>
    </div>
</template>
<script>
    import CtmButton from "./CtmButton";
    export default {
        name: 'OperationBtnGroup',
        components: {CtmButton},
        props: ['operationBtnGroup']
    }
</script>