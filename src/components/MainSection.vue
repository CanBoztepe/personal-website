<script setup></script>

<template>
  <section class="main-section">
    <div class="main-section-title-wrapper">
      <!-- <span class="main-section-icon">■</span> -->

      <h2 class="main-section-title">
        <slot name="title"></slot>
      </h2>

      <div class="title-border"></div>
    </div>

    <div class="main-section-content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.main-section {
  color: var(--color-text-light-muted);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* .main-section-title-wrapper {
  display: flex;
  align-items: center;
} */

.main-section-title {
  color: var(--color-text-light);
  margin-bottom: -0.5rem;
}

.title-border {
  margin-top: 0.5rem;
  width: 70%;
  border-bottom: 1px solid var(--color-text-light);
}

/* .main-section-icon {
  font-size: 1rem;
  margin-right: 0.5rem;
  position: relative;
  top: 4px;
} */

.main-section-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
