<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar  navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">admin:header</a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/admin">Admin</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" to="/admin/order">Order</NuxtLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div>
    Layout: admin
    <slot />
  </div>
  <footer>
    admin:footer
  </footer>
</template>

<style lang="scss">
@import "assets/stylesheets/all.scss";
</style>
