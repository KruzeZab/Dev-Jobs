from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from autho.serializers import CustomAuthTokenSerializer
from autho.exceptions import CustomException


class ObtainAuthTokenAPI(ObtainAuthToken):
    serializer_class = CustomAuthTokenSerializer

    def post(self, request, *args, **kwargs):
        try:
            return super().post(request, *args, **kwargs)
        except CustomException:
            return Response({"message": "Invalid username or password!"}, status=400)
