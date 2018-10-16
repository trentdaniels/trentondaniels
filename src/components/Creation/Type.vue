<template>
    <div id="type">
        <div 
            class="typeface" 
            v-for="(typeface, index) in typefaces" 
            :key="index"
        >
            <h4>{{ typeface.name }}</h4>
            <p>ABCDEFG</p>
            <p>{{ typeface.description }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Type',
        props: ['typefaces']
    }
</script>

<style scoped>

</style>