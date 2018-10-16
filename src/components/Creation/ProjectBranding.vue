<template>
    <div id="project-branding">
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
#project-branding {
    display: flex;
    flex-flow: row wrap;
    background-color: black;
}
    
</style>