<template>
    <div id="color">
        <div 
            class="color-card" 
            v-for="(color,index) in colors"
            :key="index"
            :style="{backgroundColor: color.hexCode}"
        >
            <h2 :class="{black: color.hexCode === '#FFFFFF'}">{{ color.hexCode }}</h2> 
            <p :class="{black: color.hexCode === '#FFFFFF'}">{{ color.description }}</p> 
            <!-- <div class="color-block" :style="{backgroundColor: color.hexCode}">
                <h4 :class="{black: color.hexCode === '#FFFFFF'}">{{ color.hexCode }}</h4>
            </div> -->
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
#color {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 50%;
    .color-card {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1 1 0;
        h2 {
            text-align: left;
            width: 85%;
        }
        p {
            text-align: left;
            width: 85%;
        }
    }
}

h2,p {
    color: white;
}
.black {
    color: black;
}

</style>