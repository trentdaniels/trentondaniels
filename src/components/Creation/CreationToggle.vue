<template>
    <div id="creationToggle">
        <h4>{{ name }}</h4>
        <ul>
            <li v-for="(section, index) in sections" :key="index"><a @click="changeSection(index)" :class="{bold: index === currentSection}">{{section}}</a></li>
        </ul>
    </div>
</template>

<script>
    
    export default {
        name: 'CreationToggle',
        props: ['sections','name', 'currentSection'],
        methods: {
            changeSection(index) {
                this.$emit('changed', index)
            }
        }
    }
</script>

<style lang="scss" scoped>
#creationToggle {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    background-color: black;
    h4 {
        text-align: center;
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: space-around;
        height: 20%;
        text-align: center;
        li {
            list-style-type: none;
            a {
                color: white;
                &:hover {
                    cursor: pointer;
                }
            }
            
        }
    }
    h4 {
        color: white;
    }
    a {
        color: white; 
    }
    .bold {
        font-weight: bold;
    }
}

</style>