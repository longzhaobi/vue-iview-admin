export default [
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
        title: '角色名称',
        key: 'name',
        width:180
    },
    {
        title: '角色标识',
        key: 'role',
        width:180
    },
    {
        title: '描述',
        // width:180,
        key: 'description'
    },
    {
        title: '创建日期',
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
        width: 160,
        render (row, column, index) {
            return `
            <form-modal title="编辑权限" :record="row" option="update">
                编辑
            </form-modal>|
            <auth-modal :record="row">
                授权
            </auth-modal>|
            <a @click="onRemove(row.id_)" class="modal_a">删除</a>
            `;
        }
    }
]
