
import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(function (data) {
        localStorage.setItem(STORAGE_KEY, data.seconds)

}, 1000));
 

const currentTime = localStorage.getItem(STORAGE_KEY) || 0;


player.setCurrentTime(currentTime);



