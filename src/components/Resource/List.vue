<script>
    import FormModal from './FormModal'
    import height from '@/mixins/height'
    import columns from './columns'
    export default {
        name: 'ResourceList',
        data () {
            return {
                columns,
                namespace: 'Resource',
                keyword:'',
                selectedRowKeys:[],
                data:[]
            }
        },
        props: {
          treeData: {
            type: Array,
            default () {
              return []
            }
          }
        },
        components: {
            FormModal
        },
        mixins:[height],
        methods: {
          onSelectChange(value) {
            this.data = value.children
          },
          onSearch(keyword) {

          },
          onRemoveSelected() {

          }
        },
        computed: {
          hasSelected() {
              return this.selectedRowKeys.length > 0
          }
        }
    }
</script>
<template>
    <div class="normal">
      <div class="left">
        <div class="left-header">
          <Input v-model="keyword" icon="search" @on-enter="onSearch" placeholder="按Enter键搜索..." style="width: 180px"></Input>
        </div>
        <div class="left-tree">
          <Tree :data="treeData" @on-select-change="onSelectChange"></Tree>
        </div>
      </div>
      <div class="right">
        <Table :height="clientHeight-100" :width="clientWidth-400" :data="data" border :columns="columns" stripe>
            <div slot="header">
                <Row type="flex">
                    <Col span="12">
                        <FormModal title="新增用户" option="create">
                            <Button type="info" icon="plus">新增</Button>
                        </FormModal>
                        <Button type="success" icon="ios-trash" @click="onRemoveSelected" :disabled="!hasSelected">删除</Button>
                    </Col>
                </Row>
            </div>
        </Table>
      </div>
    </div>
</template>

<style scoped>
  .normal {
  }
  .left {
    width:220px;
    float:left;
  }
  .left .left-header {
    height: 49px;
    line-height: 48px;
    padding-left:20px;
    font-weight: bold;
    border-top:1px solid rgb(215,221,218);
    border-bottom:1px solid rgb(239,239,239);
  }
  .left .left-tree {
    padding-left:20px;
  }
  .right {
    float:left;
  }
  .table-footer {
      margin-top: 6px;
      margin-right:30px;
  }
</style>
