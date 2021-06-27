package main

import (
	"log"
	"os"
)

func logInit() {
	file, err := os.OpenFile("/tmp/brag.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatal(err)
	}
	log.SetOutput(file)
}
