<script>
    import FormModal from './FormModal'
    import AuthModal from './AuthModal'
    import list from '@/mixins/list'
    import columns from './columns'
    export default {
        name: 'RoleList',
        data () {
            return {
                namespace: 'Role',
                columns
            }
        },
        components: {
            FormModal,
            AuthModal
        },
        mixins:[list]
    }
</script>
<template>
    <div class="normal">
        <Table :height="tableHeight" :context="self" :width="tableWidth" :data="data" border :columns="columns" stripe @on-selection-change="onSelectionChange">
            <div slot="header">
                <Row type="flex">
                    <Col span="12">
                        <FormModal title="新增用户" option="create">
                            <Button type="info" icon="plus">新增</Button>
                        </FormModal>
                        <Button type="success" icon="ios-trash" @click="onRemoveSelected" :disabled="!hasSelected">删除</Button>
                    </Col>
                    <Col span="12" style="text-align:right; padding-right:10px;">
                        <Select v-model="size" style="width:80px" @on-change="changePageSize">
                            <Option v-for="item in sizeList" :value="item" :key="item">{{ item }} 条/页</Option>
                        </Select>
                        <Input v-model="keyword" icon="search" @on-enter="onSearch" placeholder="按Enter键搜索..." style="width: 300px"></Input>
                    </Col>
                </Row>

            </div>
            <div slot="footer" style="float:right" class="table-footer">
                <Page :total="total" :current="current" @on-change="changePage" :page-size="size" show-elevator show-total></Page>
            </div>
        </Table>
    </div>
</template>

<style scoped>

    .table-footer {
        margin-top: 6px;
        margin-right:30px;
    }

</style>
