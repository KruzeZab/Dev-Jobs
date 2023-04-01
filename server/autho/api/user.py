from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from autho.models import User


class LookupUserAPI(ViewSet):
    def list(self, request):
        email = request.query_params.get("email")
        if email:
            user = User.objects.filter(email=email).first()
            if user:
                return Response({"available": False, "message": "Username is already taken!"})
            return Response({"available": True, "message": "Username available!"})

        username = request.query_params.get("username")
        if username:
            user = User.objects.filter(username=username).first()
            if user:
                return Response({"available": False, "message": "Email is already taken!"})
            return Response({"available": True, "message": "Email available!"})

        return Response({"message": "Email or username is required!"})
