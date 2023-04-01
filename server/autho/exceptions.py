class CustomException(Exception):
    def __init__(self, message="Error"):
        self.message = message

    def __str__(self):
        return self.message
