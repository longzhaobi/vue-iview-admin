<script>
    import modal from '@/mixins/modal'
    export default {
        name: 'ResourceFormModal',
        data () {
            return {
              namespace:'Resource'
            }
        },
        mixins:[modal],
  			mounted () {
  				this.formItem = this.row
  			}
    }
</script>
<template>
    <span>
        <a @click="show = true" class="modal_a">
            <slot></slot>
        </a>
        <Modal
            v-model="show"
            :title="title">
            <Form :model="formItem" :label-width="80">
              <Form-item label="权限名称" prop="name">
                  <Input v-model="formItem.name" placeholder="请输入权限名称"></Input>
              </Form-item>
              <Form-item label="权限标识" prop="Resource">
                  <Input v-model="formItem.Resource" placeholder="请输入权限标识"></Input>
              </Form-item>
              <Form-item label="权限描述" prop="description">
                  <Input v-model="formItem.description" type="textarea" placeholder="请输入权限描述"></Input>
              </Form-item>
            </Form>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>
