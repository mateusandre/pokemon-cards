<template>
    <button @click="$emit('click')"><slot></slot></button>
</template>

<style lang="scss" scoped>
    @import "./../scss/_variables.scss";

    button{
        background-color: #fff;
        border: 1px solid $primary-color;
        font-size: 15px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        background-color: $primary-color;
        color: #fff;
    }
</style>