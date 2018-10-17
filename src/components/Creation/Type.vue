<template>
    <div id="type">
        <div 
            class="typeface-card" 
            v-for="(typeface, index) in typefaces" 
            :key="index"
            :style="{fontFamily: typeface.font}"
            :class="{black: index % 2 !== 0}"
        >
            <h2>{{ typeface.name }}</h2>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
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

<style lang="scss" scoped>
#type {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50%;
    .typeface-card {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        flex: 1 1 0;
        h2 {
            text-align: left;
            width: 85%;
        }
        p {
            text-align: left;
            width: 85%;
            overflow-wrap: break-word;
        }
    }
    .black {
        color: white;
        background-color: black;
    }
}

</style>