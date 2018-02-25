from django.contrib import admin

# Register your models here.
from .models import Post, User

#lets you see things in the admin
admin.site.register(Post)
admin.site.register(User)
