import postal from 'postal'

window.channel  = {
    page: postal.channel('team:page'),
    search: postal.channel('team:search'),
    decide: postal.channel('team:decide'),
};

let allReadyCount = 0;

window.channel.search.subscribe('search.allReady', function(){
    allReadyCount++;
    if(allReadyCount == 2) {
        window.channel.page.publish('page.allReady');
    };
}).once();
window.channel.decide.subscribe('decide.allReady', function(){
    allReadyCount++;
    if(allReadyCount == 2) {
        window.channel.page.publish('page.allReady');
    };
}).once();