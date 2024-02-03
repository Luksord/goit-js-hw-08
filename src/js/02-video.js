import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Perslay

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = data => {
  try {
    const currentTime = JSON.stringify(data.seconds);
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.log(error);
  }
};

const throttlePlay = throttle(onPlay, 1000);

player.on('timeupdate', throttlePlay);

try {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
} catch (error) {
  switch (error.name) {
    case 'RangeError':
      console.log(
        'The time was less than 0 or greater than the video’s duration'
      );
      break;

    default:
      console.log('An error occured');
      break;
  }
}

/* AnitaPrzedwojewska

import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');
const player = new Vimeo(video);
const localStorageKey = 'videoplayer-current-time';

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)));
} catch {
  player.setCurrentTime(0);
}

const setTime = function (currentTime) {
  const secondsStamp = currentTime.seconds;
  localStorage.setItem(localStorageKey, secondsStamp);
  console.log(secondsStamp);
};

player.on('timeupdate', throttle(setTime, 1000));

*/

/* MarekLempart

const player = new Vimeo(document.getElementById('vimeo-player'));

// Słuchacz zdarzeń dla timeupdate
player.on('timeupdate', throttle(() => {localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
    }, 1000)
  );

// Ustaw bieżący czas przy ponownym załadowaniu strony
const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

// Inicjalizacja odtwarzacza
player.ready().then(() => {
  // Opcjonalne: Możesz dodać dodatkową logikę po zainicjowaniu odtwarzacza
  console.log('Odtwarzacz Vimeo gotowy.');
});

*/

/* 

//Pre-existing player

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

*/

/*

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Video playback</title>
    <link rel="stylesheet" href="css/common.css" />
  </head>
  <body>
    <p><a href="index.html">Go back</a></p>

    <iframe
      id="vimeo-player"
      src="https://player.vimeo.com/video/236203659"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>

    <script src="js/02-video.js" type="module"></script>
  </body>
</html>


Napisz skrypt, który będzie zapisywał aktualny czas odtwarzania wideo w local storage 
i podczas przeładowywania strony, kontynuuje odtwarzanie wideo od danego momentu.

ChatGPT

document.addEventListener('DOMContentLoaded', function () {
    const vimeoPlayer = document.getElementById('vimeo-player');

    // Sprawdzanie, czy local storage zawiera informacje o czasie odtwarzania
    if (localStorage.getItem('vimeoPlayerTime')) {
        const storedTime = parseFloat(localStorage.getItem('vimeoPlayerTime'));

        // Ustawienie czasu odtwarzania na zapisany w local storage
        vimeoPlayer.addEventListener('loadedmetadata', function () {
            vimeoPlayer.currentTime = storedTime;
        });
    }

    // Zapisywanie aktualnego czasu odtwarzania do local storage przy zdarzeniu 'timeupdate'
    vimeoPlayer.addEventListener('timeupdate', function () {
        localStorage.setItem('vimeoPlayerTime', vimeoPlayer.currentTime);
    });

    // Dodanie obsługi zdarzenia przed zamknięciem strony, aby zapisać czas odtwarzania
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('vimeoPlayerTime', vimeoPlayer.currentTime);
    });
});

Ten skrypt jest dostosowany do odtwarzacza wideo Vimeo, który jest osadzony jako iframe. 
Sprawdza, czy lokalne przechowywanie zawiera informacje o czasie odtwarzania, a następnie 
ustawia czas odtwarzania na zapisany, jeśli istnieje taka informacja. Dodatkowo zapisuje 
aktualny czas odtwarzania do local storage podczas zdarzenia 'timeupdate' i przed zamknięciem strony.


*/
