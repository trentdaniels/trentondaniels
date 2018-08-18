<template>
    <div class="form">
        <h1>Let's link.</h1>
        <form id="form">
            <div>
                <label for="firstName">First Name: </label>
                <input type="text" id="firstName" v-model="userData.firstName" placeholder="ex: John Doe"/>
                <p>{{ userData.firstName }}</p>
            </div>
            <div>
                <label for="lastName">Last Name: </label>
                <input type="text" id="lastName" v-model="userData.lastName" placeholder="ex: John Doe"/>
                <p>{{ userData.lastName }}</p>
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="email" id="email" v-model="userData.email" placeholder="email@email.com"/>
                <p>{{ userData.email }}</p>
            </div>
            <div>
                <label for="description">Message: </label>
                <textarea id="description" v-model="userData.description" placeholder="I want to work together.."></textarea>
            </div>
            <div>
                <button type="submit">Link Up</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data: function () {
        return {
            
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                description: ''
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
textarea {
    white-space: pre;
}
</style>

