import socketio
from aiohttp import web
import aiohttp_cors
from data import Data



sio = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins='*')
app = web.Application()
cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
})
sio.attach(app)



def run_websocket_server():
    web.run_app(app, host='websocket.withoeft.nz', port=4444)

@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('message')
async def message_event(sid, data):
    print('custom event triggered with data: ' + str(data))
    await sio.emit('message', "Danke für die Nachricht")

@sio.on('ping')
async def ping_event(sid, data):
    print('custom event triggered with data: ' + str(data))
    await sio.emit('ping', "Danke für die Nachricht")

@sio.on('download-files-list')
async def download_files_event(sid):
    await sio.emit('download-files-list', Data.get_file_names())

@sio.on('download-file')
async def download_file_event(sid, filename):
    await sio.emit('download-file', (filename, Data.get_file(filename)))
