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
              auths: []
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
            
          },
          onSelectChange() {

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
                <Table :columns="colsData" :data="datas"></Table>
              </Col>
            </Row>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>
