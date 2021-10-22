<template>
    <div class="login">
        <h1>Login Page</h1>
        <form method="post" @submit.prevent="loginUser">
            <input
                v-model="state.username"
                type="text"
                placeholder="username"
            />
            <input
                v-model="state.password"
                type="password"
                placeholder="password"
            />
            <input type="submit" />
        </form>
    </div>
</template>

<script setup lang="ts">
import { login } from "../services/auth";
import { reactive } from "vue";
import router from "../router/index";

const state = reactive({
    username: "",
    password: "",
});

async function loginUser() {
    try {
        const { username, password } = state;
        const res = await login({ username, password });
        router.push("/"); // Go homepage
        alert("Logged in");
    } catch (e) {
        alert("Oops, invalid credentials");
    }
}
</script>
