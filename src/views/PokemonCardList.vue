<script>
import PokemonCard from './../components/PokemonCard'
import Carousel from './../components/Carousel'

export default {
    name: 'PokemonCardList',
    data(){
        return {
            isMobileDevice: this.$isMobile(),
            searchTerm: null
        }
    },
    computed: {
        visualizationComponent(){
            return this.isMobileDevice ? 'Carousel' : 'PokemonCard'
        },
        pokemons(){
            return this.$store.getters.pokemons
        },
        page(){
            return this.$store.state.page
        },
        loading(){ return this.$store.state.loading }
    },
    components: {
        PokemonCard,
        Carousel
    },
    created(){
        window.addEventListener("resize", this.checkIfIsMobileDevice)
        this.$store.dispatch('getPokemons')
    },
    methods: {        
        checkIfIsMobileDevice(){            
            this.isMobileDevice = this.$isMobile()
        },
        searchPokemons(){
            this.$store.dispatch('getPokemons', { page: 1, name: this.searchTerm })
        }
    } 
}

</script>

<template>
    <div>
        <header>
            <img alt="Vue logo" src="../assets/pokeball.png">
            <h1>Pokémon Cards</h1>
            <input type="text" @keyup="searchPokemons" v-model="searchTerm" placeholder="Search by card name...">
        </header>
        <section id="cards-container">
            <component v-for="pokemon in pokemons" :key="pokemon.id" v-bind:pokemon="pokemon" :is="visualizationComponent"></component>
            <h1 v-if="loading">Carregando...</h1>
        </section>
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
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        max-width: 1800px;        
        margin: $cards-container-margin-top auto;
        padding: 20px;
    }
</style>