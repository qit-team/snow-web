package bannermodel

import (
	"fmt"
	"github.com/qit-team/snow-web/config"
	"testing"
	"github.com/qit-team/snow-web/pkg/db"
	"github.com/qit-team/snow-web/app/utils"
)

func init() {
	defer func() {
		if r := recover(); r != nil {
			println("Runtime error caught: %v", r)
		}
	}()

	//加载配置文件
	conf, err := config.Load("../../../.env")
	if err != nil {
		fmt.Println(err)
	}

	//注册db
	err = (&db.Provider{}).Register(conf)
	if err != nil {
		fmt.Println(err)
	}
}

func TestGetOne(t *testing.T) {
	bannerModel := GetInstance()
	banner := new(Banner)
	res, err := bannerModel.GetOne(1, banner)
	if err != nil {
		t.Error(err)
	} else if res != true {
		t.Error("missing bannner data")
	} else if banner.Id == 0 {
		t.Error("missing bannner data")
	}
	fmt.Println(utils.JsonEncode(banner))
}

func TestGetList(t *testing.T) {
	bannerModel := GetInstance()
	banners := make([]*Banner, 0)
	err := bannerModel.GetList(&banners, "pid >= ?", []interface{}{1}, []int{10}, "status desc, id desc")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(utils.JsonEncode(banners))
}
