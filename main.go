package main

import (
	"log"
	"net/http"
)

func main() {
	conf, err := readConf("conf.yaml")
	if err != nil {
		log.Fatal(err)
	}
	logInit()
	hub := newHub()
	go hub.run()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})
	http.HandleFunc("/", index)
	http.HandleFunc("/chat.html", chat)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets"))))

	addr := conf.Server.Host + ":" + conf.Server.Port
	if conf.Ssl.Status == "ON" {
		http.ListenAndServeTLS(addr, conf.Ssl.Crt, conf.Ssl.Key, nil)
	} else {
		http.ListenAndServe(addr, nil)
	}
	log.Println("Server started on " + addr)
}

func index(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	http.ServeFile(w, r, "index.html")
}

func chat(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	http.ServeFile(w, r, "chat.html")
}
