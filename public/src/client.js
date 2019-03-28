
// check service worker

if('serviceWorker' in navigator){
    send().catch(err => console.log(err))
}