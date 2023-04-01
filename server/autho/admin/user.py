from autho.models import User
from django.contrib import admin


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "password",
        "last_login",
        "is_superuser",
        "username",
        "first_name",
        "last_name",
        "email",
        "is_staff",
        "is_active",
        "date_joined",
        "mobile",
        "bio",
        "avatar",
        "cv",
        "state",
        "city",
        "address",
        "zip_code",
    )
    list_filter = (
        "last_login",
        "is_superuser",
        "is_staff",
        "is_active",
        "date_joined",
    )
    raw_id_fields = ("groups", "user_permissions", "links")
