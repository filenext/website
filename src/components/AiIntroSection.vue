<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  IconArrowRight,
  IconBrain,
  IconCloud,
  IconMessageChatbot,
  IconShieldLock,
} from '@tabler/icons-vue'
import { aiIntroIcons } from '@/config'

const { t, tm } = useI18n()

const traditional = tm('aiIntro.traditional') as { label: string; items: string[] }
const nextfile = tm('aiIntro.nextfile') as { label: string; items: string[] }
const pillars = tm('aiIntro.pillars') as { title: string; desc: string }[]

const pillarIconMap = {
  understand: IconBrain,
  dialogue: IconMessageChatbot,
  aggregate: IconCloud,
  sovereign: IconShieldLock,
} as const
</script>

<template>
  <section id="ai-intro" class="nf-section nf-section--screen nf-ai-intro">
    <div class="nf-container">
      <div class="nf-ai-intro__head">
        <span class="nf-section__eyebrow">{{ t('aiIntro.eyebrow') }}</span>
        <h2 class="nf-ai-intro__title">{{ t('aiIntro.title') }}</h2>
        <p class="nf-ai-intro__subtitle">{{ t('aiIntro.subtitle') }}</p>
        <p class="nf-ai-intro__lead">{{ t('aiIntro.lead') }}</p>
      </div>

      <div class="nf-ai-intro__compare">
        <h3 class="nf-ai-intro__compare-title">{{ t('aiIntro.compareTitle') }}</h3>
        <div class="nf-ai-intro__compare-grid">
          <article class="nf-ai-intro__compare-card nf-ai-intro__compare-card--old">
            <span class="nf-ai-intro__compare-label">{{ traditional.label }}</span>
            <ul>
              <li v-for="(item, i) in traditional.items" :key="i">{{ item }}</li>
            </ul>
          </article>

          <div class="nf-ai-intro__compare-arrow" aria-hidden="true">
            <IconArrowRight size="28" />
          </div>

          <article class="nf-ai-intro__compare-card nf-ai-intro__compare-card--new">
            <span class="nf-ai-intro__compare-label">{{ nextfile.label }}</span>
            <ul>
              <li v-for="(item, i) in nextfile.items" :key="i">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>

      <div class="nf-ai-intro__pillars">
        <article v-for="(pillar, i) in pillars" :key="pillar.title" class="nf-ai-intro__pillar">
          <div class="nf-ai-intro__pillar-icon">
            <component :is="pillarIconMap[aiIntroIcons[i]]" size="22" stroke="1.75" />
          </div>
          <h4>{{ pillar.title }}</h4>
          <p>{{ pillar.desc }}</p>
        </article>
      </div>

      <p class="nf-ai-intro__closing">{{ t('aiIntro.closing') }}</p>
    </div>
  </section>
</template>
