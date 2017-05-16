const propsMixin = {
  data () {
    return {
      clientHeight: document.documentElement.clientHeight,
      clientWidth:document.documentElement.clientWidth
    }
  },
  mounted() {
    window.onresize = () => {
        this.clientHeight = document.documentElement.clientHeight
        this.clientWidth = document.documentElement.clientWidth
    }
  }
}

export default propsMixin
