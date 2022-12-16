package main

import (
	"fmt"
	"io/ioutil"

	yaml "gopkg.in/yaml.v2"
)

type Conf struct {
	RabbitMQ struct {
		Host     string `yaml:"host"`
		Port     int64  `yaml:"port"`
		Username string `yaml:"username"`
		Password string `yaml:"password"`
	}
	Server struct {
		Host string `yaml:"host"`
		Port string `yaml:"port"`
	}
}

func readConf(filename string) (*Conf, error) {
	buf, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var conf Conf
	err = yaml.Unmarshal(buf, &conf)
	if err != nil {
		return nil, fmt.Errorf("in file %q: %v", filename, err)
	}

	return &conf, nil
}
