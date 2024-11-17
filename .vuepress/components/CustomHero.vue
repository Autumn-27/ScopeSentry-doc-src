<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'

const props = defineProps<PlumeHomeConfigBase & {
  title: string
  description: string
  actions: Array<{
    text: string
    link: string
    type: 'primary' | 'secondary'
  }>
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
  >
    <div class="custom-hero">
      <div class="content">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
        <div class="actions">
          <a 
            v-for="action in actions" 
            :key="action.text"
            :href="action.link"
            :class="['action-button', action.type]"
          >
            {{ action.text }}
          </a>
        </div>
      </div>
    </div>
  </VPHomeBox>
</template>

<style scoped>
.custom-hero {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(45deg, #42b883, #35495e);
}

.content {
  max-width: 960px;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-button {
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.primary {
  background-color: #ffffff;
  color: #42b883;
}

.secondary {
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style> 