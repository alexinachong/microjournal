from django.contrib import admin

# Register your models here.
from .models import Post

#lets you see things in the admin
admin.site.register(Post)
