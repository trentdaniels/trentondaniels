<template>
    <div>
        <color :colors="colors"></color>
        <type :typefaces="typefaces"></type>
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
        props: ['colors', 'typefaces']

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