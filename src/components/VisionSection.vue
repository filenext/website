<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  IconBulb,
  IconHeartHandshake,
  IconLock,
  IconRocket,
  IconTarget,
  IconWorld,
} from '@tabler/icons-vue'
import { valueIcons } from '@/config'

const { t, tm } = useI18n()
const values = tm('vision.values') as { title: string; desc: string }[]
const highlights = tm('vision.highlights') as { label: string; text: string }[]

const valueIconMap = {
  open: IconWorld,
  secure: IconLock,
  simple: IconBulb,
  evolve: IconRocket,
} as const
</script>

<template>
  <section id="vision" class="nf-section nf-section--screen nf-vision">
    <div class="nf-container">
      <div class="nf-section__head nf-section__head--center">
        <span class="nf-section__eyebrow">{{ t('vision.eyebrow') }}</span>
        <h2 class="nf-section__title">{{ t('vision.title') }}</h2>
        <p class="nf-section__desc">{{ t('vision.desc') }}</p>
      </div>

      <div class="nf-vision__top">
        <article class="nf-vision-card nf-vision-card--vision">
          <div class="nf-vision-card__icon">
            <IconTarget size="28" stroke="1.5" />
          </div>
          <span class="nf-vision-card__label">{{ t('vision.visionLabel') }}</span>
          <h3>{{ t('vision.visionHeadline') }}</h3>
          <p>{{ t('vision.visionDesc') }}</p>
        </article>

        <article class="nf-vision-card nf-vision-card--mission">
          <div class="nf-vision-card__icon">
            <IconHeartHandshake size="28" stroke="1.5" />
          </div>
          <span class="nf-vision-card__label">{{ t('vision.missionLabel') }}</span>
          <h3>{{ t('vision.missionHeadline') }}</h3>
          <p>{{ t('vision.missionDesc') }}</p>
        </article>
      </div>

      <div class="nf-vision__values">
        <article v-for="(v, i) in values" :key="v.title" class="nf-value-card">
          <div class="nf-value-card__icon">
            <component :is="valueIconMap[valueIcons[i]]" size="22" stroke="1.75" />
          </div>
          <h4>{{ v.title }}</h4>
          <p>{{ v.desc }}</p>
        </article>
      </div>

      <div class="nf-vision__highlights">
        <article v-for="item in highlights" :key="item.label" class="nf-vision-highlight">
          <span class="nf-vision-highlight__label">{{ item.label }}</span>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
