<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { IconCheck, IconMail } from '@tabler/icons-vue'
import { siteConfig } from '@/config'

const { t, tm } = useI18n()
const plans = tm('pricing.plans') as {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
}[]
const faq = tm('pricing.faq') as { q: string; a: string }[]

function ctaHref(index: number) {
  if (index === 2) return 'mailto:cxhyun@126.com'
  if (index === 1) return siteConfig.docsUrl
  return siteConfig.githubUrl
}

function ctaLabel(index: number) {
  if (index === 2) return t('pricing.cta.contact')
  if (index === 1) return t('pricing.cta.docs')
  return t('pricing.cta.free')
}
</script>

<template>
  <section id="pricing" class="nf-section nf-section--screen nf-pricing">
    <div class="nf-container">
      <div class="nf-section__head nf-section__head--center">
        <span class="nf-section__eyebrow">{{ t('pricing.eyebrow') }}</span>
        <h2 class="nf-section__title">{{ t('pricing.title') }}</h2>
        <p class="nf-section__desc">{{ t('pricing.desc') }}</p>
      </div>

      <div class="nf-pricing__grid">
        <article
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="nf-pricing-card"
          :class="{ 'nf-pricing-card--popular': i === 1 }"
        >
          <span v-if="i === 1" class="nf-pricing-card__badge">{{ t('pricing.popular') }}</span>
          <h3 class="nf-pricing-card__name">{{ plan.name }}</h3>
          <div class="nf-pricing-card__price">
            <span class="nf-pricing-card__amount">{{ plan.price }}</span>
            <span class="nf-pricing-card__period">{{ plan.period }}</span>
          </div>
          <p class="nf-pricing-card__desc">{{ plan.desc }}</p>
          <ul class="nf-pricing-card__features">
            <li v-for="feat in plan.features" :key="feat">
              <IconCheck size="16" />
              {{ feat }}
            </li>
          </ul>
          <a
            :href="ctaHref(i)"
            class="nf-btn"
            :class="i === 1 ? 'nf-btn--primary' : 'nf-btn--ghost'"
            :target="i === 2 ? undefined : '_blank'"
            :rel="i === 2 ? undefined : 'noopener'"
          >
            <IconMail v-if="i === 2" size="18" />
            {{ ctaLabel(i) }}
          </a>
        </article>
      </div>

      <div class="nf-pricing__faq">
        <h3 class="nf-pricing__faq-title">{{ t('pricing.faqTitle') }}</h3>
        <div class="nf-pricing__faq-grid">
          <article v-for="item in faq" :key="item.q" class="nf-pricing__faq-item">
            <h4>{{ item.q }}</h4>
            <p>{{ item.a }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
