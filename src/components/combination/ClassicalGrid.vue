<template>
    <div class="classical-grid">
        <yuliang-dialog v-if="classicalGrid.dialog.show"
                        @close="classicalGrid.dialog.show = false"
                        @confirm="confirm">
            <template slot="title">
                <h3>{{classicalGrid.dialog.title[classicalGrid.dialog.mode]}}</h3>
            </template>
            <template slot="body">
                <y-l-form-content :yl-form-content="classicalGrid.dialog.content"></y-l-form-content>
            </template>
        </yuliang-dialog>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <search-input-group :search-input-group="classicalGrid.searchInputGroup"></search-input-group>
            <div style="display: flex; align-items: center; justify-content: space-between">
                <operation-btn-group :operation-btn-group="classicalGrid.operationBtnGroup"></operation-btn-group>
                <icon-switch
                        v-if="list.length"
                        :icon-path-list="classicalGrid.iconPathList"
                        :style="{marginLeft: '1vw'}"
                        @changeMode="changeMode">
                </icon-switch>
            </div>
        </div>
        <template v-if="list.length">
            <grid v-if="classicalGrid.mode === 'grid'"
                  :grid="classicalGrid.grid"
                  :list="list"
                  :clickEvent="classicalGrid.itemClick"></grid>
            <grid-table v-if="classicalGrid.mode === 'table'"
                        :grid-table="classicalGrid.tableTerm"
                        :list="list"
                        :bodyTrHeight="100/classicalGrid.pagination.pageSize + '%'"></grid-table>
            <!--<table-term v-if="this.classicalGrid.mode === 'table'"-->
                        <!--:tableTerm="classicalGrid.tableTerm"-->
                        <!--:list="list"></table-term>-->
        </template>
        <pagination v-if="list.length"
                    :pagination="classicalGrid.pagination"
                    :total="total"
                    @pageNumChange="changePage"></pagination>
    </div>
</template>
<style>
    div.classical-grid {
        box-sizing: border-box;
        display: grid;
        position: relative;
        height: 100%;
        padding: 0 1vw;
        grid-template-rows: 1fr 8fr 1fr;
    }
</style>
<script>
    import Grid from "../common/Grid";
    import Pagination from "../common/Pagination";
    import SearchInputGroup from "../common/SearchInputGroup";
    import OperationBtnGroup from "../common/OperationBtnGroup";
    import IconSwitch from "../common/IconSwitch";
    import YuliangDialog from "../common/YuliangDialog";
    import InputTermGroup from "../common/InputTermGroup";
    import TableTerm from "../common/TableTerm";
    import GridTable from "../common/GridTable";
    import YLFormContent from "../common/YLFormContent";
    export default {
        name: 'ClassicalGrid',
        components: {
            YLFormContent,
            GridTable,
            TableTerm,
            InputTermGroup,
            YuliangDialog,
            IconSwitch,
            OperationBtnGroup,
            SearchInputGroup,
            Grid,
            Pagination
        },
        props: ['classicalGrid'],
        data () {
            return {
                list: [],
                total: 0
            }
        },
        created () {
            this.init()
        },
        watch: {
            'classicalGrid.pagination': {
                handler() {
                    this.init()
                },
                deep: true
            }
        },
        methods: {
            init () {
                let request = {};
                this.classicalGrid.searchInputGroup.forEach(
                    searchInput => request[searchInput.name] = searchInput.value
                );
                request['pageNum'] = this.classicalGrid.pagination.pageNum;
                request['pageSize'] = this.classicalGrid.pagination.pageSize;
                Object.assign(request, this.$route.params);
                this.$http.get(this.classicalGrid.list.url, {params: request}).then(
                    res => {
                        if (res.status === 200) {
                            this.$set(this, 'list', res.data.list);
                            this.total = res.data.total;
                        }
                    }
                )
            },
            confirm () {
                if (this.classicalGrid.dialog.mode === 'create') {
                    this.create();
                }
            },
            create () {
                let request = {};
                this.classicalGrid.dialog.editContent.inputTermGroup.forEach(
                    obj => request[obj.name] = obj.value
                );
                this.$http.post(this.api.project.create('project'), request).then(
                    res => {
                        if (res.status === 200) {
                            alert ('创建成功！');
                            this.$set(this.classicalGrid.dialog, 'show', false);
                            this.init();
                        }
                    }
                )
            },
            modify () {

            },
            remove () {

            },
            changeMode (val) {
                this.$emit('changeMode', val)
            },
            changePage (pageNum) {
                this.$emit('pageNumChange', pageNum)
            }
        }
    }
</script>