import postal from 'postal'

window.channel  = {
    page: postal.channel('team:page'),
    search: postal.channel('team:search'),
    decide: postal.channel('team:decide'),
};