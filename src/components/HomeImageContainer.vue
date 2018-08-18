<template>
    <div class="img-container">
        <transition name="fade" mode="out-in">
            <img alt="Project Image" v-for="project in projects" :key="project.id" :src="project.image" v-if="projectNumber === project.id">
        </transition>
    </div>
</template>

<script>
export default {
    name: 'HomeImageContainer',
    props: {
        projects: Array,
        projectNumber: Number,
    }
}
</script>

<style lang="scss" scoped>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity .5s;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
}
</style>
