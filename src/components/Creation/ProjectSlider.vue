<template>
    <div id="project-slider">
        <div v-if="currentSlide === index" v-for="(solution,index) in solutions" :key="index" class="slide">
            <div class="image-container">
                <img :src="solution.image" :alt="solution.descriptions"/>
            </div>
            <div class="controls">
                <a v-for="num in solutions.length" :key="num" @click="currentSlide = num - 1"  :class="{bold: num - 1 === currentSlide}">{{ num }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slider',
        props: ['solutions'],
        data() {
            return {
                currentSlide: 0
            }
        },
        mounted() {
            setInterval(() => {
                this.currentSlide ++
                if (this.currentSlide === this.solutions.length) {
                    this.currentSlide = 0
                }
            }, 5000)
        }
        
    }
</script>

<style lang="scss" scoped>
#project-slider {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    background-color: black;
    justify-content: center;
    .slide {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        flex: 0 0 80%;
        .image-container {
            overflow: hidden;
            flex-basis: 80%;
            display: flex;
            justify-content: center;
            img {
                align-self: center;
                width: 80%;
                object-fit: cover;
                object-position: 50% 50%;
            }
        }
        .controls {
            flex-basis: 20%;
            width: 80%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            a {
                background-color: black;
                color: white;
                height: 25px;
                width: 25px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                &.bold {
                    font-weight: bold;
                    color: black;
                    background: white;
                    padding: 2px;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>