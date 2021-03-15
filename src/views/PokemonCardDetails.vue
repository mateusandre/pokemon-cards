<script>
import PokemonType from './../components/PokemonType'
import Loading from './../components/Loading'
import PokemonAttacks from './../components/PokemonAttacks'
import List from './../components/List'
import CustomButton from './../components/CustomButton'

export default {
    computed: {
        card(){
            return this.$store.state.card
        },
        loading(){
            return this.$store.state.loading
        }
    },
    components: {
        PokemonType,
        Loading,
        PokemonAttacks,
        List,
        CustomButton
    },
    mounted(){
        this.$store.dispatch('getCard', this.$route.params.id)
    },
    methods: {
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div>
        <div class="back-button-container">
            <CustomButton @click="goBack">&larr; Back to list</CustomButton>
        </div>
        <Loading />
        <div id="card-details">


            <section v-if="card && !loading">
                <img :src="card.images.large" alt="">

                <section>
                    <h3><strong>Name:</strong> {{ card.name }}</h3>
                    <div><strong>Id:</strong> {{ card.id }}</div>
                    <p><strong>types:</strong> <PokemonType v-for="type in card.types" :type="type" :key="type" /></p>
                    <div v-if="card.resistances">
                        <strong>Resistances</strong> 
                        <list :list="card.resistances">
                            <template v-slot:default="slotProps">
                                <strong>{{ slotProps.item.type}}:</strong> {{ slotProps.item.value }}                    
                            </template>
                        </list>
                    </div>
                    <div v-if="card.weaknesses">
                        <strong>Weaknesses:</strong>
                        <list :list="card.weaknesses">
                            <template v-slot:default="slotProps">
                                <strong>{{ slotProps.item.type}}:</strong> {{ slotProps.item.value }}                    
                            </template>
                        </list>
                        </div>
                    <div v-if="card.attacks">
                        <p><strong>Attacks</strong></p>
                        <PokemonAttacks :attacks="card.attacks" />
                    </div>
                </section>

            </section>        
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../scss/_variables.scss";

    .back-button-container{
        padding: 15px 15px 0 15px;
        text-align: left;
    }
    #card-details{
        padding: 0 15px 15px 15px;
        text-align: left;

        h1{
            text-align: center;
            margin-left: -35px;
        }

        .list{
            margin: 10px 0;
        }

        section{
            
            img{
                width: 100%;
                margin-top: 25px;
                background-color: $primary-color;
                border-radius: 20px;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktop: */
        #card-details{
            text-align: center;
            section{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;

                img{
                    width: 40%;
                    max-width: 400px;
                    margin-top: 20px;
                }

                section{                    
                    flex-direction: column;
                    margin-left: 1%;
                    padding: 20px;
                    width: 40%;
                    background-color: #fafafa;
                    border: 1px solid #cecece;
                    border-radius: 20px;
                    text-align: left;
                }
            }
        }
    }
</style>