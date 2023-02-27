<template>
    <div class="signin container">
        <form action="POST" class="signin">
            <div class="signin-card">
                <h1>Sign In</h1>
                <div>
                    <label for="username">Username</label>
                    <input type="username" v-model="username" name="username" id="username" placeholder="Username">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password" id="password" placeholder="Password">
                </div>
                <div class="forgot-password">
                    <nuxt-link to="#">Forgot Password?</nuxt-link>
                    

                </div>

                <div class="rememebr-me">
                    <input type="checkbox" name="remember-me" id="remember-me">
                    <label for="remember-me">Remember Me</label>
                </div>
                

                <button type="submit" @click.prevent="login">Sign In</button>
            </div>

        </form>
    </div>
</template>

<script >


export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log('login clicked ' + this.username + ' ' + this.password);
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

.forgot-password{
    margin-left:100px;
    margin-top: 10px;
}

.signin {
    text-align: center;

}
</style>