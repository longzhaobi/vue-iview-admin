<template>
	<div class="normal">
	    <Table :height="tableHeight" :data="data" border :columns="columns" stripe @on-selection-change="onSelectionChange">
	    	<div slot="header">
	    		<Row type="flex">
			        <Col span="12">
                        <UserModal title="新增用户" option="create">
                            <Button type="info" icon="plus">新增</Button>
                        </UserModal>
                        <Button type="success" icon="ios-trash" @click="deleteUser" :disabled="!hasSelected">删除</Button>
			        </Col>
			        <Col span="12" style="text-align:right; padding-right:10px;">
                        <Select v-model="size" style="width:80px" @on-change="changePageSize">
                            <Option v-for="item in sizeList" :value="item" :key="item">{{ item }} 条/页</Option>
                        </Select>
			        	<Input v-model="keyword" icon="ios-clock-outline" placeholder="请输入条件搜索..." style="width: 300px"></Input>
			        </Col>
			    </Row>

	    	</div>
	    	<div slot="footer" style="float:right" class="table-footer">
	    		<Page :total="total" :current="current" @on-change="changePage" :page-size="size" show-elevator></Page>
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
            },
            size: {
                type:Number,
                default: 20
            }
        },
        components: {
            UserModal
        },
        mounted() {
            window.onresize = () => {
                this.tableHeight = document.documentElement.clientHeight - 107
            }
        },
        methods: {
            changePage (page) {
                this.$store.dispatch('DoFetchUserInfo', {current:page})
            },
            changePageSize(size) {
                this.$store.dispatch('DoFetchUserInfo', {size, current: 1})
            },
            onSelectionChange(selectedRowKeys) {
                this.selectedRowKeys = selectedRowKeys
            },
						deleteUser() {
							this.$Modal.confirm({
									title: '确认删除吗',
									content: `确定后，将删除选择的${this.selectedRowKeys.length}条记录`,
									onOk: () => {
										const ids = this.selectedRowKeys.map(row => row.id_)
										for (let i in ids) {
											this.$store.dispatch('DoRemoveUserInfo', ids[i]).then((response) => {
												if(response) {
													const {data} = response;
													if(data && data.httpCode === 200) {
														this.$Message.success( `第${parseInt(i)+1}条删除成功`);
													} else {
														this.$Message.error( `第${parseInt(i)+1}条删除失败`);
													}
												}
											})
										}
										this.$store.dispatch('DoFetchUserInfo')
									},
									onCancel: () => {
											this.loading = false
									}
							});
						}

        },
				computed: {
					hasSelected() {
						return this.selectedRowKeys.length > 0
					}
				},
        data () {
            return {
                keyword: '',
                sizeList:[10,20,30],
								selectedRowKeys:[],
                tableHeight: document.documentElement.clientHeight - 107,
                columns: [
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

<style scoped>

	.table-footer {
		margin-top: 6px;
		margin-right:30px;
	}

</style>
