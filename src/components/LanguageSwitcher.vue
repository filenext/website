<script setup lang="ts">
import { useSiteLocale } from '@/composables/useSiteLocale'
import { IconLanguage } from '@tabler/icons-vue'

const { locale, options, switchLocale } = useSiteLocale()

function onChange(e: Event) {
  switchLocale((e.target as HTMLSelectElement).value as 'zh-CN' | 'en-US')
}
</script>

<template>
  <div class="nf-lang">
    <IconLanguage size="16" class="nf-lang__icon" />
    <select
      class="nf-lang__select"
      :value="locale"
      aria-label="Language"
      @change="onChange"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>
