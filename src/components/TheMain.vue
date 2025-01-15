<script setup>
import MainSection from '@/components/MainSection.vue'
import MainAbout from '@/components/MainAbout.vue'
import LinkItem from '@/components/LinkItem.vue'
import MainSkillsList from '@/components/MainSkillsList.vue'
import MainExperienceList from '@/components/MainExperienceList.vue'
import MainCoolProjectList from '@/components/MainCoolProjectList.vue'
import MainCertificationsList from '@/components/MainCertificationsList.vue'
import MainCertProjectList from '@/components/MainCertProjectList.vue'
</script>

<template>
  <main class="main">
    <MainSection>
      <template #title>About Me</template>
      <template #default>
        <MainAbout />

        <MainSkillsList />
      </template>
    </MainSection>

    <MainSection>
      <template #title>Experience</template>
      <template #default
        ><MainExperienceList />

        <div>
          <LinkItem href="/resume.pdf" isBold isResponsive="">View Résumé</LinkItem>
        </div>
      </template>
    </MainSection>

    <MainSection>
      <template #title>Projects</template>
      <template #default>
        <MainCoolProjectList />
      </template>
    </MainSection>

    <MainSection>
      <template #title>Certifications</template>
      <template #default>
        <MainCertificationsList />
      </template>
    </MainSection>

    <MainSection>
      <template #title>Certification Projects</template>
      <template #default>
        <MainCertProjectList />
      </template>
    </MainSection>
  </main>
</template>

<style scoped>
.main {
  text-align: left;
  padding: 8rem 0;
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .main {
    padding-top: 0;
  }
}
@media only screen and (max-width: 768px) {
  .main {
    gap: 6rem;
  }
}
@media only screen and (max-width: 500px) {
  .main {
    gap: 5rem;
  }
}
</style>
