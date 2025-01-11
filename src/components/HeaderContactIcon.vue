<script setup></script>

<template>
  <a class="header-contact-icon" target="_blank" rel="noopener noreferrer"><slot></slot></a>
</template>

<style scoped>
.header-contact-icon {
  color: var(--color-text-light-muted);
  display: flex;
  align-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
}
.header-contact-icon:hover {
  color: var(--color-text-light);
}
</style>
