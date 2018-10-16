<template>
    <div id="color">
        <div 
            class="color" 
            v-for="(color,index) in colors"
            :key="index"
        >
            <div class="color-block" :style="{backgroundColor: color.hexCode}"></div>
            <div class="color-description">
                <h4>{{ color.hexCode }}</h4>
                <p>{{ color.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Color',
        props: ['colors']
    }
</script>

<style lang="scss" scoped>

</style>