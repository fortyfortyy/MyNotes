from django.shortcuts import redirect

class NotAllowedGetMethodMixin:
    def get(self, request, *args, **kwargs):
        return redirect('home')