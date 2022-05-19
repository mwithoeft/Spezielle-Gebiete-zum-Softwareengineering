import os

class Data:

    @staticmethod
    def get_file_names():
        files = [f for f in os.listdir("/home/moritz/downloadFiles") if not f.startswith('.')]
        return files


    @staticmethod
    def get_file(filename):
        with open("/home/moritz/downloadFiles/" + filename, "rb") as f:
            return f.read()

    @staticmethod
    def read_file_chunks(filename):
        with open("/home/moritz/downloadFiles/" + filename, "rb", buffering=999999999) as f:
            while True:
                chunk = f.read(10000)
                if not chunk:
                    break
                yield chunk