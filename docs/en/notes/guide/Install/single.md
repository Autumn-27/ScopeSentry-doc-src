---
title: Single-machine deployment
author: Autumn
createTime: 2024/11/17 20:01:03
permalink: /en/guide/y0qsb5ks/
icon: mdi:server-outline
---
The system is divided into four services:
- web/server side - used for asset management, task management, etc.
- scan side - used for scanning, can be deployed on multiple machines
- Mongodb-database, as long as web and scan can connect to this database.
- redis-redis, as long as web and scan can connect to this redis.

## Single machine deployment
:::tip
The compose configuration file for single machine deployment already contains the database image, you only need to modify the account and password of mongodb and redis. Due to network problems of some machines (not clear where the problem is for the time being), the temporary solution for scan's docker is to set network_mode to host, so scan's docker can use 127 to access the database without changing.
:::

```
git clone https://github.com/Autumn-27/ScopeSentry.git
cd ScopeSentry
# Modify the account and password of mongodb and redis in the .env file.
docker-compose -f single-host-deployment.yml up -d
```
- Four containers in total after running
- scope-sentry (server-web interface)
- scopesentry-scan (scanner)
- Mongodb (database)
- Redis

```
View the initial user password and the secondary verification password of the plug-in
docker logs scope-sentry
```

Then visit IP:8082

That's all for single-machine deployment. Change the account password and start docker with one command
![alt text](/images/docker-run.png)

After single-machine deployment, if you want to run the scanning node on other machines, you only need to run scan separately and fill in the database address with the IP of the machine where the single-machine deployment is performed.

## Data migration
In the docker configuration file of the database, there is a mount directory setting. The default is the data directory of the current running directory. When migrating data, just migrate the file.