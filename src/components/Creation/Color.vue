<template>
    <div id="color">
        <div class="title">
            <h3>Colors</h3>
        </div>
        <div 
            class="color-card" 
            v-for="(color,index) in colors"
            :key="index"
        >
            <div class="color-block border" :style="{backgroundColor: color.hexCode}">
                <h4 :class="{black: color.hexCode === '#FFFFFF'}">{{ color.hexCode }}</h4>
            </div>
            <div class="color-description">
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
#color {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    height: 45%;
    .color-card {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        height: 150px;
        width: 90%;
        .color-block {
            box-sizing: border-box;
            width: 45%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .color-description {
            width: 55%;
            padding-left: 15px;
            p {
                text-align: left;
            }
        }
    }
    .title {
        width: 90%;
        h3 {
            text-align: left;
        }
    }
}

.border {
    border: black 3px solid;
}
h4 {
    color: white;
}
.black {
    color: black;
}

</style>