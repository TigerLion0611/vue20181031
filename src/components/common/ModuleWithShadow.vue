<template>
    <div class="shadowModule">
       <slot></slot>
    </div>
</template>
<style scoped>
    .shadowModule {
        box-shadow: 0 5px 5px #979797;
        box-sizing: border-box;
        border: 1px solid #cfcfcf;
    }
</style>
<script>
    export default {
        name: "ModuleWithShadow"
    }
</script>