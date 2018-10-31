<template>
    <classical-grid :classical-grid="classicalGrid"
                    @changeMode="changeMode"
                    @pageNumChange="changePage"></classical-grid>
</template>
<script>
    import ClassicalGrid from "../../combination/ClassicalGrid";
    export default {
        name: 'Project',
        components: {ClassicalGrid},
        data () {
            return {
                classicalGrid: {
                    dialog: {
                        show: false,
                        mode: undefined,
                        title: {
                            create: '创建项目',
                            modify: '编辑项目',
                        },
                        content: [
                            {
                                model: 'ylInput',
                                configure: {
                                    name: 'name',
                                    label: '名称'
                                }
                            },
                            {
                                model: 'ylInput',
                                configure: {
                                    name: 'dcp',
                                    label: '描述'
                                }
                            }
                        ]
                    },
                    mode: 'grid',
                    operationBtnGroup: {
                        items: [
                            {
                                text: '创建项目',
                                trigger: this.showCreateDialog
                            }
                        ],
                    },
                    searchInputGroup: [
                        {
                            placeholder: '项目名称',
                            name: 'name'
                        }
                    ],
                    iconPathList: [
                        {
                            alt: '切换到表格',
                            value: 'table',
                            path: require('../../../assets/svg/listing-option.svg')
                        },
                        {
                            alt: '切换到九宫格',
                            value: 'grid',
                            path: require('../../../assets/svg/table-grid.svg')
                        }
                    ],
                    grid: {
                        rowSize: 3,
                        columnSize: 5,
                        boxStyle: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        },
                        boxMouseOver: {
                            backgroundColor: '#00EEEE',
                            color: '#ffffff'
                        }
                    },
                    tableTerm: {
                        thead: [
                            {
                                value: 'name',
                                text: '项目名称'
                            },
                            {
                                value: 'dcp',
                                text: '描述'
                            }
                        ]
                    },
                    pagination: {
                        pageNum: 1,
                        pageSize: 15,
                        pageNumSize: 5
                    },
                    list: {
                        url: this.api.list('project'),
                    },
                    itemClick: function (item) {
                        this.$router.push("/service/" + item.id)
                    }
                }
            }
        },
        methods: {
            changeMode (val) {
                this.$set(this.classicalGrid, 'mode', val);
                this.$set(this.classicalGrid.pagination, 'pageNum', 1);
                if (val === 'grid') {
                    this.$set(this.classicalGrid.pagination, 'pageSize', 15);
                } else {
                    this.$set(this.classicalGrid.pagination, 'pageSize', 10);
                }
            },
            showCreateDialog () {
                this.$set(this.classicalGrid.dialog, 'show', true);
                this.$set(this.classicalGrid.dialog, 'mode', 'create');
            },
            changePage (pageNum) {
                this.$set(this.classicalGrid.pagination, 'pageNum', pageNum);
            }
        }
    }
</script>