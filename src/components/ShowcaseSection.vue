<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  IconFile,
  IconFolder,
  IconLayoutDashboard,
  IconMessageChatbot,
} from '@tabler/icons-vue'

const { t, tm } = useI18n()
const activeTab = ref('files')

const tabs = computed(() => tm('showcase.tabs') as { key: string; label: string }[])
const files = computed(() => tm('showcase.files') as {
  breadcrumb: string
  nameColumn: string
  sizeColumn: string
  modifiedColumn: string
  toolbar: string[]
  files: string[]
  sizes: string[]
  modified: string[]
})
const ai = computed(() => tm('showcase.ai') as {
  title: string
  status: string
  messages: { role: string; text: string }[]
  input: string
  hints: string[]
})
const admin = computed(() => tm('showcase.admin') as {
  title: string
  cards: { label: string; value: string }[]
  menu: string[]
  activity: { title: string; time: string }[]
})

const tabIcons: Record<string, typeof IconFile> = {
  files: IconFolder,
  ai: IconMessageChatbot,
  admin: IconLayoutDashboard,
}
</script>

<template>
  <section id="showcase" class="nf-section nf-section--screen nf-showcase">
    <div class="nf-container">
      <div class="nf-section__head nf-section__head--center">
        <span class="nf-section__eyebrow">{{ t('showcase.eyebrow') }}</span>
        <h2 class="nf-section__title">{{ t('showcase.title') }}</h2>
        <p class="nf-section__desc">{{ t('showcase.desc') }}</p>
      </div>

      <div class="nf-showcase__panel">
        <div class="nf-showcase__tabs">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            type="button"
            class="nf-showcase__tab"
            :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            <component :is="tabIcons[tab.key]" size="18" />
            {{ tab.label }}
          </button>
        </div>

        <div class="nf-showcase__screen">
          <!-- 文件管理 -->
          <div v-show="activeTab === 'files'" class="nf-mock nf-mock--files">
            <div class="nf-mock__topbar">
              <span class="nf-mock__dots"><i /><i /><i /></span>
              <span class="nf-mock__path">{{ files.breadcrumb }}</span>
            </div>
            <div class="nf-mock__toolbar">
              <span v-for="btn in files.toolbar" :key="btn" class="nf-mock__tool">{{ btn }}</span>
            </div>
            <div class="nf-mock__table-head nf-mock__table-head--3">
              <span>{{ files.nameColumn }}</span>
              <span>{{ files.sizeColumn }}</span>
              <span>{{ files.modifiedColumn }}</span>
            </div>
            <div
              v-for="(name, i) in files.files"
              :key="name"
              class="nf-mock__row nf-mock__row--3"
              :class="{ 'nf-mock__row--folder': name.endsWith('/') }"
            >
              <span class="nf-mock__file-name">
                <IconFolder v-if="name.endsWith('/')" size="16" />
                <IconFile v-else size="16" />
                {{ name }}
              </span>
              <span class="nf-mock__file-size">{{ files.sizes[i] }}</span>
              <span class="nf-mock__file-size">{{ files.modified[i] }}</span>
            </div>
          </div>

          <!-- AI 对话 -->
          <div v-show="activeTab === 'ai'" class="nf-mock nf-mock--ai">
            <div class="nf-mock__topbar">
              <span class="nf-mock__dots"><i /><i /><i /></span>
              <div class="nf-mock__path-wrap">
                <span class="nf-mock__path">{{ ai.title }}</span>
                <span class="nf-mock__status">{{ ai.status }}</span>
              </div>
            </div>
            <div class="nf-mock__chat">
              <div
                v-for="(msg, i) in ai.messages"
                :key="i"
                class="nf-mock__bubble"
                :class="`nf-mock__bubble--${msg.role}`"
              >
                {{ msg.text }}
              </div>
            </div>
            <div class="nf-mock__hints">
              <span v-for="hint in ai.hints" :key="hint" class="nf-mock__hint">{{ hint }}</span>
            </div>
            <div class="nf-mock__input">{{ ai.input }}</div>
          </div>

          <!-- 管理后台 -->
          <div v-show="activeTab === 'admin'" class="nf-mock nf-mock--admin">
            <div class="nf-mock__admin-layout">
              <aside class="nf-mock__sidebar">
                <div class="nf-mock__sidebar-brand">NextFile</div>
                <div
                  v-for="(item, i) in admin.menu"
                  :key="item"
                  class="nf-mock__sidebar-item"
                  :class="{ active: i === 0 }"
                >
                  {{ item }}
                </div>
              </aside>
              <div class="nf-mock__admin-main">
                <h3 class="nf-mock__admin-title">{{ admin.title }}</h3>
                <div class="nf-mock__admin-cards">
                  <div v-for="card in admin.cards" :key="card.label" class="nf-mock__admin-card">
                    <span class="nf-mock__admin-card-value">{{ card.value }}</span>
                    <span class="nf-mock__admin-card-label">{{ card.label }}</span>
                  </div>
                </div>
                <div class="nf-mock__admin-split">
                  <div class="nf-mock__admin-chart">
                    <div v-for="n in 12" :key="n" class="nf-mock__bar" :style="{ height: `${30 + (n % 5) * 14}%` }" />
                  </div>
                  <div class="nf-mock__activity">
                    <div v-for="item in admin.activity" :key="item.title" class="nf-mock__activity-item">
                      <span class="nf-mock__activity-title">{{ item.title }}</span>
                      <span class="nf-mock__activity-time">{{ item.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
