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
    }
}

export default propsMixin