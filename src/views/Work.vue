<template>
    <div class="work">
        <app-navigation></app-navigation>
        <h1>This is the projects page</h1>
    </div>
    
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
    name: 'Work',
    components: {
        'app-navigation': Navigation
    }
}
</script>

