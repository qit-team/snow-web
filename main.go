package main

import (
	"fmt"
	"github.com/qit-team/snow-web/config"
	"github.com/qit-team/snow-web/pkg/kernel/server"
	"os"
	"github.com/qit-team/snow-web/bootstrap"
	"github.com/qit-team/snow-web/app/http/routes"
	"github.com/qit-team/snow-web/app/console"
	"errors"
	"strings"
	"github.com/qit-team/snow-web/app/jobs"
)

func main() {
	//解析启动命令
	opts := config.GetOptions()
	if opts.ShowVersion {
		fmt.Printf("%s\ncommit %s\nbuilt on %s\n", server.Version, server.BuildCommit, server.BuildDate)
		os.Exit(0)
	}

	pidFile := genPidFile(opts)

	//执行(status|stop|restart)命令
	if opts.Cmd != "" {
		err := server.HandleUserCmd(opts.Cmd, pidFile)
		if err != nil {
			fmt.Printf("Handle user command(%s) error, %s\n", opts.Cmd, err)
		} else {
			fmt.Printf("Handle user command(%s) succ \n ", opts.Cmd)
		}
		os.Exit(0)
	}

	//根据启动命令行参数，决定启动哪种服务模式
	var err error
	switch opts.App {
	case "api":
		err = server.StartHttp(opts.ConfFile, pidFile, bootstrap.Bootstrap, routes.RegisterRoute)
	case "cron":
		err = server.StartConsole(opts.ConfFile, pidFile, bootstrap.Bootstrap, console.RegisterSchedule)
	case "job":
		err = server.StartJob(opts.ConfFile, pidFile, bootstrap.Bootstrap, jobs.RegisterWorker)
	default:
		err = errors.New("No server start")
	}

	if err != nil {
		fmt.Printf("Server start error, %s\n", err)
		os.Exit(1)
	}
}

//pid进程号的保存路径
func genPidFile(opts *config.Options) string {
	return strings.TrimRight(opts.PidPath, "/") + "/" + opts.App + ".pid"
}
