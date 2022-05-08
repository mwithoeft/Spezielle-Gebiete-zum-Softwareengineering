import os

class Data:

    @staticmethod
    def get_file_names():
        files = [f for f in os.listdir("files") if not f.startswith('.')]
        return files


