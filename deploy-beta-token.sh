#!/usr/bin/env sh
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com
docker build -t kidsloop-beta-h5p-token .
docker tag kidsloop-beta-h5p-token:latest 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com/kidsloop-beta-h5p-token:latest
docker push 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com/kidsloop-beta-h5p-token:latest
aws ecs update-service --force-new-deployment --cluster kidsloop-beta --no-paginate --region ap-northeast-2 --service arn:aws:ecs:ap-northeast-2:494634321140:service/kidsloop-beta/kidsloop-beta-h5p-token 
