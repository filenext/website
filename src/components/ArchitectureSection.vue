<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { IconCheck, IconMinus } from '@tabler/icons-vue'

const { t, tm } = useI18n()

type ArchStep = { step: string; title: string; desc: string; details: string[] }
type ArchMode = {
  name: string
  badge: string
  scene: string
  diagram: string[]
  pros: string[]
  cons: string[]
}

const steps = tm('arch.steps') as ArchStep[]
const single = tm('arch.single') as ArchMode
const multi = tm('arch.multi') as ArchMode
const compareRows = tm('arch.compareRows') as { label: string; single: string; multi: string }[]
</script>

<template>
  <section id="architecture" class="nf-section nf-section--screen nf-arch">
    <div class="nf-container">
      <div class="nf-arch__header">
        <span class="nf-section__eyebrow">{{ t('arch.eyebrow') }}</span>
        <h2 class="nf-section__title">{{ t('arch.title') }}</h2>
        <p class="nf-section__desc">{{ t('arch.desc') }}</p>
      </div>

      <!-- 四步流程 -->
      <div class="nf-arch__steps-block">
        <h3 class="nf-arch__block-title">{{ t('arch.stepsTitle') }}</h3>
        <ol class="nf-arch__steps">
          <li v-for="s in steps" :key="s.step" class="nf-arch__step">
            <span class="nf-arch__step-num">{{ s.step }}</span>
            <div class="nf-arch__step-body">
              <h4>{{ s.title }}</h4>
              <p class="nf-arch__step-desc">{{ s.desc }}</p>
              <ul class="nf-arch__step-details">
                <li v-for="(d, i) in s.details" :key="i">{{ d }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      <!-- 架构对比 -->
      <div class="nf-arch__compare-block">
        <div class="nf-arch__compare-head">
          <h3 class="nf-arch__block-title">{{ t('arch.compareTitle') }}</h3>
          <p>{{ t('arch.compareDesc') }}</p>
        </div>

        <div class="nf-arch__modes">
          <article class="nf-arch__mode nf-arch__mode--single">
            <div class="nf-arch__mode-top">
              <div>
                <span class="nf-arch__mode-badge">{{ single.badge }}</span>
                <h4>{{ single.name }}</h4>
                <p class="nf-arch__mode-scene">{{ single.scene }}</p>
              </div>
            </div>
            <div class="nf-arch__diagram" aria-hidden="true">
              <span v-for="node in single.diagram" :key="node" class="nf-arch__node">{{ node }}</span>
            </div>
            <ul class="nf-arch__mode-list nf-arch__mode-list--pros">
              <li v-for="(item, i) in single.pros" :key="i">
                <IconCheck size="16" />
                {{ item }}
              </li>
            </ul>
            <ul class="nf-arch__mode-list nf-arch__mode-list--cons">
              <li v-for="(item, i) in single.cons" :key="i">
                <IconMinus size="16" />
                {{ item }}
              </li>
            </ul>
          </article>

          <article class="nf-arch__mode nf-arch__mode--multi">
            <div class="nf-arch__mode-top">
              <div>
                <span class="nf-arch__mode-badge nf-arch__mode-badge--multi">{{ multi.badge }}</span>
                <h4>{{ multi.name }}</h4>
                <p class="nf-arch__mode-scene">{{ multi.scene }}</p>
              </div>
            </div>
            <div class="nf-arch__diagram" aria-hidden="true">
              <span v-for="node in multi.diagram" :key="node" class="nf-arch__node nf-arch__node--accent">{{ node }}</span>
            </div>
            <ul class="nf-arch__mode-list nf-arch__mode-list--pros">
              <li v-for="(item, i) in multi.pros" :key="i">
                <IconCheck size="16" />
                {{ item }}
              </li>
            </ul>
            <ul class="nf-arch__mode-list nf-arch__mode-list--cons">
              <li v-for="(item, i) in multi.cons" :key="i">
                <IconMinus size="16" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>

        <!-- 维度对比表 -->
        <div class="nf-arch__table-wrap">
          <table class="nf-arch__table">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">{{ single.name }}</th>
                <th scope="col">{{ multi.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in compareRows" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td>{{ row.single }}</td>
                <td>{{ row.multi }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
