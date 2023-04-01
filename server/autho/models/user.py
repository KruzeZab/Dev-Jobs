from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    mobile = models.CharField(max_length=15, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to="avatars", blank=True, null=True)
    cv = models.FileField(upload_to="cvs", blank=True, null=True)

    state = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    zip_code = models.CharField(max_length=50, blank=True, null=True)

    links = models.ManyToManyField("helpers.Link", blank=True)

    def __str__(self):
        return self.username

    @property
    def is_complete(self):
        return (
            self.mobile
            and self.bio
            and self.avatar
            and self.cv
            and self.state
            and self.city
            and self.address
            and self.zip_code
        )
