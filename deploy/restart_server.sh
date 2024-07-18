#!/bin/sh


sshpass -p qhdlffjqud1! ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;git pull origin main"
sshpass -p qhdlffjqud1! ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;docker build -t front_recoble_landing ."
sshpass -p qhdlffjqud1! ssh  mjay@lab.bibly.kr "docker rm -f front_recoble_landing"
sshpass -p qhdlffjqud1! ssh  mjay@lab.bibly.kr "docker run --name front_recoble_landing -d -p 3000:3000 front_recoble_landing;"
