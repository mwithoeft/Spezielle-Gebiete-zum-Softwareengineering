import socketio
from aiohttp import web
import aiohttp_cors


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
    web.run_app(app, host='webtransport.withoeft.nz', port=4444)

@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('message')
async def another_event(sid, data):
    print('custom event triggered with data: ' + str(data))
    await sio.emit('message', "Danke für die Nachricht")