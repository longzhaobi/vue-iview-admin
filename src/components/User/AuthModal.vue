<script>
    export default {
        name:'AuthUserModal',
        data () {
            return {
                show: false,
                loading: false,
                role:this.record.roleIds ? this.record.roleIds.split(',') : [],
                roles:[]
            }
        },
        computed: {
          dispatch () {
              return this.$parent.$data.self.$store.dispatch
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
            ok () {
                if(this.role.length === 0) {
                    this.$Message.warning("请选择需要授权的角色信息")
                    return
                }
                this.$Modal.confirm({
                    title: '确认授权吗',
                    content: `<p>授权后，用户【${this.record.username}】将拥有选择的角色权限</p>`,
                    onOk: () => {
                        this.loading = true
                        this.dispatch('DoAuthUserInfo', {id:this.record.id_, role:this.role.join()}).then((response) => {
                            if(response) {
                                const {data} = response
                                if(data && data.httpCode == 200) {
                                    this.show = false
                                    this.loading = false
                                    this.$Message.success("授权成功")
                                    this.dispatch('DoFetchUser')

                                }
                            }
                        })
                    },
                    onCancel: () => {
                        this.loading = false
                    }
                });
            },
            showModelHandler () {
                this.dispatch('DoFetchRoles').then((response) => {
                    if(response) {
                        const {data} = response
                        if(data && data.httpCode === 200) {
                            this.show = true
                            this.roles = data.data
                        }
                    }
                })
            }
        }
    }
</script>
<template>
    <span>
        <a @click="showModelHandler" class="modal_a">
            <slot></slot>
        </a>
        <Modal
            v-model="show"
            title="角色授权">
            <Form :label-width="80">
                <Form-item label="授权用户">
                    <p>{{record.username}}</p>
                </Form-item>
                <Form-item label="角色列表" prop="role">
                    <Select v-model="role" multiple style="width:260px">
                        <Option v-for="item in roles" :value="item.id_" :key="item.id_">{{ item.name }}</Option>
                    </Select>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>
