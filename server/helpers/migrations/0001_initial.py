# Generated by Django 4.1.7 on 2023-04-01 06:09

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Link",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("url", models.URLField()),
                (
                    "vendor",
                    models.CharField(
                        choices=[
                            ("LinkedIn", "LinkedIn"),
                            ("GitHub", "GitHub"),
                            ("Twitter", "Twitter"),
                        ],
                        max_length=10,
                    ),
                ),
            ],
        ),
    ]