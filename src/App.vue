<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      <a href="https:kubapietruszewski.pl">KubaPietruszewski.pl</a>
    </footer>
  </div>
</template>
