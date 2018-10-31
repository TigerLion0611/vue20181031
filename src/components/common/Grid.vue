<template>
    <div class="grid">
        <div v-for="(r, i1) in rows" :key="i1">
            <template v-for="(c, i2) in r">
                <module-with-shadow v-if="c" :key="i2" class="gridBox" :style="grid.boxStyle" @click.native="clickEvent(c)">
                    {{ c.name }}
                </module-with-shadow>
                <div v-else :key="i2"></div>
            </template>
        </div>
    </div>
</template>
<style>
    div.grid {
        box-sizing: border-box;
        display: grid;
        height: 100%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-row-gap: 5%;
    }
    div.grid>div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 1%;
    }
    div.gridBox {
        padding: .4vw;
        border-radius: .4vw;
    }
</style>
<script>
    import ModuleWithShadow from "./ModuleWithShadow";
    export default {
        name: 'Grid',
        components: {ModuleWithShadow},
        props: ['grid', 'list', 'clickEvent'],
        computed: {
            rows () {
                let rows = [];
                let start = 0;
                for (let r = 0; r < this.grid.rowSize; r++) {
                    let arr = [];
                    let end = start + this.grid.columnSize;
                    for (let c = start; c < end; c++) {
                        arr.push(this.list[c]);
                    }
                    start = end;
                    rows.push(arr);
                }
                return rows;
            }
        },
        methods: {
        }
    }
</script>