<template>
    <div class="layout">
        <Menu mode="horizontal" theme="primary" active-name="1">
            <div class="layout-logo">综合权限管理系统</div>
            <div class="layout-logout">
              欢迎您：{{user.username}}
            </div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </Menu-item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">新增和启动</Menu-item>
                        <Menu-item name="3-2">活跃分析</Menu-item>
                        <Menu-item name="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">用户留存</Menu-item>
                        <Menu-item name="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
                <Menu-item name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </Menu-item>
            </div>
        </Menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'Navbar',
        computed: {
          ...mapGetters([
            'user'
          ])
        }
    }
</script>

<style scoped>
    .layout {
        background: #f5f7f9;
    }

    .layout-logo {
        /*width: 100px;*/
        height:30px;
        padding:0px 10px 0px 10px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        color:#fff;
        line-height:30px;
    }
    .layout-nav {
        float: right;
    }
    .layout-logout {
        padding:0px 10px 0px 10px;
        height:30px;
        background: #5b6270;
        border-radius: 3px;
        float: right;
        position: relative;
        top: 15px;
        line-height:30px;
        color:#fff;
    }
</style>
