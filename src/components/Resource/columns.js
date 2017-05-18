export default [
    {
        type: 'index',
        width: 60,
        fixed:'left',
        align: 'center'
    },
    {
        title: '资源名称',
        key: 'name',
        width:180
    },
    {
        title: '资源标识',
        key: 'identity',
        width:180
    },{
        title: '图标',
        key: 'icon',
        width:180
    },{
        title: '资源链接',
        key: 'url',
        width:180
    },{
        title: '资源权重',
        key: 'weight',
        width:100
    },{
        title: '资源类型',
        key: 'menuType',
        width:100
    },
    {
        title: '拥有权限',
        width:380,
        key: 'permissionText'
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
        fixed:'right',
        width: 120,
        render (row, column, index) {
            return `
            <form-modal title="编辑权限" :record="row" option="update">
                编辑
            </form-modal>|
            <a @click="onRemove(row.id_)" class="modal_a">删除</a>
            `;
        }
    }
]
