<template>
    <div id="app">
        <el-container style="border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
                    <el-menu-item index="1-1"><i class="el-icon-setting"></i>环境检查</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>前端脚手架</template>
                        <el-menu-item-group>
                            <template slot="title">vue</template>
                            <el-menu-item index="2-1">vue-cli</el-menu-item>
                            <el-menu-item index="2-2">@jser/vue</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="react">
                            <el-menu-item index="2-3">Create React App</el-menu-item>
                            <el-menu-item index="2-4">Create React Native App</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="angular">
                            <el-menu-item index="2-5">Create Angular App</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>github</template>
                        <el-menu-item-group>
                            <template slot="title">commit历史校验</template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
               <router-view></router-view>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: 'code-helper'
    }
</script>

<style scoped lang="less">
    .checkerlist {
            li {
                list-style-type: none;
            }
    }
    /* CSS */
</style>
