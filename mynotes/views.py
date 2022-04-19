from django.http import HttpResponseRedirect


def view_404(request, *args, **kwargs):
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    print('Print statemtn redirect to the error page')
    return HttpResponseRedirect('/#/404')
