<template>
    <div id="logo">
      <router-link to="/">
        <h1>Trenton.</h1>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style lang="scss" scoped>
#logo {
    z-index: 10;
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
        h1 {
            color: white;
            text-align: center;
        }
    }
}
</style>