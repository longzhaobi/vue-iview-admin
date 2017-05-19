 <script>
    export default {
        name: 'RoleAuthModal',
        data () {
            return {
              namespace:'Role',
              show:false,
              loading: false,
              treeData:[],
              authData:[],
              colsData:[],
              auths: [],
              self:this,
              pid:null,
              roleId:null,
            }
        },
        computed: {
          dispatch () {
              return this.$parent.$data.self.$store.dispatch
          },
          title () {
            return `当前角色:${this.record.name}`
          },
          datas() {
            const datas = []
            for(let item of this.authData) {
              let obj = {}
              obj[item.name] = item.isAuth
              if(item.children) {
                //假如有孩子，添加
                item.children.map((child) => {
                  obj[child.name] = child.disable + '-' + child.isAuth + '-' + child.value
                });
              }
              datas.push(obj)
            }
            return datas
          },
          col() {
            const col = this.colsData
            const newCol = []
            this.auths = []
            for(let c of col) {
              if(c.key !== 'pageName') {
                c.render = (row, column, index) =>{
                  let v = row[column.key]
                  let vs = v.split('-')
                  let disabled = vs[0]
                  let isAuth = vs[1]
                  let value = vs[2]
                  if(disabled === 'yes') {
                    return `<input type="checkbox" disabled="disabled"></input>`
                  } else {
                    if(isAuth === 'yes') {
                      return `
                        <input type="checkbox" name="authBox" value="${value}" checked="checked"></input>
                      `
                    } else {
                      return `
                        <input type="checkbox" names="authBox" value="${value}"></input>
                      `
                    }
                    
                  }
                }
              }
              newCol.push(c)
            }
            return newCol
          }
        },
        props: {
          record: {
              type: Object,
              default: function() {
                  return {}
              }
          },
        },
        methods: {
          onShowHandle() {
            this.dispatch('DoFetchRoleAuth', {roleId: this.record.id_, pid: 0}).then(response => {
              if(response) {
                const {treeData, authData, colsData} = response
                this.colsData = colsData
                this.treeData = treeData
                this.authData = authData
                this.show = true
              }
            })
          },
          ok() {
            const checks = $('input:checkbox[name=authBox]:checked')
            const auths = []
            checks.each(function(i){
              auths.push($(this).val())
            });
            this.auths = auths
            
          },
          onSelectChange(row) {
            this.auths = []
            const roleId = this.record.id_
            const pid = row[0].id_
            if(roleId && pid){
              this.pid = pid
              this.roleId = roleId
              this.dispatch('fetchAuthList', {roleId, pid}).then(response => {
                this.authData = response
              })
            }
          }
        }
    }
</script>
<template>
    <span>
        <a @click="onShowHandle" class="modal_a">
            <slot></slot>
        </a>
        <Modal
            v-model="show"
            width="1200"
            :title="title">
            <Row>
              <Col span="4" style="height:322px;border:1px solid #eee;overflow:auto;padding-left:10px;">
                <Tree :data="treeData" @on-select-change="onSelectChange"></Tree>
              </Col>
              <Col span="20" style="height:322px;border:1px solid #eee;overflow:auto">
                <Table :content="self" :columns="col" :data="datas" stripe border></Table>
              </Col>
            </Row>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>