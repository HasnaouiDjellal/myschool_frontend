<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const username = ref('') 
const password = ref('')
const errorMessage = ref('') // for errors

async function login() {
  errorMessage.value = '' // reset errors
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/admin/login/', {
      username: username.value,    
      password: password.value,
    })
    // Save tokens
    localStorage.setItem('access_token', response.data.tokens.access)
    localStorage.setItem('refresh_token', response.data.tokens.refresh)

    // Redirect after success
    router.push('/dashboard')
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.error) {
      errorMessage.value = err.response.data.error
    } else {
      errorMessage.value = 'Login failed. Please try again.'
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Almaahed My School</span>
      </div>

      <!-- Error message -->
      <div v-if="errorMessage" class="mt-4 p-2 text-center text-white bg-red-500 rounded-md">
        {{ errorMessage }}
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Username</span>
          <input
            v-model="username"
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          >
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            v-model="password"
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          >
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
