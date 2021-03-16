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
    methods: {
        searchCards(){
            this.$store.dispatch('searchCards')
        }
    }
}
</script>

<template>
    <input type="text" v-model="query" @input="searchCards" :placeholder="$t('searchPlaceholder')">
</template>