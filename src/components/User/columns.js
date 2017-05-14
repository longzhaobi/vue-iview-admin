export default [
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
        fixed: 'left'
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
        width:150,
        key: 'job'
    },
    {
        title: '是否锁住',
        width:100,
        key: 'locked',
        render (row, column, index) {
          if(row.locked === '1') {
            return '已锁定'
          } else {
            return '未锁定'
          }
        }
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
        width: 120,
        fixed: 'right',
        render (row, column, index) {
            return `
            <auth-modal title="用户授权" :record="row">
                授权
            </auth-modal>|
            <form-modal title="编辑用户" :record="row" option="update">
                编辑
            </form-modal>|
            <a @click="onRemove(row.id_)" class="modal_a">删除</a>
            `;
        }
    }
]
