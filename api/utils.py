from django.shortcuts import redirect


def not_allowed_get_method(func):
    def wrapper(request, *args, **kwargs):
        if request.method == 'GET':
            return redirect('error_page')
        else:
            result = func(request, *args, *kwargs)
            return result

    return wrapper