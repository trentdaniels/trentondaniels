<template>
    <div class="contact">
        <app-navigation></app-navigation>
        <h1>This is the contact page.</h1>
    </div>
    
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
    name: 'Contact',
    components: {
        'app-navigation': Navigation
    }
}
</script>

