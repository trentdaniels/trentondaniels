<template>
    <div class="img-container">
      <img alt="Project Image" v-for="project in projects" :key="project.id" :src="project.image" v-if="projectNumber === project.id">
    </div>
</template>

<script>
export default {
    name: 'ImageContainer',
    props: {
        projects: Array,
        projectNumber: Number,
    }
}
</script>

