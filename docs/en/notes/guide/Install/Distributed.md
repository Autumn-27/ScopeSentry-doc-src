---
title: Distributed
author: Autumn
icon: fluent:text-align-distributed-20-regular
createTime: 2024/11/17 22:29:16
permalink: /en/guide/Distributed/
---

:::tip
If you forget your password, enter the Mongodb database and modify the password in the user table to b0ce71fcbed8a6ca579d52800145119cc7d999dc8651b62dfc1ced9a984e6e64
:::


The system is divided into four services:
- web/server side - used for asset management, task management, etc.
- scan side - used for scanning, can be deployed on multiple machines
- Mongodb-database, as long as web and scan can connect to this database.
- redis-redis, as long as web and scan can connect to this redis.

## Database (need to build a database yourself or use docker to build a database)
:::tip
Please make sure docker and docker-compose are installed

redis and MongoDb can be installed without docker, just set the account and password by yourself.

mongodb and redis can be built by yourself without using the docker image provided in this tutorial.

Version:
mongodb: 7.0.4

redis: 7.0.11
:::

### redis

```
git clone https://github.com/Autumn-27/ScopeSentry-Scan.git
cd ScopeSentry-Scan/build
# Modify REDIS_PASSWORD in .env file
docker-compose -f redis-docker-compose.yml up -d
```

### MongoDb

```
git clone https://github.com/Autumn-27/ScopeSentry-Scan.git
cd ScopeSentry-Scan/build
# Modify MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD in .env file
docker-compose -f mongodb-docker-compose.yml up -d
```

## Linux

### Web/Server end

:::tip
Due to the large amount of built-in data, it takes a while for the database to be initialized.

Forgot the password to enter the Mongodb database and modify the password in the user table to b0ce71fcbed8a6ca579d52800145119cc7d999dc8651b62dfc1ced9a984e6e64
Reset to ScopeSentry
:::

#### docker installation

```
git clone https://github.com/Autumn-27/ScopeSentry-Scan.git
cd ScopeSentry-Scan/build
# Modify the mongodb, redis account password and address port in the .env file
docker-compose up -d
```

You can then use `docker logs -f container id` to view the container log to ensure successful operation.

Visit http://IP:8082

During the installation process, the docker log will output the initial user password and the secondary verification password of the plug-in.


#### Source code installation

```
git clone https://github.com/Autumn-27/ScopeSentry.git
cd ScopeSentry
pip install -r requirements.txt
```

Create config.yaml in the project root directory

The content is as follows, modify the connection information of Mongodb and Redis.
```
logs:
  total_logs: 1000
mongodb:
  mongodb_database: ScopeSentry
  ip: 127.0.0.1
  password: ""
  port: 27017
  username: admin
redis:
  ip: 127.0.0.1
  password: ""
  port: '6379'
system:
  timezone: Asia/Shanghai
```
Finally run the program

```
python3 main.py
```

### scan end
:::tip
Since the Scan end needs to connect to the database and query the built-in information, it is necessary to wait for the Server end to run successfully (initialize the database) before creating the Scan. Recommended docker installation~
:::

#### Docker installation

```
git clone https://github.com/Autumn-27/ScopeSentry-Scan.git
cd ScopeSentry-Scan/build
# Edit the connection information of Mongdb and Redis in the .env file. NodeName is the node name. Please keep each node name unique (if it is empty, it will be randomly generated and can be changed in the web interface).
docker-compose -f scan-docker-compose.yml up -d
```

You can use `docker logs -f container id` to view the container logs to ensure successful operation.

After success, the following figure is shown:
![alt text](/images/image-1.png)

#### Run directly

Linux has statically compiled and packaged libpcap, no other operations are required

The crawler relies on the chrome browser reference https://github.com/chaitin/rad

Download
https://github.com/Autumn-27/ScopeSentry-Scan/releases

The first run will generate a configuration file, modify the database address in the configuration file, NodeName is the node name, each node name should be unique

#### Compile and install

```
git clone https://github.com/Autumn-27/ScopeSentry-Scan.git
cd ScopeSentry-Scan
go build -o dist/ScopeSentry ./cmd/ScopeSentry/main.go
cd dist
chmod +x ScopeSentry
./ScopeSentry
#The first run will generate a configuration file, modify the database address in the configuration file, and re-run
```

Libpcap needs to be installed Environment

Download npcap driver for Windows

Install libpcap for Linux

Screenshot of successful operation:

![alt text](/images/image-1.png)

## Windows

### Web/Server side

#### Source code installation

```
git clone https://github.com/Autumn-27/ScopeSentry.git
cd ScopeSentry
pip install -r requirements.txt
```

Create config.yaml in the project root directory

The content is as follows, modify the connection information of Mongodb and Redis.
```
logs:
  total_logs: 1000
mongodb:
  mongodb_database: ScopeSentry
  ip: 127.0.0.1
  password: ""
  port: 27017
  username: admin
redis:
  ip: 127.0.0.1
  password: ""
  port: '6379'
system:
  timezone: Asia/Shanghai
```
Finally run the program

```
python3 main.py
```

### Scan side

Libpcap environment needs to be installed

Windows download npcap driver

Download
https://github.com/Autumn-27/ScopeSentry-Scan/releases

The first run will generate a configuration file. Modify the database address in the configuration file. NodeName is the node name. Please keep each node name unique

## Data migration
In the database docker configuration file, there is a mount directory setting, which defaults to the data directory of the current running directory. When migrating data, just migrate the files.