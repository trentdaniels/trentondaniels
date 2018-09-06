<template>
    <div id="project-description">
        <div 
            v-for="project in projects" 
            :key="project.id" 
            v-if="project.id === currentProject"
            class="project"
        >
            <h1 class="title">{{ project.name }}</h1>
            <p class ="description">{{ project.shortDescription }}</p> 
            <slot></slot>     
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDescription',
    props: {
        projects: Array,
        currentProject: Number
    }
}
</script>

<style lang="scss" scoped>
    #project-description {
        color: black;
        width: 100%;
        background-color: white;
        z-index: 15;
        text-align: left;
        display: flex;
        justify-content: center;
        .project {
            width: 75%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;
        }
    }
</style>


