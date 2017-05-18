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
            this.auths = []
            for(let item of this.authData) {
              let obj = {}
              obj[item.name] = item.isAuth
              if(item.children) {
                //假如有孩子，添加
                let _self = this
                item.children.map((child) => {
                  let isAuth = child.isAuth ==='yes';
                  if(child.disable === 'yes') {
                    obj[child.name] = '<input type="checkbox" disabled="disabled"></input>';
                  } else {
                    //判断是否有权限的值，如果有的话假如auths数组里
                    if(isAuth) {
                      // _self.auths = _self.auths.push(child.value);
                      obj[child.name] = `<input type="checkbox" value="child.value" checked="checked"></input>`;
                    } else {
                      obj[child.name] = `<input type="checkbox" value="child.value" ></input>`;
                    }
                  }
                });
              }
              datas.push(obj)
            }
            console.log(datas);
            return datas
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
                console.log(authData);
              }
            })
          },
          ok() {

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
          },
          onChange() {

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
                <Table :columns="colsData" :data="datas" stripe border></Table>
              </Col>
            </Row>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>
