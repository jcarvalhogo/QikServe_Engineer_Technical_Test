package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

func userHandle(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
}

func main() {
	http.HandleFunc("*", indexHandler)
	http.HandleFunc("/products", productsHandle)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8090"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	log.Printf("Open http://localhost:%s in the browser", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}

func productsHandle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	url := "http://localhost:8080"
	switch r.Method {
	case "GET":
		res, _ := http.Get(url + r.URL.Path)
		buffer, _ := io.ReadAll(res.Body)
		_, err := w.Write(buffer)
		if err != nil {
			fmt.Println("Error")
		}
		fmt.Println(w)
	}
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	_, err := fmt.Fprint(w, "Hello, World!")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
	}
}
