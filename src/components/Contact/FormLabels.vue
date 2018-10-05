<template>
    <div id="formLabels">
        <p>Sums it up nice dontcha think?</p>
        <div class="field" v-for="label in labels" :key="label">
            <h1>{{ label }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormLabels',
        data() {
            return {
                labels: ['CREATE', 'INSPIRE', 'TOGETHER']
            }
        }
    }
</script>

<style lang="scss" scoped>
#formLabels {
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: black;
    p {
        color: white;
    }
    .field {
        h1 {
            color: white;
            font-size: 4rem;
        }
    }
}

</style>