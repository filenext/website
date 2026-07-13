<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { IconCloud } from '@tabler/icons-vue'

withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    showTagline?: boolean
    light?: boolean
  }>(),
  { size: 'md', showTagline: false, light: false },
)

const { t } = useI18n()
const logoSize = { sm: 22, md: 28, lg: 36 }
const nameClass = computed(() => ({ sm: 'nf-brand__name--sm', md: '', lg: 'nf-brand__name--lg' }))
</script>

<template>
  <a href="/" class="nf-brand" :class="[`nf-brand--${size}`, light && 'nf-brand--light']">
    <span class="nf-brand__mark">
      <IconCloud :size="logoSize[size]" stroke="1.75" />
    </span>
    <span class="nf-brand__copy">
      <span class="nf-brand__name" :class="nameClass[size]">NextFile</span>
      <span v-if="showTagline" class="nf-brand__tagline">{{ t('brand.tagline') }}</span>
    </span>
  </a>
</template>
