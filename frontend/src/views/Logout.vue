<template>
    <div class="logout">
        <h1>Logged out successfully</h1>
    </div>
</template>

<script setup lang="ts">
import { logout } from "../services/auth";
import { onMounted } from "vue";
import router from "../router/index";

async function logoutUser() {
    await logout();
    router.push("/login"); // Go homepage
    alert("Logged out succesfully");
}

onMounted(logoutUser);
</script>
