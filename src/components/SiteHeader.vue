<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { IconMenu2, IconX } from '@tabler/icons-vue'
import SiteBrand from '@/components/SiteBrand.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { navItems, siteConfig } from '@/config'

const { t } = useI18n()
const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const isSubPage = computed(() => route.path !== '/')
const headerClass = computed(() => ({
  'nf-header--scrolled': scrolled.value || isSubPage.value,
  'nf-header--top': !scrolled.value && !isSubPage.value,
}))

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nf-header" :class="headerClass">
    <div class="nf-container nf-header__inner">
      <SiteBrand size="md" />

      <nav class="nf-nav" :aria-label="t('nav.menu')">
        <template v-if="route.path === '/'">
          <a v-for="link in navItems" :key="link.href" :href="link.href" class="nf-nav__link">
            {{ t(link.key) }}
          </a>
        </template>
        <RouterLink to="/changelog" class="nf-nav__link" :class="{ active: route.path === '/changelog' }">
          {{ t('nav.changelog') }}
        </RouterLink>
      </nav>

      <div class="nf-header__actions">
        <LanguageSwitcher />
        <a :href="siteConfig.githubUrl" class="nf-btn nf-btn--ghost nf-btn--sm" target="_blank" rel="noopener">
          {{ t('nav.github') }}
        </a>
        <a :href="siteConfig.appUrl" class="nf-btn nf-btn--primary nf-btn--sm">
          {{ t('nav.tryNow') }}
        </a>
        <button type="button" class="nf-header__menu-btn" :aria-label="t('nav.menu')" @click="menuOpen = !menuOpen">
          <IconMenu2 v-if="!menuOpen" :size="22" />
          <IconX v-else :size="22" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="nf-mobile-nav">
      <template v-if="route.path === '/'">
        <a
          v-for="link in navItems"
          :key="link.href"
          :href="link.href"
          class="nf-mobile-nav__link"
          @click="closeMenu"
        >
          {{ t(link.key) }}
        </a>
      </template>
      <RouterLink to="/changelog" class="nf-mobile-nav__link" @click="closeMenu">
        {{ t('nav.changelog') }}
      </RouterLink>
      <div class="nf-mobile-nav__lang">
        <LanguageSwitcher />
      </div>
      <a :href="siteConfig.appUrl" class="nf-btn nf-btn--primary" @click="closeMenu">{{ t('nav.tryNow') }}</a>
    </div>
  </header>
</template>
