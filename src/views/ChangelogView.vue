<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { IconArrowLeft } from '@tabler/icons-vue'

const { t, tm } = useI18n()
const entries = tm('changelog.entries') as {
  version: string
  date: string
  title: string
  items: { tag: string; text: string }[]
}[]

function tagLabel(tag: string) {
  return t(`changelog.tags.${tag}`)
}
</script>

<template>
  <div class="nf-changelog-page">
    <div class="nf-container">
      <RouterLink to="/" class="nf-changelog-back">
        <IconArrowLeft size="18" />
        {{ t('changelog.backHome') }}
      </RouterLink>

      <header class="nf-changelog-header">
        <h1>{{ t('changelog.title') }}</h1>
        <p>{{ t('changelog.desc') }}</p>
      </header>

      <div class="nf-changelog-list">
        <article v-for="entry in entries" :key="entry.version" class="nf-changelog-entry">
          <div class="nf-changelog-entry__meta">
            <span class="nf-changelog-entry__version">{{ entry.version }}</span>
            <time class="nf-changelog-entry__date">{{ entry.date }}</time>
          </div>
          <h2>{{ entry.title }}</h2>
          <ul>
            <li v-for="(item, i) in entry.items" :key="i">
              <span class="nf-changelog-tag" :class="`nf-changelog-tag--${item.tag}`">
                {{ tagLabel(item.tag) }}
              </span>
              {{ item.text }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>
