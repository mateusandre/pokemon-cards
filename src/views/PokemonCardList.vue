<script>
import PokemonCard from './../components/PokemonCard'
import Carousel from './../components/Carousel'

export default {
    name: 'PokemonCardList',
    data(){
        return {
            isMobileDevice: this.$isMobile()
        }
    },
    computed: {
        visualizationComponent(){
            return this.isMobileDevice ? 'Carousel' : 'PokemonCard'
        },
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
        Carousel
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

                if (bottomOfWindow) {
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
            <img alt="Vue logo" src="../assets/pokeball.png">
            <h1>Pokémon Cards</h1>
            <input type="text" @keyup="searchCards" v-model="query" placeholder="Search by card name...">
        </header>
        <section id="cards-container">
            <component v-for="card in cards" :key="card.id" v-bind:pokemon="card" :is="visualizationComponent"></component>
        </section>
        <h1 v-if="loading">Carregando...</h1>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../scss/_variables.scss";

    $header-height: 60px;
    $cards-container-margin-top: calc(#{$header-height} + 50px);

    header{        
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: $primary-color;
        width: 100%;
        height: $header-height;
        padding: 10px;
        top: 0;

        img{
            width: 30px;
            margin-right: 10px;
        }

        h1{
            color: #fff;
            margin-right: 20px;
        }

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
    #cards-container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1900px;        
        margin: $cards-container-margin-top auto;
    }
</style>