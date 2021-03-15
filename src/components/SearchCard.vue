<script>
export default {
    computed: {
        query: {
            get () {
                return this.$store.state.query
            },
            set (value) {
                this.$store.commit('setQuery', value)
            }
        }
    },
    watch: {
        query(){
            this.$store.dispatch('searchCards')
        }
    }
}
</script>

<template>
    <input type="text" v-model="query" placeholder="Search by card name...">
</template>