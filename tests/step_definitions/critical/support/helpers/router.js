import url from 'url';

export function routeTo() {
  url.resolve(process.env['chimp.baseUrl'], '/appointments')
}
