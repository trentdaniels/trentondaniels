<template>
    <div id="aboutInfo">
        <h1>{{ project.name }}</h1>
        <p v-for="detail in project.details" :key="detail">{{ detail }}</p>
    </div>
</template>

<script>
    export default {
        name: 'AboutInfo',
        props: ['project']
    }
</script>

<style lang="scss" scoped>
#aboutInfo {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    p {
        width: 80%;
    }
}
</style>