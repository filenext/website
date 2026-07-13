<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const stats = tm('hero.stats') as { value: string; label: string }[]

const nodes = [
  { id: 'local', label: 'Local', x: 50, y: 18 },
  { id: 's3', label: 'S3', x: 82, y: 32 },
  { id: 'ftp', label: 'FTP', x: 88, y: 62 },
  { id: 'drive', label: 'Drive', x: 62, y: 84 },
  { id: 'webdav', label: 'WebDAV', x: 28, y: 78 },
  { id: 'nfs', label: 'NFS', x: 14, y: 48 },
]
</script>

<template>
  <div class="nf-hero-tech" aria-hidden="true">
    <svg class="nf-hero-tech__svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.95)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.75)" />
        </linearGradient>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.1)" />
          <stop offset="50%" stop-color="rgba(255,255,255,0.55)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.1)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- 轨道环 -->
      <circle cx="200" cy="200" r="148" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="6 8" />
      <circle cx="200" cy="200" r="118" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <!-- 连接线 -->
      <g class="nf-hero-tech__links">
        <line
          v-for="n in nodes"
          :key="n.id"
          :x1="200"
          :y1="200"
          :x2="n.x * 4"
          :y2="n.y * 4"
          stroke="url(#line-grad)"
          stroke-width="1.5"
          stroke-dasharray="4 6"
        />
      </g>

      <!-- 外围节点 -->
      <g v-for="n in nodes" :key="n.id" class="nf-hero-tech__node">
        <circle :cx="n.x * 4" :cy="n.y * 4" r="22" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1" />
        <circle :cx="n.x * 4" :cy="n.y * 4" r="6" fill="rgba(255,255,255,0.7)" />
        <text
          :x="n.x * 4"
          :y="n.y * 4 + 36"
          text-anchor="middle"
          fill="rgba(255,255,255,0.75)"
          font-size="11"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          {{ n.label }}
        </text>
      </g>

      <!-- 中心枢纽 -->
      <g filter="url(#glow)">
        <rect x="168" y="168" width="64" height="64" rx="14" fill="url(#hub-grad)" />
        <rect x="168" y="168" width="64" height="64" rx="14" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none" />
        <!-- 文件层叠图标 -->
        <path d="M188 198h24v18a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-18z" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="1.5" />
        <path d="M192 190h20v14H192z" fill="rgba(37,99,235,0.25)" stroke="#2563eb" stroke-width="1.5" />
        <path d="M196 182h16v14h-16z" fill="rgba(37,99,235,0.35)" stroke="#2563eb" stroke-width="1.5" />
      </g>
      <text x="200" y="252" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="12" font-weight="700" font-family="system-ui, sans-serif">
        NextFile
      </text>

      <!-- 数据粒子 -->
      <circle class="nf-hero-tech__particle nf-hero-tech__particle--1" cx="120" cy="160" r="3" fill="rgba(255,255,255,0.6)" />
      <circle class="nf-hero-tech__particle nf-hero-tech__particle--2" cx="280" cy="220" r="2.5" fill="rgba(255,255,255,0.5)" />
      <circle class="nf-hero-tech__particle nf-hero-tech__particle--3" cx="160" cy="280" r="2" fill="rgba(255,255,255,0.45)" />
    </svg>

    <div class="nf-hero-tech__stats">
      <div v-for="(s, i) in stats" :key="i" class="nf-hero-tech__stat">
        <span class="nf-hero-tech__stat-value">{{ s.value }}</span>
        <span class="nf-hero-tech__stat-label">{{ s.label }}</span>
      </div>
    </div>
  </div>
</template>
