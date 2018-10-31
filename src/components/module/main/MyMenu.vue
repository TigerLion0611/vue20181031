<template>
    <div id="menu">
       <ul>
           <li :class="{active: menu === 'project'}" @click="menu = 'project'">
               <div style="display: flex; align-items: center;">
                   <img v-show="menu !== 'project'" src="../../../assets/svg/project.svg" style="width: 30px; height: 20px"/>
                   <img v-show="menu === 'project'" src="../../../assets/svg/project-light.svg" style="width: 30px; height: 20px"/>
                   <span>我的项目</span>
               </div>
           </li>
           <li :class="{active: menu === 'folder'}" @click="menu = 'folder'">
               <div style="display: flex; align-items: last-baseline">
                   <img v-show="menu !== 'folder'" src="../../../assets/svg/folder.svg" style="width: 30px; height: 20px"/>
                   <img v-show="menu === 'folder'" src="../../../assets/svg/folder-light.svg" style="width: 30px; height: 20px"/>
                   <span>我的文件</span>
               </div>
           </li>
       </ul>
    </div>
</template>
<style scoped>
    #menu {
        border-right: .05vw solid #EBEBEB;
        border-bottom-left-radius: .3vw;
    }
    #menu ul {
        padding: 1% 0;
    }
    #menu li {
        width: 90%;
        padding: 3%;
        box-sizing: border-box;
        list-style-type: none;
        cursor: pointer;
        border-top-right-radius: 3vw;
        border-bottom-right-radius: 3vw;
    }
    #menu li.active {
        background-color: #00EEEE;
        color: white;
        font-weight: bold;
    }

</style>
<script>
    import ModuleWithShadow from "../../common/ModuleWithShadow";
    export default {
        name: "MyMenu",
        components: {ModuleWithShadow},
        data () {
            return {
                menus: [],
                menu: 'project'
            }
        },
        created () {
            // this.initMenus();
        },
        methods: {
            initMenus () {
                this.$http.get(this.api.menu.list).then(
                    res => {
                        if (res.status === 200) {
                            this.menus = res.data
                        }
                    }
                )
            }
        }
    }
</script>