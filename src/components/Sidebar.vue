<template>
  <div class="sidebar">
    <div class="sidebar-title">Event Assistant</div>
    <nav>
      <ul>
        <li><router-link to="/event-alert">Event Alert</router-link></li>
        <li><router-link to="/mission-schedule">Mission Schedule</router-link></li>
        <li><router-link to="/chat">Chat</router-link></li>
      </ul>
    </nav>
    <footer class="sidebar-footer">
      <p>Powered by Vue</p>
      <div class="logo-placeholder">[Logo]</div>
    </footer>
  </div>
</template>

<script setup>
// Component logic will go here
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #eeeef0;
  padding: 20px;
  height: 100vh; /* Full height */
  display: flex; /* Added to allow footer positioning */
  flex-direction: column; /* Stack nav and footer vertically */
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0,0,0,0.04);
}

nav {
  flex-grow: 1; /* Allows nav to take available space, pushing footer down */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
}

a.router-link-active {
  font-weight: bold;
}

.sidebar-footer {
  margin-top: auto; /* Pushes footer to the bottom if using flex */
  padding-top: 20px;
  border-top: 1px solid #ddd;
  font-size: 0.8em;
  text-align: center;
}

.sidebar-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 1px;
}

.logo-placeholder {
  margin-top: 5px;
  font-style: italic;
  color: #777;
}
</style>
