<script>

import PokemonType from './PokemonType'

export default {
    name: 'PokemonCard',
    props: {
        card: {
            type: Object
        }
    },
    components: {
        PokemonType
    },
    methods: {
        viewCard(id){
            this.$router.push(`/card/${id}/details`)
        }
    }
}
</script>


<template>
    <div v-if="card" class="card" @click="viewCard(card.id)">
        
        <img :src="card.images.small" alt="">
        <h3>{{card.name}}</h3>
        <p>{{ card.id }}</p>
        <div>
            <PokemonType v-for="type in card.types" :type="type" :key="type" />
        </div>
    </div>
</template>

<style lang="scss">
    @import "./../scss/_variables.scss";

    .card{
        width: 255px;
        margin: 15px;
        cursor: pointer;
        padding: 15px;        
        border-radius: 10px;
        text-align: left;
        background-color: #eee;

        img{
            height: 343px;
            background-color: $primary-color;
            border-radius: 15px;
            padding: 0;
            width: 100%;
        }
    }

    .card:hover{
        background-color: $secondary-color;
        color: #fff;
    }

</style>