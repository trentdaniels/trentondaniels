<template>
    <div id="type">
        <div 
            class="media" 
            v-for="(type,index) in typefaces"
            :key="index"
            :style="{fontFamily: type.font}"
        >
            <div class="media-left">
                <div class="type-block">TYPE</div>
            </div>
            <div class="media-content">
                <div class="content">
                    <p><strong>{{ type.name }}</strong></p>
                    <p>{{ type.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Type',
        props: ['typefaces']
    }
</script>

<style lang="scss" scoped>
@import '../../../node_modules/bulma/sass/utilities/_all.sass';
@import '../../../node_modules/bulma/sass/components/media.sass';
#type {
    padding: 20px;
    width: 100%;
    .media {
        .type-block {
            position: relative;
            display: flex;
            widtH: 90px;
            height: 90px;
            margin-right: 1rem;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: black;
            font-size: 1.5rem;
            font-weight: bold;
        }
        p {
            margin-top: 0;
        }
    }
    
}
</style>