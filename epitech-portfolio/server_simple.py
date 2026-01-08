#!/usr/bin/env python3
import http.server
import socketserver
import os

os.chdir('/home/noah/Projet_perso/Site_internet')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/epitech-portfolio/src/':
            self.path = '/epitech-portfolio/src/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 5500
Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Server running at http://127.0.0.1:{PORT}/epitech-portfolio/src/index.html")
    httpd.serve_forever()
