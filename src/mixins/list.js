const propsMixin = {
  data () {
    return {
      self: this,
      keyword: '',
      sizeList:[10,20,30],
      selectedRowKeys:[],
      tableHeight: document.documentElement.clientHeight - 107,
      tableWidth:document.documentElement.clientWidth - 180
    }
  },
  props: {
    data: {
        type: Array,
        default: []
    },
    total: {
        type:Number,
        default: 0
    },
    current: {
        type:Number,
        default:1
    },
    size: {
        type:Number,
        default: 20
    }
  },
  mounted() {
    window.onresize = () => {
        this.tableHeight = document.documentElement.clientHeight - 107
        this.tableWidth = document.documentElement.clientWidth - 180
    }
  },
  methods: {
    onSelectionChange(selectedRowKeys) {
        this.selectedRowKeys = selectedRowKeys
    },
    changePage (page) {
        this.$store.dispatch(`DoFetch${this.namespace}`, {current:page})
    },
    changePageSize(size) {
        this.$store.dispatch(`DoFetch${this.namespace}`, {size, current: 1})
    },
    onSearch() {
        this.$store.dispatch(`DoFetch${this.namespace}`, {keyword: this.keyword})
    },
    onRemoveSelected() {
        this.$Modal.confirm({
          title: '确认删除吗',
          content: `确定后，将删除选择的${this.selectedRowKeys.length}条记录`,
          onOk: () => {
              const ids = this.selectedRowKeys.map(row => row.id_)
              for (let i in ids) {
                  this.$store.dispatch(this.removeUrl, ids[i]).then((response) => {
                      if(response) {
                          const {data} = response;
                          if(data && data.httpCode === 200) {
                              this.$Message.success( `第${parseInt(i)+1}条删除成功`);
                          } else {
                              this.$Message.error( `第${parseInt(i)+1}条删除失败`);
                          }
                          if(i == ids.length - 1) {
                            this.$store.dispatch(`DoFetch${this.namespace}`)
                          }
                      }
                  })
              }
          },
          onCancel: () => {
                  this.loading = false
          }
        });
    },
    onRemove(id) {
      this.$Modal.confirm({
        title: '确认删除吗',
        content: `确定后，将永久删除此条记录`,
        onOk: () => {
            this.$store.dispatch(this.removeUrl, id).then((response) => {
                if(response) {
                    const {data} = response;
                    if(data && data.httpCode === 200) {
                        this.$Message.success( '删除成功');
                        this.$store.dispatch(`DoFetch${this.namespace}`)
                    } else {
                        this.$Message.error( '删除失败');
                    }
                }
            })
        },
        onCancel: () => {
            this.loading = false
        }
      });
    }
  },
  computed: {
      hasSelected() {
          return this.selectedRowKeys.length > 0
      },
      fetchUrl () {
        return `DoFetch${this.namespace}`
      },
      removeUrl () {
        return `DoRemove${this.namespace}`
      }
  }
}

export default propsMixin
