from django.http import HttpResponseRedirect


def view_404(request, *args, **kwargs):
    return HttpResponseRedirect('/#/404')
