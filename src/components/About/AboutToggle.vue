<template>
    <div id="aboutToggle">
        <ul>
            <li v-for="(category,index) in categories" :key="index"><a @click="changeCategory(index)">{{ category.name }}</a></li>
        </ul>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
      name: 'AboutToggle',
      props: ['categories'],
      methods: {
          changeCategory(index) {
              this.$emit('changed', index)
          }
      },
    }
</script>

<style lang="scss" scoped>
#aboutToggle {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    background-color: black;
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: space-around;
        height: 10%;
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
    

}

</style>