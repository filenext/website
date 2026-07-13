export const siteConfig = {
  name: 'NextFile',
  domain: 'nextfile.cn',
  appUrl: import.meta.env.VITE_APP_URL || 'https://app.nextfile.cn',
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/filenext/nextfile',
  docsUrl: import.meta.env.VITE_DOCS_URL || 'https://github.com/filenext/deploy/blob/main/README.md',
  primaryColor: '#2563eb',
}

export const navItems = [
  { key: 'nav.aiIntro', href: '#ai-intro' },
  { key: 'nav.features', href: '#features' },
  { key: 'nav.showcase', href: '#showcase' },
  { key: 'nav.vision', href: '#vision' },
  { key: 'nav.pricing', href: '#pricing' },
  { key: 'nav.deploy', href: '#deploy' },
] as const

export const aiIntroIcons = ['understand', 'dialogue', 'aggregate', 'sovereign'] as const
export const featureIcons = [
  'files',
  'cloud',
  'sync',
  'ai',
  'shield',
  'plugin',
  'share',
  'office',
  'pickup',
] as const
export const valueIcons = ['open', 'secure', 'simple', 'evolve'] as const

export const deploySnippet = `mkdir nextfile-workspace && cd nextfile-workspace
git clone https://github.com/filenext/deploy.git
git clone https://github.com/filenext/nextfile.git
git clone https://github.com/filenext/frontend.git
cd deploy
cp .env.example .env
# 开发试用（SQLite 单机）
./scripts/dev.sh`

export const prodDeploySnippet = `cd deploy
cp .env.example .env
# 编辑 .env：POSTGRES_PASSWORD、EMBEDDING_API_KEY、PUBLIC_BASE_URL
./scripts/deploy.sh
# 栈内服务：nextfile + PostgreSQL 18 + Milvus`

export const LOCALE_KEY = 'nextfile-website-locale'
