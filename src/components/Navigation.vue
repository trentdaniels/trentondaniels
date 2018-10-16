<template>
    <div id="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Me</router-link>
        <router-link to="/creations">Creations</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="scss" scoped>
#navigation {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    a {
        color: black;
    }
}

</style>