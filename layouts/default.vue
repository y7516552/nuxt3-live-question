<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">default:header</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link"  to="/admin">Admin</NuxtLink>
        </li>
      </ul>
    </div>
      </div>
    </nav>
  </header>
  <div>
    Layout: default
    <slot />
  </div>
  <footer>
    default:footer
  </footer>
</template>

<style lang="scss">
</style>
