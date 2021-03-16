<script>
export default {
    props: {
        list: {
            type: Array
        },
        clickable: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div class="list">
        <div class="list-item" :class="{'clickable': clickable }" @click="$emit('click', item)" v-for="(item, index) in list" :key="index">
            <slot :item="item"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $border: 1px solid #ccc;

    .list-item{
        padding: 20px 10px;
        border: $border;
        border-bottom: none;
    }
    .list-item.clickable{
        cursor: pointer;
    }
    .list-item.clickable:hover{
        background-color: #eee;
    }
    .list-item:first-child{
        border-radius: 5px 5px 0 0;
    }
    .list-item:last-child{
        border-bottom: $border;
        border-radius: 0 0 5px 5px;
    }
</style>