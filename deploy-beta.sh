#!/usr/bin/env sh
docker build -t kidsloop-beta-h5p .

# Seoul
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com
# London
aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 494634321140.dkr.ecr.eu-west-2.amazonaws.com
# Mumbai
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 494634321140.dkr.ecr.ap-south-1.amazonaws.com

docker tag kidsloop-beta-h5p:latest 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com/kidsloop-beta-h5p:latest
docker tag kidsloop-beta-h5p:latest 494634321140.dkr.ecr.eu-west-2.amazonaws.com/kidsloop-beta-h5p:latest
docker tag kidsloop-beta-h5p:latest 494634321140.dkr.ecr.ap-south-1.amazonaws.com/kidsloop-beta-h5p:latest

docker push 494634321140.dkr.ecr.ap-northeast-2.amazonaws.com/kidsloop-beta-h5p:latest
docker push 494634321140.dkr.ecr.eu-west-2.amazonaws.com/kidsloop-beta-h5p:latest
docker push 494634321140.dkr.ecr.ap-south-1.amazonaws.com/kidsloop-beta-h5p:latest

aws ecs update-service --force-new-deployment --cluster kidsloop-beta --no-paginate --region ap-northeast-2 --service arn:aws:ecs:ap-northeast-2:494634321140:service/kidsloop-beta/kidsloop-h5p-beta 
aws ecs update-service --force-new-deployment --cluster kidsloop-beta --no-paginate --region eu-west-2 --service arn:aws:ecs:eu-west-2:494634321140:service/kidsloop-beta/kidsloop-h5p-beta 
aws ecs update-service --force-new-deployment --cluster kidsloop-beta --no-paginate --region ap-south-1 --service arn:aws:ecs:ap-south-1:494634321140:service/kidsloop-beta/kidsloop-h5p-beta 