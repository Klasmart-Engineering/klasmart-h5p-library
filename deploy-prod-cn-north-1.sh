#!/usr/bin/env sh
aws ecr get-login-password --region cn-north-1 | docker login --username AWS --password-stdin 503677224658.dkr.ecr.cn-north-1.amazonaws.com.cn
docker build -t kidsloop-prod-h5p .
docker tag kidsloop-prod-h5p:latest 503677224658.dkr.ecr.cn-north-1.amazonaws.com.cn/kidsloop-prod-h5p:latest
docker push 503677224658.dkr.ecr.cn-north-1.amazonaws.com.cn/kidsloop-prod-h5p:latest
aws ecs update-service --force-new-deployment --cluster prod-kidsloop --no-paginate --region cn-north-1 --service arn:aws-cn:ecs:cn-north-1:503677224658:service/prod-kidsloop/kidsloop-h5p-prod 
