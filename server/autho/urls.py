from django.urls import path
from rest_framework.routers import DefaultRouter

from autho.api import LookupUserAPI, ObtainAuthTokenAPI

router = DefaultRouter()
router.register("user/lookup", LookupUserAPI, basename="lookup-user")

urlpatterns = router.urls

urlpatterns += [
    path("user/token/", ObtainAuthTokenAPI.as_view(), name="obtain-token"),
]
