<script setup>
import { defineProps } from 'vue'

defineProps({
  isButton: {
    type: Boolean,
    default: false,
  },
  isBold: {
    type: Boolean,
    default: false,
  },
  isGrey: {
    type: Boolean,
    default: false,
  },
  isResponsive: {
    type: Boolean,
    default: false,
  },
  isProjectLink: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    class="link-item"
    :class="{
      'link-item-button': isButton,
      'link-item-bold': isBold,
      'link-item-grey': isGrey,
      'link-item-responsive': isResponsive,
      'link-item-project': isProjectLink,
    }"
  >
    <slot></slot>
    <IconMdiArrowTopRight
      class="arrow-icon"
      :class="{
        'arrow-icon-project': isProjectLink,
      }"
    />
  </a>
</template>

<style scoped>
.link-item {
  display: inline-block;
  color: var(--color-primary);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.link-item-bold {
  font-weight: bold;
}

.link-item-grey {
  color: var(--color-text-light-muted);
}

/* only applied if isButton flag is applied in the parent */
.link-item-button {
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  padding-right: 1rem;
  border: 2px solid var(--color-primary);
  border-radius: 1.5rem;
}

.link-item-button:hover,
.link-item-button:focus {
  box-shadow: 0 0px 12px #ff471a;
}

.arrow-icon {
  margin-left: 0.2rem;
  transform: translate(-4px, 4px);
  transition: transform 0.2s ease;
}

.link-item:hover .arrow-icon,
.link-item:focus .arrow-icon {
  transform: translate(0px, 0px);
}

.link-item-project {
  color: blue;
  text-decoration: underline;
}

.arrow-icon-project {
  display: none;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
  .link-item-responsive {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 500px) {
  .link-item-responsive {
    font-size: 0.8rem;
  }
}
</style>
