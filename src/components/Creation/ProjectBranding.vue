<template>
    <div id="projectBranding">
        <color :colors="project.colors"></color>
        <type :typefaces="project.typefaces"></type>
    </div>
</template>

<script>
    import Color from '@/components/Creation/Color.vue'
    import Type from '@/components/Creation/Type.vue'
    export default {
        name: "ProjectBranding",
        components: {
            Color,
            Type
        },
        props: ['project']

    }
</script>

<style lang="scss" scoped>
#projectBranding {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
}
    
</style>