<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function submitForm() {
    if (!validateEmail(email.value)) {
        alert('Invalid email');
        return;
    }
    console.log(name.value, email.value, message.value);
}

function clearForm() {
    name.value = '';
    email.value = '';
    message.value = '';
}


</script>

<template>
    <main>
        <div class="contact-form-container">
            <h1>Contact Me</h1>
            <form>
                <label for="name">Name:</label>
                <input v-model="name" type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input v-model="email" type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea v-model="message" id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
.contact-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    width: 600px;
    gap: 1rem;
}

label {
    font-size: 1.5rem;
}

input, textarea {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
}

textarea {
    height: 200px;
}

button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #61dafb;
    color: black;
    cursor: pointer;
}

button:hover {
    background-color: #282c34;
    color: white;
}

button:active {
    transform: scale(0.95);
}
</style>