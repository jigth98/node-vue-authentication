<template>
    <div class="home">
        <div v-if="state.isAuthorized">
            <h1>Welcome!</h1>
            <p>{{ state.message }}</p>
            <img alt="Hand full of energy" src="../assets/found.jpeg" />
        </div>
        <div v-else>
            <h1>Unauthorized</h1>
            <p>You must be logged in to view this page</p>
            <img alt="Unauthorized" src="../assets/unauthorized.jpeg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import client from "../lib/client";
import { reactive, onMounted } from "vue";

const state = reactive({
    message: "",
    isAuthorized: false,
});

async function loadHome() {
    try {
        const home = await client.get("home");
        state.message = "Welcome Arthur, you've found the Holy Grail";
        state.isAuthorized = true;
    } catch (e) {
        state.message = "Unauthorized";
        state.isAuthorized = false;
    }
}

onMounted(loadHome);
</script>
