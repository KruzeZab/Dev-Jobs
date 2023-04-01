from django.db import models
from helpers.variables import SOCIAL_SITE_OPTIONS

# Create your models here.


class Link(models.Model):
    url = models.URLField()
    vendor = models.CharField(max_length=10, choices=SOCIAL_SITE_OPTIONS)

    def __str__(self):
        return self.url
