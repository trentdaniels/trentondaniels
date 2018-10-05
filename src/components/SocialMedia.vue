<template>
    <div id="social-media">
      <ul class="links">
        <li><img src="@/assets/Logo.png" class="logo" />
        <li v-for="link in links" :key="link.id" class="link">
            <a :href="link.url" target="_blank">
                <img :src="link.img" />
            </a>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'SocialMedia',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['links'])
    }
}
</script>

<style lang="scss" scoped>
#social-media {
    display:flex;
    justify-content: center;
    
    .links {
        width: 50%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-items: center;
        margin: 0;
        padding: 0;
        justify-content: center;
        transition: width .3s ease-in-out;
        li {
            list-style: none;
            img {
                width: 60%;
            }
            a {
                img {
                    width: 60%;
                }
            }
            
            
        }
        &:hover {
            width: 70%;
        }
    }
}

</style>
