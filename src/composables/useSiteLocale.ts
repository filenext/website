import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { localeOptions, setLocale, type Locale } from '@/i18n'

export function useSiteLocale() {
  const { locale } = useI18n()

  const current = computed(() => locale.value as Locale)

  function switchLocale(next: Locale) {
    if (next !== locale.value) setLocale(next)
  }

  return { locale: current, options: localeOptions, switchLocale }
}
