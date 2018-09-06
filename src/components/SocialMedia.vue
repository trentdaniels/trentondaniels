<template>
    <div id="social-media">
      <ul class="links">
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
                    url: 'https://www.twitter.com/DanielTrents',
                    img: require('@/assets/Twitter.png')
                },
                { 
                    id: 2,
                    url: 'https://www.github.com/trentdaniels',
                    img: require('@/assets/Github.png')
                },
                { 
                    id: 3,
                    url: 'https://www.behance.net/trentondaniels',
                    img: require('@/assets/Behance.png')
                },
                { 
                    id: 4,
                    url: 'https://www.instagram.com/trentedaniels/',
                    img: require('@/assets/Instagram.png')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#social-media {
    background-color: black;
    width: 20%;
    display:flex;
    align-content: center;
    justify-content: center;
    transition: width .5s ease-in-out;
    z-index: 5;
    .links {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        padding: 0;
        justify-content: center;
        margin: 0;
        .link {
            list-style: none;
            padding: 10px;
        }
        img {
            width: 60%;
        }
    }
    &:hover {
        width: 30%;
        img {
            width: 60%;
        }
    }
}

</style>
