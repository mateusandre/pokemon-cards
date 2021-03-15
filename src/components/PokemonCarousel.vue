<script>
import {mapState} from 'vuex'
import PokemonCard from './PokemonCard'
import Loading from './Loading'

export default {
    computed:  mapState({
        cards: state => state.cards,
        loading: state => state.loading
    }),
    components: {
        PokemonCard,
        Loading
    },
    methods: {
        pageChange(page){
            if (page == (this.cards.length - 1) )
                this.$store.dispatch('loadMoreCards')
        }
    }
}
</script>

<template>
    <div>
        <loading></loading>
        <carousel :centerMode="false" :perPage="1" :paginationEnabled="false" @page-change="pageChange">
            <slide v-for="card in cards" :key="card.id">
                <pokemon-card v-if="!loading" :card="card"></pokemon-card>
            </slide>
        </carousel>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        flex: 1;
        margin: 0 auto;
    }
</style>