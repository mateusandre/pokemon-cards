<script>
export default {
    props: {
        card: {
            type: Object
        }
    },
    methods: {
        viewCard(id){
            alert(id)
        }
    }
}
</script>


<template>
    <div class="card" @click="viewCard(card.id)">
        
        <img :src="card.images.large" alt="">
        <h3>{{card.name}}</h3>
        <p>{{ card.id }}</p>
        <div>
            <span class="pokemon-type" v-for="tipo in card.types" :key="tipo">{{ tipo }}</span>
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

        .pokemon-type{
            background-color: #00BFA5;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
            font-size: 12px;
        }
    }

    .card:hover{
        background-color: $secondary-color;
        color: #fff;
    }

</style>