<script setup>
import LinkItem from '@/components/LinkItem.vue'
import HeaderContactIcons from '@/components/HeaderContactIcons.vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import HeaderAbout from '@/components//HeaderAbout.vue'
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-child-wrapper">
        <HeaderTitle />

        <HeaderAbout />

        <div class="github-link-wrapper">
          <LinkItem href="https://github.com/CanBoztepe" isButton isBold>My Github</LinkItem>
        </div>
      </div>

      <HeaderContactIcons />
    </div>
  </header>
</template>

<style scoped>
.header {
  flex: 4;
  text-align: left;
  /* bo
  rder: 1px solid grey; */
}
.header-wrapper {
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  height: 100vh;
  top: 0;
  /* border: 1px solid grey; */
}

.header-child-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.github-link-wrapper {
  margin-bottom: 0.3rem;
}

@media only screen and (max-width: 1024px) {
  .header-wrapper {
    justify-content: flex-start;
    gap: 1rem;
    height: auto;
  }
}
@media only screen and (max-width: 768px) {
}
</style>
