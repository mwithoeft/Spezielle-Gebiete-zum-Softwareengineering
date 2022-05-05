import argparse
from webtransport import run_webtransport_server
from websocket import run_websocket_server

if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='Run a websocket or webtransport server.')
    parser.add_argument('--protocol', type=str, default='webtransport', help='The protocol to run the server on. Default webtransport.', choices=['webtransport', 'websocket'])
    args = parser.parse_args()

    if args.protocol == 'webtransport':
        run_webtransport_server()
    elif args.protocol == 'websocket':
        run_websocket_server()