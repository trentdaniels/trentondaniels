<template>
    <div id="type">
        <div class="title">
            <h3>Typefaces</h3>
        </div>
        <div 
            class="typeface-card" 
            v-for="(typeface, index) in typefaces" 
            :key="index"
        >
            <div class="typeface-font" :style="{fontFamily: typeface.font}">
                <h2 >{{ typeface.name }}</h2>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            </div>
            <div class="typeface-description">
                <p>{{ typeface.description }}</p>
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
#type {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 45%;
    width: 100%;
    justify-content: space-around;
    h2, p {
        text-align: left;
    }
    .title {
        width: 90%;
        h3 {
            text-align: left;
        }
    }
    .typeface-card {
        width: 90%;
        height: 100px;
        display: flex;
        align-items: flex-start;
        .typeface-font {
            width: 45%;
            overflow-wrap: break-word;
            h2 {
                margin-top: 0;
                font-size: 1.7rem;
                margin-bottom: 10px;
            }
            p {
                margin: 0;
                widtH: 80%;
            }
        }
        .typeface-description {
            width: 55%;
            padding-left: 15px;
            p {
                margin: 0;
            }
        }
    }
}

</style>