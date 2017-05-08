<template>
	<div class="normal">
	    <Table :context="self" height="800" border :columns="tableColumns1" stripe>
	    	<div slot="header" class="table-height">
	    		<Row type="flex">
			        <Col span="12">
			        	<Button type="info" icon="plus">新增</Button>
    					<Button type="success" icon="ios-trash">删除</Button>
			        </Col>
			        <Col span="12" style="text-align:right; padding-right:10px;">
			        	<Input v-model="keyword" icon="ios-clock-outline" placeholder="请输入条件搜索..." style="width: 300px"></Input>
			        </Col>
			    </Row>
	    		
	    	</div>
	    	<div slot="footer" style="float:right" class="table-footer">
	    		<Page :total="100" :current="1" @on-change="changePage"></Page>
	    	</div>
	    </Table>
    </div>
</template>
<script>
    export default {
    	name: 'UserList',
        data () {
            return {
                self: this,
                keyword: '',
                tableData1: this.mockTableData1(),
                tableColumns1: [
                	{
                		type: 'selection',
                		title: '#',
                		width:'50'
                	},
                    {

                        title: '用户名',
                        key: 'username',
                        width:120
                    },
                    {
                        title: '性别',
                        key: 'gender',
                        width:60,
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
                        width:80,
                        key: 'locked'
                    },
                    {
                        title: '拥有角色',
                        key: 'roleNames',
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
                            return `{{ formatDate(tableData1[${index}].update) }}`;
                        }
                    }
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: '商圈' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                        people: [
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                this.tableData1 = this.mockTableData1();
            }
        },
        beforeRouteEnter: (to, from, next) => {
        	//后端请求数据
        	next(vm => {
        		// vm.$store.dispatch('DoGetInfoList')
        	})
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