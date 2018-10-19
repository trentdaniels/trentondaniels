<template>
    <div id="brandingInfo">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BrandingInfo',
        props: ['branding']
    }
</script>

<style lang="scss" scoped>
#brandingInfo {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    p {
        width: 80%;
    }
}
</style>