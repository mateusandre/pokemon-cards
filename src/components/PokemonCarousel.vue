<script>
import {mapState} from 'vuex'
import PokemonCard from './PokemonCard'

export default {
    computed:  mapState({
        cards: state => state.cards
    }),
    components: {
        PokemonCard
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
        <carousel :centerMode="false" :perPage="1" :paginationEnabled="false" @page-change="pageChange">
            <slide v-for="card in cards" :key="card.id">
                <pokemon-card :card="card"></pokemon-card>
            </slide>
        </carousel>
    </div>
</template>

<style scoped>
    .card{
        flex: 1;
        margin: 0 auto;
    }
</style>