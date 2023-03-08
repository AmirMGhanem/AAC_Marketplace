<template>
    <div class="container mx-auto py-8">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/3 mb-4 md:mb-0">
                <img class="w-full rounded-lg" :src="$auth.user.profile_picture" alt="Profile Picture">
            </div>
            <div class="md:w-2/3">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ $auth.user.user_name }}</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <p class="text-gray-900">{{ $auth.user.user_email }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                        Role 
                    </label>
                    <p class="text-gray-900">{{ $auth.user.user_role_id }}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="bio">
                        Bio
                    </label>
                    <p class="text-gray-900">{{ $auth.user.bio }}</p>
                </div>
                <div class="mb-4">
                    <a href="/profile/edit" class="text-blue-600 hover:text-blue-800 font-bold">Edit Profile</a>
                </div>
                <div>
                    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" @click="$auth.logout()">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        $auth() {
            return this.$store.state.auth
        }
    }
}
</script>
  
<style scoped>
/* Add custom styling for your profile component here */
</style>
  