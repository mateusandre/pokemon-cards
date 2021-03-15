<script>
import PokemonType from './PokemonType'
import List from './List'

export default {
    props: {
        attacks: {
            type: Array
        }
    },
    data(){
        return {
            attackSelected: null
        }
    },
    components: {
        PokemonType,
        List
    },
    methods: {
        attackDetails(attack){
            this.attackSelected = attack
            this.$modal.show('attack-details')
        }
    }
}
</script>

<template>
    <div>
        <List @click="attackDetails" :list="attacks" :clickable="true">
            <template v-slot:default="slotProps">
                {{slotProps.item.name}}
            </template>
        </List>

        <modal name="attack-details" :adaptive="true" :clickToClose="true" width="90%" :scrollable="true">
             <div slot="top-right">
                <button @click="$modal.hide('attack-details')">
                    X
                </button>
            </div>
            <div v-if="attackSelected" class="modal-body">
                <h1>{{ attackSelected.name }}</h1>
                <p v-id="attackSelected.text">{{ attackSelected.text }}</p>
                <p v-if="attackSelected.damage"><strong>Damage:</strong> {{ attackSelected.damage }}</p>
                <p v-if="attackSelected.convertedEnergyCost"><strong>Converted Energy Cost:</strong> {{ attackSelected.convertedEnergyCost }}</p>
                <div v-if="attackSelected.cost">
                    <strong>Cost</strong>
                    <div class="costs">
                        <pokemon-type v-for="(cost, index) in attackSelected.cost" :type="cost" :key="index" />
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>    

    .modal-body{
        padding: 15px;
        .costs{
            margin-top: 20px;
        }
    }
    
</style>