<script>
export default {
    computed: {
        loading(){
            return this.$store.state.loading
        }
    }
}
</script>

<template>
    <h1 v-if="loading"><img src="../assets/pokeball-loading-unscreen.gif"></h1>
</template>