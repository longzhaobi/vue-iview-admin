const propsMixin = {
	props: {
        record: {
            type: Object,
            default: function() {
                return {}
            }
        },
        title: {
            type: String,
            default:"未定义"
        },
        option: {
            type: String,
            default: "create"
        }
    },
    computed: {
        dispatch () {
            return this.$store ? this.$store.dispatch : this.$parent.$data.self.$store.dispatch
        }
    }
}

export default propsMixin