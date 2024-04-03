<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');

const invalidLengthPStyle = {
    color: 'red',
};

const disabledButtonStyle = {
    backgroundColor: 'darkgrey',
    cursor: 'not-allowed',
    color: 'aliceblue',
};

const enabledButtonStyle = {
    backgroundColor: '#d88fff',
    cursor: 'pointer',
    color: 'aliceblue',
};

function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateName(name: string): boolean {
    return name.length > 4;
}

function validateMessage(message: string): boolean {
    return message.length <= 500;
}

function submitForm() {
    if (!validateEmail(email.value)) {
        alert('Invalid email');
        return;
    }
    if (!validateName(name.value)) {
        alert('Name must be at least 5 characters');
        return;
    }
    if (!validateMessage(message.value)) {
        alert('Message must be less than 500 characters');
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
                <p 
                    :style="message.length > 500 ? invalidLengthPStyle : {}"
                >{{ message.length }}/500</p>
                <a-button 
                    @click="submitForm"
                    type="primary"
                    :disabled="!name || !email || !message"
                    :style="!name || !email || !message ? disabledButtonStyle : enabledButtonStyle"
                >
                Submit</a-button>
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
    background-color: #36383c;
}

textarea {
    height: 200px;
    resize: none;
}


button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem !important;
    height: 3.3rem;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-radius: 0.5rem;
    border: none;
}

@media screen and (max-width: 1024px){
    .contact-form-container {
        padding: 60px;
    }

    form {
        width: 100%;
    }
}

</style>