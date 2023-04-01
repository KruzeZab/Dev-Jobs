from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import serializers
from autho.exceptions import CustomException


class CustomAuthTokenSerializer(AuthTokenSerializer):
    def validate(self, attrs):
        try:
            attrs = super().validate(attrs)
        except serializers.ValidationError:
            raise CustomException
        return attrs
