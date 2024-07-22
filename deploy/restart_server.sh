#!/bin/sh

# 명령행 인자 값 가져오기
SSH_PASSWORD=$1

# 명령행 인자가 입력되었는지 확인
if [ -z "$1" ]; then
  # 입력된 명령행 인자가 없을 시, 입력요청 메시지 표시
  echo "Please provide the SSH password as a command-line argument."
  exit 1
fi

# 명령행 인자 사용
sshpass -p $SSH_PASSWORD ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;git pull origin main"
sshpass -p $SSH_PASSWORD ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;docker build -t front_recoble_landing ."
sshpass -p $SSH_PASSWORD ssh  mjay@lab.bibly.kr "docker rm -f front_recoble_landing"
sshpass -p $SSH_PASSWORD ssh  mjay@lab.bibly.kr "docker run --name front_recoble_landing -d -p 3000:3000 front_recoble_landing;"
