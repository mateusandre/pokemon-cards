<script>
import PokemonCard from './../components/PokemonCard'
import PokemonCarousel from './../components/PokemonCarousel'

export default {
    name: 'PokemonCardList',
    data(){
        return {
            isMobileDevice: this.$isMobile()
        }
    },
    computed: {
        cards(){
            return this.$store.state.cards
        },
        page(){
            return this.$store.state.page
        },
        loading(){ 
            return this.$store.state.loading 
        },
        query: {
            get () {
                return this.$store.state.query
            },
            set (value) {
                this.$store.commit('setQuery', value)
            }
        }
    },
    components: {
        PokemonCard,
        PokemonCarousel
    },
    created(){
        window.addEventListener("resize", this.checkIfIsMobileDevice)
        this.$store.dispatch('getCards')
        this.scroll();
    },
    methods: {        
        checkIfIsMobileDevice(){            
            this.isMobileDevice = this.$isMobile()
        },
        searchCards(){
            this.$store.dispatch('searchCards')
        },
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                if (bottomOfWindow && !this.isMobileDevice) {
                    this.$store.dispatch('loadMoreCards')
                }
            }
        },
    } 
}

</script>

<template>
    <div>
        <header>            
            <input type="text" @keyup="searchCards" v-model="query" placeholder="Search by card name...">
        </header>        
        <section id="logo">
            <img alt="Vue logo" src="../assets/pokeball-color.png">
            <h1>Pokémon Cards</h1>
        </section>

        <section v-if="isMobileDevice" key="mobile-cards">
            <pokemon-carousel></pokemon-carousel>
        </section>
        <section id="cards-container" v-else key="desktop-cards">
            <pokemon-card v-for="card in cards" :key="card.id" v-bind:card="card"></pokemon-card>
        </section>


        <h1 v-if="loading && !isMobileDevice"><img src="../assets/pokeball-loading-unscreen.gif"></h1>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../scss/_variables.scss";

    $header-height: 60px;
    $cards-container-margin-top: calc(#{$header-height} + 25px);

    header{        
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: $primary-color;
        width: 100%;
        min-height: $header-height;
        padding: 10px;
        top: 0;
        
        input{
            width: 50%;
            height: 20px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 18px;
        }
    }
    #logo{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: $cards-container-margin-top auto;
        margin-bottom: 5px;

        img{
            width: 50px;
        }        
    }
    #cards-container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1900px;        
        margin: 0 auto;
    }
</style>