<template>
  <div class="login">
    <div class="login-form-container">
      <form name="loginForm" v-on:submit.prevent="loginSubmit(user,pwd)" >

        <div class="field">
          <p class="control has-icons-left has-icons-right" >
            <input class="input" v-model="user" type="text" placeholder="User Name" required>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" v-model="pwd" type="password" placeholder="Password" required alt="This is password ">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" type="submit">
              Login
            </button>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button" type="reset">
              Register
            </button>
          </p>
        </div>
      </form> 
    </div>
    <div class="loginStatus">
      <span>Status  : {{status}}</span>
      <p>-------------</p>
      <p>User : {{username}}</p>
      <p>Role : {{rolename}}</p>
      <p>App  : {{appname}}</p>
    </div>
  </div>
</template>

<script src="../js/login.js">
</script>

