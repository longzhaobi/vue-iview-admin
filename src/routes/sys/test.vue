<template>
    <Table width="550" height="300" border :columns="columns2" :data="data3">
    	<div slot="header" class="table-height">fadsfdsfas</div>
    	<div slot="footer" class="table-height">bbbbbbbbbbbb</div>
    </Table>
</template>
<script>
    export default {
    	computed: {
    		data3() {
    			return this.$store.state.user.data
    		}
    	},
        data () {
            return {
                columns2: [
                	{
                		type: 'selection',
                		title: '#',
                		width:50,
                        fixed: 'left'
                	},
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                        // fixed: 'left'
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        width:120
                    },
                    {
                        title: '性别',
                        key: 'gender',
                        width:80,
                        render (row, column, index) {
                        	return '你好'
                        }
                    },
                    {
                        title: '身份证号码',
                        width:180,
                        key: 'idcard'
                    },
                    {
                        title: '出生日期',
                        width:140,
                        key: 'birthday'
                    },
                    {
                        title: '邮箱',
                        width:180,
                        key: 'email'
                    },
                    {
                        title: '联系电话',
                        width:140,
                        key: 'phone'
                    },
                    {
                        title: '工作职位',
                        width:100,
                        key: 'job'
                    },
                    {
                        title: '是否锁住',
                        width:100,
                        key: 'locked'
                    },
                    {
                        title: '拥有角色',
                        key: 'roleNames',
                        width:400
                    },
                    {
                        title: '注册日期',
                        key: 'ctime',
                         width:180
                    },
                    {
                        title: '维护日期',
                        key: 'mtime',
                        width:180
                    },
                    {
                        title: '操作',
                        key: 'operation',
                        width: 150,
                        fixed: 'right',
                        render (row, column, index) {
                            return '操作';
                        }
                    }
                ]
            }
        }
    }
</script>