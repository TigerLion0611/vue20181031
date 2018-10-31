<template>
    <div class="pagination">
        <div>
            总计 <span class="total">{{ total }}</span> 条记录
        </div>
        <div class="operation">
            <img src="../../assets/svg/default/left-end.svg" @click="toFirstPage"/>
            <img src="../../assets/svg/default/left-arrow.svg" @click="toPreviousPage"/>
            <div class="pageNum">
                <div v-for="p in pageNums"
                     :key="p"
                     :class="{active: p === pagination.pageNum}"
                     @click="setPage(p)">
                <span>
                    {{ p }}
                </span>
                </div>
            </div>
            <img src="../../assets/svg/default/right-arrow.svg" @click="toNextPage"/>
            <img src="../../assets/svg/default/right-end.svg" @click="toEndPage"/>
        </div>
        <div>
            共 <span class="total">{{ totalPage }}</span> 页
        </div>
    </div>
</template>
<style scoped>
    div.pagination {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.pagination>div{
        box-sizing: border-box;
        flex: 1;
        text-align: center;
    }
    span.total {
        font-weight: bold;
        color: #00EEEE;
    }
    div.operation {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.operation img {
        box-sizing: border-box;
        border: 0.08vw solid #e8e8e8;
        padding: .24vw .4vw;
        width: 2vw;
        height: 2vw;
        border-radius: .4vw;
        cursor: pointer;
        margin: 0 .4vw;
    }
    div.pageNum {
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    div.pageNum div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.08vw solid #e8e8e8;
        border-radius: .4vw;
        width: 2vw;
        height: 2vw;
        margin: 0 .4vw;
        cursor: pointer;
    }

    div.active {
        background: #00EEEE;
    }

    div.pageNum span {
        color: #00EEEE;
        font-weight: bold;
    }

    div.active span {
        color: white;
    }
</style>
<script>
    export default {
        name: 'Pagination',
        props: ['pagination', 'total'],
        computed: {
            totalPage () {
                let totalPage = 0;
                let isExactly = this.total % this.pagination.pageSize === 0;
                if (isExactly) {
                    totalPage = this.total / this.pagination.pageSize;
                } else {
                    totalPage = parseInt(this.total / this.pagination.pageSize + 1);
                }
                return totalPage
            },
            pageNums () {
                let arr = [];
                let gap = parseInt(this.pagination.pageNumSize / 2);
                let start = this.pagination.pageNum - gap;
                if (start <= 0) {
                    start = 1;
                }
                if (this.totalPage - start < this.pagination.pageNumSize) {
                    if (this.totalPage >= this.pagination.pageNumSize) {
                        start = this.totalPage - this.pagination.pageNumSize + 1
                    } else {
                        start = 1
                    }
                }
                let end = start + this.pagination.pageNumSize;
                if (end > this.totalPage) {
                    end = this.totalPage + 1
                }
                for (let i = start; i < end; i++) {
                    arr.push(i);
                }
                return arr;
            }
        },
        methods: {
            toFirstPage () {
                this.$emit('pageNumChange', 1);
            },
            toPreviousPage () {
                let pageNum = this.pagination.pageNum - 1 > 0 ? this.pagination.pageNum - 1 : 1;
                this.$emit('pageNumChange', pageNum);
            },
            setPage (pageNum) {
                this.$emit('pageNumChange', pageNum);
            },
            toNextPage () {
                let pageNum =   this.pagination.pageNum + 1 > this.totalPage ? this.totalPage : this.pagination.pageNum + 1;
                this.$emit('pageNumChange', pageNum);
            },
            toEndPage () {
                this.$emit('pageNumChange', this.totalPage);
            }
        }
    }
</script>