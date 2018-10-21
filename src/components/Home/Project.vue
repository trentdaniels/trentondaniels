<template>
    <div id="project">
        <div class="details">
            <h1>{{ project.name }}</h1>
            <p>{{ project.shortDescription }}</p>
            <router-link :to="{name: 'Creation', params:{ id: project.id}}" exact>Explore Project</router-link>
        </div>
        <!-- <div class="button">
            <router-link :to="{name: 'Creation', params:{ id: project.id}}" exact>Explore Project</router-link>
        </div> -->
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
        align-items: center;
        .details {
            display: flex;
            width: 85%;
            flex-flow: column nowrap;
            align-items: center;
            text-align: center;
            h1 {
                margin: 0;
            }
            
        }
    }
</style>