<img src='docs/img/snow1.png' width="200">


[![Language](https://img.shields.io/badge/Language-Go-blue.svg)](https://golang.org/)
[![GoDoc](https://godoc.org/github.com/qit-team/snow?status.svg)](https://godoc.org/github.com/qit-team/snow)

## Snow
Snow是一套简单易用的Go语言业务框架，整体逻辑设计简洁，支持HTTP服务、队列调度和任务调度等常用业务场景模式。

## Goals
我们致力于让PHPer更方便地切入到Go语言开发，在业务框架选择上贴合PHP主流框架的设计思想，以更低的学习成本快速熟悉框架，致力于业务逻辑的开发。

## Features
- HTTP服务：基于[gin](https://github.com/gin-gonic/gin)进行模块化设计，简单易用、核心足够轻量；支持平滑重启；
- 任务调度：基于[cron](https://github.com/robfig/cron)进行模块化设计，简单易用；
- 队列调度：基于自研的队列调度服务[worker](https://github.com/qit-team/work)，通过Queue接口化，解耦队列调度与底层队列驱动；支持平滑关闭；
- Cache: 通用的接口化设计，框架实现了redis作为缓存底层驱动，支持可扩展；
- Database: 使用成熟的[ORM](https://github.com/go-xorm/xorm)库，有丰富的数据库驱动支持和特性；
- Queue: 通用的接口化设计，框架实现了redis、alimns作为队列底层驱动，支持可扩展；
- Config: 采用[toml](https://github.com/toml-lang/toml)语义化的配置文件格式，简单易用；
- Logger: 基于[logrus](github.com/sirupsen/logrus)进行封装，内嵌上下文通用数据采集和trace_id追踪；
- Request and Response：定义输入和输出数据实体格式；
- Curl: 简单易用的Curl请求库；


## Quick start

### Requirements
Go version>=1.12

### Installation
```shell
cd $GOPATH/src
cd my-github/my-space
git clone https://github.com/qit-team/snow.git my-project
cd my-project
sh build/shell/replace.sh my-github/my-space/my-project
cp .env.example .env
```

### Build & Run
```shell
sh build/shell/build.sh
build/bin/snow
```

### Test demo
```
curl "http://127.0.0.1:8000/hello"  #返回json串输出
```

## Documents

- [项目地址](https://github.com/qit-team/snow)
- [中文文档](https://github.com/qit-team/snow/wiki)
- [changelog](https://github.com/qit-team/snow/blob/master/CHANGLOG.md)

## Contributors

- Tinson Ho ([@tinson](https://github.com/hetiansu5))
- ACoderHIT
- xiongwilee ([@xiongwilee](https://github.com/xiongwilee))
- KEL ([@deathkel](https://github.com/deathkel))
- peterwu




