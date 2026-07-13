<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  IconAiAgent,
  IconCloud,
  IconFiles,
  IconFileTypeDoc,
  IconLink,
  IconPackage,
  IconPlug,
  IconRefresh,
  IconShieldCheck,
} from '@tabler/icons-vue'
import { featureIcons } from '@/config'

const { t, tm } = useI18n()
const items = tm('features.items') as { title: string; desc: string; points?: string[] }[]

const iconMap = {
  files: IconFiles,
  cloud: IconCloud,
  sync: IconRefresh,
  ai: IconAiAgent,
  shield: IconShieldCheck,
  plugin: IconPlug,
  share: IconLink,
  office: IconFileTypeDoc,
  pickup: IconPackage,
} as const
</script>

<template>
  <section id="features" class="nf-section nf-section--screen nf-features">
    <div class="nf-container">
      <div class="nf-section__head">
        <span class="nf-section__eyebrow">{{ t('features.eyebrow') }}</span>
        <h2 class="nf-section__title">{{ t('features.title') }}</h2>
        <p class="nf-section__desc">{{ t('features.desc') }}</p>
      </div>

      <div class="nf-features__grid">
        <article v-for="(f, i) in items" :key="f.title" class="nf-feature-card">
          <div class="nf-feature-card__icon">
            <component :is="iconMap[featureIcons[i]]" size="24" stroke="1.75" />
          </div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <ul v-if="f.points?.length" class="nf-feature-card__points">
            <li v-for="point in f.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
