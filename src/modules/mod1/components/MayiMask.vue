<template>
    <div class="mayi-mask" v-show="isShow" @click="close">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            isShow: this.value
        }
    },
    watch: {
        value(val) {
            this.isShow = val
        },
    },
    methods: {
        close() {
            this.isShow = false;
            this.$emit('input', this.isShow);
        }
    }
}
</script>
<<style lang="stylus">
.mayi-mask
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background pink
</style>

