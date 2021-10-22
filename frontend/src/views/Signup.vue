<script setup lang="ts">
import { reactive } from "vue";
import { signup, login } from "../services/auth";
import router from "../router/index";

const state = reactive({
    username: "",
    password: "",
});

async function createAccount() {
    try {
        const { username, password } = state;
        await signup({ username, password });
        await login({ username, password });
        router.push("/");
        alert("account has been created");
    } catch (e) {
        alert(
            "Couln't create account, either the username was taken or there was a connection error"
        );
    }
}
</script>

<template>
    <div class="signup">
        <h1>Signup page</h1>
        <form method="post" @submit.prevent="createAccount">
            <input
                type="text"
                v-model="state.username"
                placeholder="username"
            />
            <input
                type="password"
                v-model="state.password"
                placeholder="password"
            />
            <input type="submit" />
        </form>
    </div>
</template>
