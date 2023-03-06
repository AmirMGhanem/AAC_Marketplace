<template>
    <div class="signin container">
        <form @submit.prevent="userLogin" class="signin-card">
            <h1>Sign In</h1>
            <div>
                <label for="username">Username</label>
                <input type="text" v-model="login.user_login" id="username" placeholder="Username" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="login.user_password" id="password" placeholder="Password" required>
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                user_login: '',
                user_password: ''
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
.signin-card {
    background-color: #FFB727;
    width: 50%;
    height: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    padding-bottom: 30px;
    margin-top: 100px;
}

h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #3f3f3f;
}


input {
    margin-top: 50px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #3f3f3f;
}


label {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #3f3f3f;
    margin-right: 30px;
}

button {
    margin-top: 30px;
    width: 40%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #3f3f3f;
    background-color: #fff;
    cursor: pointer;
}

.forgot-password {
    margin-left: 100px;
    margin-top: 10px;
}

.signin {
    text-align: center;

}
</style>