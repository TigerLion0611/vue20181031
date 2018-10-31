<template>
    <div class="tableTerm">
        <table>
            <thead>
                <tr>
                    <th class="test"
                        v-for="h in tableTerm.thead"
                        :key="h.value"
                        :style="{width: tableTermWidth / tableTerm.thead.length + 'px'}">
                        <div style="height: 100%">
                            {{ h.text }}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody v-if="tbody.length">
            <tr v-for="(b, i) in tbody" :key="i">
                <td v-for="(v, k) in b" :key="k" :style="{width: tableTermWidth/tableTerm.thead.length + 'px'}">
                    {{ v }}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="nodata" v-if="!tbody.length" style="width: 100%; height: 100%;display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 10vw;">
                无数据
            </span>
        </div>
    </div>
</template>
<style scoped>
    div.tableTerm {
        width: 100%;
        overflow-x: auto;
    }
    table {
        width: 100%;
        height: 100%;
        border-collapse:collapse;
        overflow-x: auto;
    }
    th,td {
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #e8e8e8;
    }
    th {
        /*padding: 5px 10px;*/
    }
    td {
        /*padding: 3px 10px;*/
    }
    thead {
        display: block;
        height: 10%;
        overflow-y: scroll;
    }
    tbody {
        display: block;
        height: 90%;
        overflow-y: scroll;
    }
    thead tr {
        display: block;
        width: 100%;
        height: 100%;
    }
    tbody tr {
        height: 10%;
        /*height: 36px;*/
    }
    th:first-child, td:first-child {
        border-left: none;
    }
    th:last-child, td:last-child {
        border-right: none;
    }
    div.tableTerm div.nodata {
        box-sizing: border-box;
        border: 1px solid #e8e8e8;
    }
</style>
<script>
    export default {
        name: 'TableTerm',
        props: ['tableTerm', 'list'],
        data () {
            return {
                tableTermWidth: 0
            }
        },
        computed: {
            tbody () {
                return this.list.map(
                    li => {
                        let obj = {};
                        this.tableTerm.thead.forEach(
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
            this.tableTermWidth = document.getElementsByClassName('tableTerm')[0].clientWidth - 1;
        }
    }
</script>