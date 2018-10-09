<template>
    <div id="me">
        <div class="details">
            <template v-if="category === 0">
                <h1>Me.</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatibus magnam alias. Asperiores nihil illum mollitia dignissimos ipsa quidem minus eveniet sequi provident placeat maiores excepturi sapiente quasi, ex aliquid.
                    Aliquid quaerat nemo rerum debitis neque id, ducimus quod sunt dolorum voluptatum atque. Beatae exercitationem ut facilis consequatur placeat ipsum sed quia excepturi eveniet repudiandae, accusamus quis assumenda molestias accusantium.
                    Nesciunt sapiente iure nam nemo ullam. Eos, error inventore quia laborum nam quos maxime commodi nihil vitae vero nesciunt reiciendis eius perferendis blanditiis. Fugit corrupti, maiores est aliquid accusantium commodi.
                </p>
                <div class="button">
                    <router-link to="/creations">Explore</router-link>
                </div>
            </template>
            <template v-else-if="category === 1">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatibus magnam alias. Asperiores nihil illum mollitia dignissimos ipsa quidem minus eveniet sequi provident placeat maiores excepturi sapiente quasi, ex aliquid.
                    Aliquid quaerat nemo rerum debitis neque id, ducimus quod sunt dolorum voluptatum atque. Beatae exercitationem ut facilis consequatur placeat ipsum sed quia excepturi eveniet repudiandae, accusamus quis assumenda molestias accusantium.
                    Nesciunt sapiente iure nam nemo ullam. Eos, error inventore quia laborum nam quos maxime commodi nihil vitae vero nesciunt reiciendis eius perferendis blanditiis. Fugit corrupti, maiores est aliquid accusantium commodi.
                </p>
                <h3>trentondaniels95@gmail.com</h3>
            </template>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Me',
        props: ['category']
    }
</script>

<style lang="scss" scoped>
    #me {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        .details {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            p {
                width: 80%;
            }
        }
    }
</style>