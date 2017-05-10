<template>
    <span>
        <span @click="show = true">
            <slot></slot>
        </span>
        <Modal
            v-model="show"
            :title="title"
            width="800">
            <Form :model="formItem" :label-width="80">
                <Row>
                    <Col span="12">
                        <Form-item label="用户名" prop="username">
                            <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
                        </Form-item>
                    </Col>
                    
                    <Col span="12">
                        <Form-item label="密码" prop="password">
                            <Input v-model="formItem.password" placeholder="请输入密码"></Input>
                        </Form-item>
                    </Col>
                </Row>

                <Row>
                    <Col span="12">
                        <Form-item label="性别" prop="gender">
                            <Radio-group v-model="formItem.gender">
                                <Radio label="1">男</Radio>
                                <Radio label="2">女</Radio>
                            </Radio-group>
                        </Form-item>
                    </Col>
                    
                    <Col span="12">
                        <Form-item label="邮箱" prop="email">
                            <Input v-model="formItem.email" placeholder="请输入邮箱"></Input>
                        </Form-item>
                    </Col>
                </Row>

                <Row>
                    <Col span="12">
                        <Form-item label="身份证号码" prop="idcard">
                            <Input v-model="formItem.idcard" placeholder="请输入身份证号码"></Input>
                        </Form-item>
                    </Col>
                    
                    <Col span="12">
                        <Form-item label="工作职位" prop="job">
                            <Input v-model="formItem.job" placeholder="请输入工作职位"></Input>
                        </Form-item>
                    </Col>
                </Row>

                <Row>
                    <Col span="12">
                        <Form-item label="联系电话" prop="phone">
                            <Input v-model="formItem.phone" placeholder="请输入联系电话"></Input>
                        </Form-item>
                    </Col>
                </Row>
                
            </Form>
            <div slot="footer">
                <Button type="text" @click="show = false">取消</Button>
                <Button type="primary" :loading="loading" @click="ok">{{loading ? '拼命中...' :'确定'}}</Button>
            </div>
        </Modal>
    </span>
</template>
<script>
    import modal from '@/mixins/modal'
    export default {
        data () {
            return {
                show: false,
                loading: false,
                reloadUrl:'DoFetchUserInfo',
                formItem: {gender:'1', ...this.record}
            }
        },
        mixins:[modal],
        methods: {
            ok () {
                this.$Modal.confirm({
                    title: '确认保存吗',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.loading = true
                        this.$store.dispatch('DoSaveUserInfo', this.formItem).then((response) => {
                            if(response) {
                                const {data} = response
                                if(data && data.httpCode == 200) {
                                    this.show = false
                                    this.loading = false
                                    this.$store.dispatch(this.reloadUrl)
                                }
                            }
                        })
                    },
                    onCancel: () => {
                        this.loading = false
                    }
                });
            }
        }
    }
</script>