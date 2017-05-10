<template>
	<div class="normal">
	    <Table :height="tableHeight" :data="data" border :columns="columns" stripe>
	    	<div slot="header" class="table-height">
	    		<Row type="flex">
			        <Col span="12">
                        <UserModal title="新增用户" option="create">
                            <Button type="info" icon="plus">新增</Button>
                        </UserModal>
                        <Button type="success" icon="ios-trash">删除</Button>
			        </Col>
			        <Col span="12" style="text-align:right; padding-right:10px;">
                        <Select v-model="model1" style="width:80px">
                            <Option v-for="item in cityList" :value="item" :key="item">{{ item }} 条/页</Option>
                        </Select>
			        	<Input v-model="keyword" icon="ios-clock-outline" placeholder="请输入条件搜索..." style="width: 300px"></Input>
			        </Col>
			    </Row>

	    	</div>
	    	<div slot="footer" style="float:right" class="table-footer">
	    		<Page :total="total" :current="current" @on-change="changePage" show-elevator></Page>
	    	</div>
	    </Table>
    </div>
</template>
<script>
    import UserModal from './UserModal'
    export default {
    	name: 'UserList',
        props: {
            data: {
                type: Array,
                default: []
            },
            total: {
                type:Number,
                default: 0
            },
            current: {
                type:Number,
                default:1
            }
        },
        components: {
            UserModal
        },
        mounted() {
            window.onresize = () => {
                this.tableHeight = document.documentElement.clientHeight - 90
            }
        },
        methods: {
            changePage (page) {
                this.$store.dispatch('DoFetchUserInfo', {current:page})
            }

        },
        data () {
            return {
                keyword: '',
                model1:"10",
                cityList:["10","20","30"],
                tableHeight: document.documentElement.clientHeight - 90,
                columns: [
                	{
                		type: 'selection',
                		title: '#',
                		width:50
                	},
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
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
                        render (row, column, index) {
                            return '操作';
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>
	.demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
        z-index: 100;
    }
	.table-height {
		/*margin-left:15px;*/
	}
	.table-footer {
		margin-top: 6px;
		margin-right:30px;
	}
	.search-input li {
		line-height: 48px !important;
	}
</style>
