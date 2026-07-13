<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SiteBrand from '@/components/SiteBrand.vue'
import { siteConfig } from '@/config'

const { t } = useI18n()
</script>

<template>
  <footer class="nf-footer">
    <div class="nf-container">
      <div class="nf-footer__grid">
        <div class="nf-footer__brand">
          <SiteBrand size="md" show-tagline />
          <p class="nf-footer__desc">{{ t('footer.desc') }}</p>
        </div>

        <div class="nf-footer__col">
          <h4>{{ t('footer.product') }}</h4>
          <a :href="siteConfig.appUrl">{{ t('footer.tryNow') }}</a>
          <a href="/#ai-intro">{{ t('nav.aiIntro') }}</a>
          <a href="/#features">{{ t('footer.features') }}</a>
          <a href="/#vision">{{ t('footer.vision') }}</a>
        </div>

        <div class="nf-footer__col">
          <h4>{{ t('footer.resources') }}</h4>
          <a :href="siteConfig.githubUrl" target="_blank" rel="noopener">GitHub</a>
          <a :href="siteConfig.docsUrl" target="_blank" rel="noopener">{{ t('footer.docs') }}</a>
          <RouterLink to="/changelog">{{ t('nav.changelog') }}</RouterLink>
          <a href="/#deploy">{{ t('footer.quickDeploy') }}</a>
        </div>

        <div class="nf-footer__col">
          <h4>{{ t('footer.contact') }}</h4>
          <a href="mailto:cxhyun@126.com">cxhyun@126.com</a>
          <span class="nf-footer__domain">{{ siteConfig.domain }}</span>
        </div>
      </div>

      <div class="nf-footer__bottom">
        <span>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</span>
        <span>{{ t('footer.builtWith') }}</span>
      </div>
    </div>
  </footer>
</template>
