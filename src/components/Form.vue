<template>
    <div class="form">
        <slot></slot>
        <form id="form">
            <div v-if="currentInput === 1">
                <h3>First Name:</h3>
                <input type="text" id="firstName" v-model="userData.firstName" placeholder="ex: John Doe"/>
                <p>{{ userData.firstName }}</p>
                <button @click="nextInput()">Next</button>
            </div>
            <div v-if="currentInput === 2">
                <h3>Last Name:</h3>
                <input type="text" id="lastName" v-model="userData.lastName" placeholder="ex: John Doe"/>
                <p>{{ userData.lastName }}</p>
                <button @click="nextInput()">Next</button>
            </div>
            <div v-if="currentInput === 3">
                <h3>Email:</h3>
                <input type="email" id="email" v-model="userData.email" placeholder="email@email.com"/>
                <p>{{ userData.email }}</p>
                <button @click="nextInput()">Next</button>
            </div>
            <div v-if="currentInput === 4">
                <h3>Message:</h3>
                <textarea id="description" v-model="userData.description" placeholder="I want to work together.."></textarea>
                <button @click="nextInput()">Next</button>
            </div>
            <div v-if="currentInput === 5">
                <button type="submit" @click.prevent="alertSubmitted()">Link Up</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      currentInput: 1,
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    nextInput () {
      this.currentInput++
      if (this.currentInput > 5) {
        this.currentInput = 1
      }
    },
    alertSubmitted () {
      alert('Submitted!')
      this.nextInput()
    }

  }
}
</script>

<style lang="scss" scoped>
.contact {
    textarea {
        white-space: pre;
        display: block;
        width: 40%;
        padding: 10px;
        border-color: black;

    }

    input {
        border-color: black;
        padding: 10px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
}

</style>
