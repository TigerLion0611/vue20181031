<template>
    <div>
        <template v-for="(c, i) in ylFormContent">
            <y-l-input v-if="c.model === 'ylInput'" :key="i" :yl-input="c.configure"></y-l-input>
            <y-l-select v-if="c.model === 'ylSelect'" :key="i" :yl-select="c.configure"></y-l-select>
        </template>
    </div>
</template>
<style>

</style>
<script>
    import YLInput from "./YLInput";
    import YLSelect from "./YLSelect";
    export default {
        name: 'YLFormContent',
        components: {YLSelect, YLInput},
        props: ['ylFormContent']
    }
</script>