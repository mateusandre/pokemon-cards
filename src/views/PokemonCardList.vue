<script>
import PokemonCard from './../components/PokemonCard'
import PokemonCarousel from './../components/PokemonCarousel'
import Loading from './../components/Loading'
import SearchCard from './../components/SearchCard'

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
        PokemonCarousel,
        Loading,
        SearchCard
    },
    mounted(){
        window.addEventListener("resize", this.checkIfIsMobileDevice)
        this.$store.dispatch('getCards')
        this.scroll();
    },
    methods: {        
        checkIfIsMobileDevice(){            
            this.isMobileDevice = this.$isMobile()
        },        
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                console.log(bottomOfWindow)
                if (bottomOfWindow && !this.isMobileDevice && this.$route.path == '/' ) {
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
            <SearchCard />
        </header>        
        <section id="logo">
            <img alt="Vue logo" src="../assets/pokeball-color.png">
            <h1>Pokémon Cards</h1>
        </section>

        <section v-if="isMobileDevice" key="mobile-cards">
            <pokemon-carousel></pokemon-carousel>
        </section>
        <section id="cards-container" v-else key="desktop-cards">
            <pokemon-card v-for="(card, index) in cards" :key="index" v-bind:card="card"></pokemon-card>
        </section>

        <section v-if="cards.length == 0 && !loading">
            <h3>Sorry. we can't find any card.</h3>
        </section>

    <Loading v-if="!isMobileDevice" />
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
            width: 70%;
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