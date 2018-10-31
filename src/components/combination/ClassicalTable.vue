<template>
    <div class="classical-table">
        <div style="display: flex; justify-content: flex-end; align-items: center">
            <search-input :search-input="searchInput"></search-input>
            <ctm-button :ctm-btn="ctmBtn"
                        :style="{
                        backgroundColor: 'white',
                        width: '8vw',
                    }"></ctm-button>
        </div>
        <table-term :tableTerm="tableTerm"></table-term>
        <pagination :pagination="pagination"></pagination>
    </div>
</template>
<style>
    div.classical-table {
        box-sizing: border-box;
        height: 100%;
        padding: 1%;
        display: grid;
        grid-template-rows: 1fr 8fr 1fr;
        color: #666666;
    }
</style>
<script>
    import TableTerm from "../common/TableTerm";
    import SearchInput from "../common/SearchInput";
    import CtmButton from "../common/CtmButton";
    import Pagination from "../common/Pagination";
    export default {
        name: "ClassicalTable",
        components: {Pagination, CtmButton, SearchInput, TableTerm},
        data () {
            return {
                ctmBtn: {
                    text: '创建项目',
                    icon: 'add'
                },
                searchInput: {
                    placeholder: '项目名称',
                    name: 'name'
                },
                tableTerm: {
                    thead: [
                        {
                            value: 'name',
                            text: '项目名称'
                        },
                        {
                            value: 'dcp',
                            text: '项目描述'
                        }
                    ],
                    tbody: [
                        {
                            name: '测试1',
                            dcp: '测试项目1'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        },
                        {
                            name: '测试2',
                            dcp: '测试项目2'
                        }
                    ]
                },
                pagination: {
                    pageNum: 1,
                    pageSize: 5,
                    total: 120,
                    pageNumSize: 5
                }
            }
        }
    }
</script>