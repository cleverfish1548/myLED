function playAudio(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if(!audio) return; //stops func from running for other keys
            audio.currentTime = 0; //this resets audio div so user can click audio file to play multiple times
            audio.play();
            key.classList.toggle('playing');
            mymanaisgun=event.keyCode;
            if(mymanaisgun==65){//A누르면 빨간색
                location.href = "http://192.168.137.151/red";
            }
            if(mymanaisgun==83){//S누르면 노란색
                location.href = "http://192.168.137.151/yellow";
            }
            if(mymanaisgun==68){//D누르면 초록색
                location.href = "http://192.168.137.151/green";
            }
            if(mymanaisgun==70){//F누르면 하늘색
                location.href = "http://192.168.137.151/cyan";
            }
            if(mymanaisgun==71){//G누르면 파란색
                location.href = "http://192.168.137.151/blue";
            }
            if(mymanaisgun==72){//H누르면 흰색
                location.href = "http://192.168.137.151/white";
            }
            if(mymanaisgun==74){//J누르면 자주색
                location.href = "http://192.168.137.151/magenta";
            }
            if(mymanaisgun==75){//K누르면 소등
                location.href = "http://192.168.137.151/off";
            }
            if(mymanaisgun==76){//L누르면 소등
                location.href = "http://192.168.137.151/off";
            }
            

        }
        function removePlayingStyle(e) {
            if(e.propertyName !== 'transform') return;
            this.classList.remove('playing');
        }
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removePlayingStyle));
        window.addEventListener('keydown', playAudio);