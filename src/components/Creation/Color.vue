<template>
    <div id="color">
        <div 
            class="media" 
            v-for="(color,index) in colors"
            :key="index"
        >
            <div class="media-left">
                <div :style="{backgroundColor: color.hexCode}" class="color-block" :class="{border: color.hexCode === '#FFFFFF'}"></div>
            </div>
            <div class="media-content">
                <div class="content">
                    <p><strong>{{ color.hexCode }}</strong></p>
                    <p>{{ color.description }}</p>
                </div>
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
@import '../../../node_modules/bulma/sass/utilities/_all.sass';
@import '../../../node_modules/bulma/sass/components/media.sass';
#color {
    padding: 20px;
    .color-block {
        position: relative;
        display: block;
        widtH: 90px;
        height: 90px;
        margin-right: 1rem;
    }
    .media {
        p {
            margin-top: 0;
        }
    }
    
    .border {
        border: .5px solid lightgrey;
    }
}
</style>