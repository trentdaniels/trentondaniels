<template>
    <div class="form">
        <h1>Let's link.</h1>
        <form id="form">
            <label>What's your name?</label>
            <input type="text" id="name" v-model="name" placeholder="ex: John Doe"/>
            <p>{{ name }}</p>
            <label>Email?</label>
            <input type="email" id="email" v-model="email" placeholder="email@email.com"/>
            <p>{{ email }}</p>
            <label>What can I do for you?</label>
            <textarea v-model="description" placeholder="I want to work together.."></textarea><br>
            <button type="submit">Link Up</button>
            
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data: function () {
        return {
            name: '',
            email: '',
            description: ''
        }
    }
}
</script>

