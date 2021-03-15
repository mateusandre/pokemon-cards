<script>
export default {
    props: {
        type: {
            type: String
        }
    }
}
</script>

<template>
    <span>{{type}}</span>
</template>

<style lang="scss" scoped>
    span{
        background-color: #00BFA5;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 12px;
        margin: 5px;
    }
</style>