<template>
    <div id="social-media">
      <ul class="links">
        <li><router-link to="/"><img src="@/assets/Logo.png" class="logo" /></router-link></li>
        <li v-for="link in links" :key="link.id" class="link">
            <a :href="link.url" target="_blank">
                <img :src="link.img" />
            </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
    data() {
        return {
            links: [
                { 
                    id: 1,
                    url: 'https://www.github.com/trentdaniels',
                    img: require('@/assets/Github.png')
                },
                { 
                    id: 2,
                    url: 'https://www.behance.net/trentondaniels',
                    img: require('@/assets/Behance.png')
                },
                {
                    id: 3,
                    url: 'https://www.linkedin.com/in/trentondaniels/',
                    img: require('@/assets/LinkedIn.png')
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
#social-media {
    display:flex;
    justify-content: center;
    .links {
        flex-basis: 70%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 0;
        padding: 0;
        justify-content: center;
        transition: width .3s ease-in-out;
        li {
            flex: 0 0 20%;
            list-style: none;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 35px;
                    transition: width .3s ease-in-out;
                    &:hover {
                        width: 40px;
                    }
                }
            }
        }
    }
}

</style>
