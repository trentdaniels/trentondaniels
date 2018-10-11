<template>
    <div id="project">
        <div class="details">
            <h1>{{ project.name }}</h1>
            <p>{{ project.shortDescription }}</p>
        </div>
        <div class="button">
            <router-link :to="{name: 'Creation', params:{ id: project.id}}" exact>Explore Project</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: ['project']
    }
</script>

<style lang="scss" scoped>
    #project {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        .details {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            p {
                width: 85%;
            }
        }
    }
</style>