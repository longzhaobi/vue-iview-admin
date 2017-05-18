<script>
    import modal from '@/mixins/modal'
    export default {
        name: 'ResourceFormModal',
        data () {
            return {
              namespace:'Resource',
              permission:[]
            }
        },
        mixins:[modal],
  			mounted () {
  				this.formItem = {menuType:'3', ...this.row}
  			},
        methods: {
          showModelHandler() {
            this.dispatch('fetchPermission').then(response => {
              if(response) {
                const {data} = response
                if(data && data.httpCode === 200) {
                  this.show = true
                  this.permission = data.data
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
            :title="title"
            :width="560">
            <Form :model="formItem" :label-width="80">
              <Form-item label="资源名称" prop="name">
                  <Input v-model="formItem.name" placeholder="请输入权限名称"></Input>
              </Form-item>
              <Form-item label="权重和类型">
                <Row>
                    <Col span="11">
                        <Input-number :min="1" v-model="formItem.weight"></Input-number>
                    </Col>
                    <Col span="13">
                        <Select v-model="formItem.menuType">
                            <Option value="1">父子类型</Option>
                            <Option value="2">分组类型</Option>
                            <Option value="3">普通类型</Option>
                        </Select>
                    </Col>
                </Row>
              </Form-item>
              <Form-item label="资源标识" prop="identity">
                  <Input v-model="formItem.identity" placeholder="请输入权限标识"></Input>
              </Form-item>
              <Form-item label="资源图标" prop="icon">
                  <Input v-model="formItem.icon" placeholder="请输入权限标识"></Input>
              </Form-item>
              <Form-item label="资源链接" prop="url">
                  <Input v-model="formItem.url" placeholder="请输入权限标识"></Input>
              </Form-item>
              <Form-item label="资源权限" prop="hasPermission">
                  <Select v-model="formItem.hasPermission" multiple>
                      <Option v-for="p in permission" :value="p.id_">{{p.name}}</Option>
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
