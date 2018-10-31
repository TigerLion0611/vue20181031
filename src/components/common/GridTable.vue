<template>
    <div class="grid-table">
        <div class="table-head">
            <div class="table-head-tr">
                <div class="table-head-tr-td"
                     v-for="h in gridTable.thead"
                     :key="h.value">
                    <span>{{ h.text }}</span>
                </div>
            </div>
        </div>
        <div v-if="tbody.length"
             class="table-body">
            <div class="table-body-tr"
                 v-for="(b, i) in tbody"
                 :key="i"
                 :style="{height: bodyTrHeight}">
                <div class="table-body-tr-td"
                     v-for="(v, k) in b"
                     :key="k">
                    <span>{{ v }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    div.grid-table {
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 1fr 10fr;
    }
    div.table-head-tr {
        box-sizing: border-box;
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 1fr;
        background-color: #7a7a7a;
        color: white;
        font-weight: bold;
    }
    div.table-head-tr-td {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.08vw solid #e8e8e8;
        border-right: none;
    }
    div.table-head-tr-td:first-child {
        border-left: none;
    }
    div.table-body-tr {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: #2b2b2b;
    }
    div.table-body-tr:nth-child(2n-1) {
        background-color: whitesmoke;
    }
    div.table-body-tr:nth-child(2n) {
        background-color: #bebebe;
    }
    div.table-body-tr:hover {
        background-color: #00EEEE;
        color: white;
        font-weight: bold;
    }
    div.table-body-tr-td {
        display: flex;
        box-sizing: border-box;
        height: 100%;
        align-items: center;
        border: 0.08vw solid #e8e8e8;
        padding: 0 1vw;
        border-top: none;
    }
    div.table-body-tr-td:first-child {
        border-left: none;
    }
    div.table-body-tr-td {
        border-right: none;
    }
</style>
<script>
    export default {
        name: 'GridTable',
        props: ['gridTable', 'list', 'bodyTrHeight'],
        computed: {
            tbody () {
                return this.list.map(
                    li => {
                        let obj = {};
                        this.gridTable.thead.forEach(
                            term => {
                                obj[term.value] = li[term.value]
                            }
                        );
                        return obj;
                    }
                )
            }
        },
        mounted () {
            // this.bodyTrHeight = document.getElementsByClassName('table-body')[0].clientHeight / this.rowSize + 'px';
        }
    }
</script>