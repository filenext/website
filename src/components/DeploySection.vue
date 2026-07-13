<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { IconBook, IconCopy, IconExternalLink } from '@tabler/icons-vue'
import { deploySnippet, prodDeploySnippet, siteConfig } from '@/config'

const { t, tm } = useI18n()
const copied = ref(false)
const copiedProd = ref(false)
const steps = tm('deploy.steps') as { title: string; desc: string }[]
const prodStack = tm('deploy.prodStack') as { title: string; desc: string }[]
const prodSteps = tm('deploy.prodSteps') as { title: string; desc: string }[]

const deployDesc = t('deploy.desc', {
  domain: siteConfig.domain,
  appHost: 'app.nextfile.cn',
  cmd: './scripts/upgrade.sh',
})

async function copySnippet(text: string, which: 'dev' | 'prod') {
  try {
    await navigator.clipboard.writeText(text)
    if (which === 'dev') {
      copied.value = true
      setTimeout(() => { copied.value = false }, 2000)
    } else {
      copiedProd.value = true
      setTimeout(() => { copiedProd.value = false }, 2000)
    }
  } catch {
    /* ignore */
  }
}
</script>

<template>
  <section id="deploy" class="nf-section nf-section--screen nf-deploy">
    <div class="nf-container">
      <div class="nf-deploy__card">
        <div class="nf-deploy__content">
          <span class="nf-section__eyebrow nf-section__eyebrow--light">{{ t('deploy.eyebrow') }}</span>
          <h2 class="nf-deploy__title">{{ t('deploy.title') }}</h2>
          <p class="nf-deploy__desc">{{ deployDesc }}</p>

          <div class="nf-deploy__actions">
            <a :href="siteConfig.docsUrl" class="nf-btn nf-btn--white" target="_blank" rel="noopener">
              <IconBook :size="18" />
              {{ t('deploy.docs') }}
            </a>
            <a :href="siteConfig.appUrl" class="nf-btn nf-btn--outline-white">
              <IconExternalLink :size="18" />
              {{ t('deploy.demo') }}
            </a>
          </div>
        </div>

        <div class="nf-deploy__code">
          <div class="nf-deploy__code-head">
            <span>{{ t('deploy.codeTitle') }}</span>
            <button type="button" class="nf-deploy__copy" @click="copySnippet(deploySnippet, 'dev')">
              <IconCopy :size="16" />
              {{ copied ? t('deploy.copied') : t('deploy.copy') }}
            </button>
          </div>
          <pre><code>{{ deploySnippet }}</code></pre>
        </div>
      </div>

      <div class="nf-deploy__prod">
        <div class="nf-deploy__prod-head">
          <h3 class="nf-deploy__steps-title">{{ t('deploy.prodTitle') }}</h3>
          <p class="nf-deploy__prod-desc">{{ t('deploy.prodDesc') }}</p>
        </div>
        <div class="nf-deploy__prod-grid">
          <article v-for="item in prodStack" :key="item.title" class="nf-deploy__prod-card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </article>
        </div>
        <div class="nf-deploy__code nf-deploy__code--prod">
          <div class="nf-deploy__code-head">
            <span>{{ t('deploy.prodCodeTitle') }}</span>
            <button type="button" class="nf-deploy__copy" @click="copySnippet(prodDeploySnippet, 'prod')">
              <IconCopy :size="16" />
              {{ copiedProd ? t('deploy.copied') : t('deploy.copy') }}
            </button>
          </div>
          <pre><code>{{ prodDeploySnippet }}</code></pre>
        </div>
        <div class="nf-deploy__steps nf-deploy__steps--prod">
          <article v-for="(step, i) in prodSteps" :key="step.title" class="nf-deploy__step">
            <span class="nf-deploy__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </article>
        </div>
      </div>

      <div>
        <h3 class="nf-deploy__steps-title">{{ t('deploy.stepsTitle') }}</h3>
        <div class="nf-deploy__steps">
          <article v-for="(step, i) in steps" :key="step.title" class="nf-deploy__step">
            <span class="nf-deploy__step-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
