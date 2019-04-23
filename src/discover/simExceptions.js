module.exports = {
  //Those are matched wrongly by string-similarity
  adapter: 'plugin',
  android: 'platform',
  angular: 'code',
  api: 'code',
  babel: 'tool',
  'back-end': 'code',
  bootstrap: 'tool',
  breaking: 'code', //or null
  build: 'infra',
  cd: 'infra',
  cdn: 'platform',
  ci: 'infra',
  cleanup: 'maintenance',
  cli: 'code', //or tool
  chat: 'ideas',
  configuration: 'code',
  core: 'maintenance',
  chore: 'maintenance',
  crash: 'bug', //or null
  csharp: 'code',
  css: 'code',
  currency: 'financial',
  update: 'maintenance',
  defect: 'bug',
  dep: 'maintenance',
  dependency: 'maintenance',
  device: 'platform',
  digest: 'blog',
  discuss: 'ideas',
  document: 'doc',
  dom: 'code',
  e2e: 'test',
  electron: 'tool',
  es6: 'code',
  external: 'plugin',
  frontend: 'code',
  future: 'ideas',
  graphic: 'design',
  greenkeeper: 'infra',
  hack: 'code',
  handshake: 'business',
  hook: 'code',
  html: 'code',
  legal: 'security',
  lib: 'tool', //or code
  library: 'tool', //or code
  lint: 'maintenance',
  linux: 'platform',
  logo: 'design',
  icon: 'design',
  insight: 'ideas',
  install: 'tool',
  internal: 'code',
  issue: 'bug',
  ios: 'platform',
  javascript: 'code',
  js: 'code',
  mac: 'platform',
  meet: 'eventOrganizing',
  mocha: 'test',
  module: 'code',
  new: 'ideas',
  node: 'platform',
  opinion: 'ideas',
  optim: 'code',
  osx: 'platform',
  package: 'platform',
  parser: 'tool',
  php: 'code',
  pull: 'maintenance',
  pwa: 'code',
  react: 'code',
  regression: 'bug',
  rendering: 'code',
  request: 'ideas',
  rfc: 'ideas',
  ruby: 'code',
  shell: 'tool',
  socket: 'tool',
  site: 'code', //website
  spa: 'code',
  spec: 'doc',
  suggestion: 'ideas',
  todo: 'maintenance',
  travis: 'infra',
  ui: 'design', //or code
  ux: 'design',
  vue: 'code',
  vuln: 'security',
  windows: 'platform',
  workflow: 'infra', //or projectManagement?
  // EMOJIS
  ':arrow_heading_down:': 'maintenance',
  ':book:': 'doc',
  ':boom:': 'bug', //or null (for breaking change)
  ':bug:': 'bug', //not really needed
  ':bulb:': 'ideas',
  ':construction:': 'maintenance', //or null (for WIP)
  ':detective:': 'null',
  ':heavy_check_mark:': 'null',
  ':rocket:': 'maintenance', //or code or ideas
  ':sos:': 'null',
  ':speech_balloon:': 'null',
  ':warning:': 'security',
}
