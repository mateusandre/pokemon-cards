<script>
import {mapState} from 'vuex'
import PokemonCard from './PokemonCard'
import Loading from './Loading'

export default {
    data(){
        return {
            currentPage: 0
        }
    },
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
            this.currentPage = page
            if (page == (this.cards.length - 1) )
                this.$store.dispatch('loadMoreCards')
        }
    }
}
</script>

<template>
    <div>
        <p class="slide-indicators" v-if="cards.length > 0"><span v-if="currentPage > 0">&larr;</span> Slide to &rarr;</p>
        <loading />
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
    .slide-indicators{
        padding: 0;
        margin-top: -20px;
        font-size: 13px;
        font-weight: bold;
    }
</style>