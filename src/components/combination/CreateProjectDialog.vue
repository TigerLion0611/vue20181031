<template>
    <yuliang-dialog
            @closeDialog="closeDialog"
            @confirm="confirm"
            :showDialog="showDialog">
        <template slot="title">
                <span>
                    <h3>
                        创建项目
                    </h3>
                </span>
        </template>
        <template slot="body">
            <input-term-group :input-term-group="inputTermGroup"></input-term-group>
        </template>
    </yuliang-dialog>
</template>
<style>

</style>
<script>
    import InputTermGroup from "../common/InputTermGroup";
    import YuliangDialog from "../common/YuliangDialog";
    export default {
        name: 'CreateProjectDialog',
        components: {YuliangDialog, InputTermGroup},
        props: ['showDialog'],
        data () {
            return {
                inputTermGroup: [
                    {
                        label: '名称',
                        name: 'name',
                        required: true
                    },
                    {
                        label: '描述',
                        name: 'dcp'
                    }
                ]
            }
        },
        methods: {
            closeDialog () {
                this.$emit('closeDialog')
            },
            confirm () {
                let obj = {}
                this.inputTermGroup.forEach(
                    inputTerm => obj[inputTerm.name] = inputTerm.value
                );
                this.$http.post(this.api.project.create, obj).then(
                    res => {
                        if (res.status === 200) {
                            window.console.log (res)
                        }
                    }
                )
            }
        }
    }
</script>