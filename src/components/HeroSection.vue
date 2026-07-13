<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  IconBrandGithub,
  IconCloudComputing,
  IconRocket,
} from '@tabler/icons-vue'
import HeroTechVisual from '@/components/HeroTechVisual.vue'
import { siteConfig } from '@/config'

const { t, tm } = useI18n()
const heroFeatures = tm('hero.features') as string[]
</script>

<template>
  <section class="nf-hero">
    <div class="nf-hero__bg" aria-hidden="true">
      <div class="nf-hero__bg-image" />
      <div class="nf-hero__bg-overlay" />
    </div>

    <div class="nf-container nf-hero__inner">
      <div class="nf-hero__content">
        <div class="nf-hero__badge">
          <IconCloudComputing :size="16" />
          <span>{{ t('hero.badge') }}</span>
        </div>

        <h1 class="nf-hero__title">
          {{ t('hero.title1') }}
          <br />
          <span class="nf-hero__title-accent">{{ t('hero.title2') }}</span>
        </h1>

        <p class="nf-hero__desc">{{ t('hero.desc') }}</p>

        <ul class="nf-hero__features">
          <li v-for="(item, i) in heroFeatures" :key="i">{{ item }}</li>
        </ul>

        <div class="nf-hero__actions">
          <a :href="siteConfig.appUrl" class="nf-btn nf-btn--primary nf-btn--lg">
            <IconRocket :size="20" />
            {{ t('hero.tryNow') }}
          </a>
          <a :href="siteConfig.githubUrl" class="nf-btn nf-btn--outline-light nf-btn--lg" target="_blank" rel="noopener">
            <IconBrandGithub :size="20" />
            {{ t('hero.viewSource') }}
          </a>
        </div>
      </div>

      <div class="nf-hero__visual">
        <HeroTechVisual />
      </div>
    </div>
  </section>
</template>
