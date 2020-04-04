import postal from 'postal'

window.channel.page = postal.channel('team:page');
window.channel.search = postal.channel('team:search');
window.channel.decide = postal.channel('team:decide');