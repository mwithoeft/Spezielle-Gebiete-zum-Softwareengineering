package main

import (
	"log"
	"net/http"

	"github.com/lucas-clemente/quic-go/http3"
	"github.com/marten-seemann/webtransport-go"
)

func main() {

	// create a new webtransport.Server, listening on (UDP) port 443
	s := webtransport.Server{
		H3: http3.Server{
			Server: &http.Server{Addr: "webtransport.withoeft.nz:4433"},
		},
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	defer s.Close()

	// Create a new HTTP endpoint /webtransport.
	mux := http.NewServeMux()
	mux.HandleFunc("/webtransport", func(w http.ResponseWriter, r *http.Request) {
		conn, err := s.Upgrade(w, r)
		if err != nil {
			log.Printf("upgrading failed: %s", err)
			w.WriteHeader(500)
			return
		}
		conn.OpenStream()
	})
	s.H3.Handler = mux

	s.ListenAndServeTLS("/etc/letsencrypt/live/webtransport.withoeft.nz/cert.pem", "/etc/letsencrypt/live/webtransport.withoeft.nz/privkey.pem")
}
