export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {

  const between = Date.now() / 1000 - Number(time);

  if (between < 1200) return 'moments ago';

  if (between < 3600) return pluralize(~~(between / 60), ' minute');

  if (between < 86400) return pluralize(~~(between / 3600), ' hour');

  return pluralize(~~(between / 86400), ' day');

}

function pluralize (time, label) {

  if (time === 1) return time + label;

  return time + label + 's'
}
