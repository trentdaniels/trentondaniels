<template>
    <div id="me">
        <div class="details">
            <h1>Me.</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatibus magnam alias. Asperiores nihil illum mollitia dignissimos ipsa quidem minus eveniet sequi provident placeat maiores excepturi sapiente quasi, ex aliquid.
                Aliquid quaerat nemo rerum debitis neque id, ducimus quod sunt dolorum voluptatum atque. Beatae exercitationem ut facilis consequatur placeat ipsum sed quia excepturi eveniet repudiandae, accusamus quis assumenda molestias accusantium.
                Nesciunt sapiente iure nam nemo ullam. Eos, error inventore quia laborum nam quos maxime commodi nihil vitae vero nesciunt reiciendis eius perferendis blanditiis. Fugit corrupti, maiores est aliquid accusantium commodi.
            </p>
        </div>
        <div class="button">
            <router-link to="/creations">Explore My Creations</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Me',
    }
</script>

<style lang="scss" scoped>
    #project {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }
</style>