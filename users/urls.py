from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from users.views import ForgottenPasswordView, ChangePasswordView, MyTokenObtainPairView, RegisterUserView

urlpatterns = [
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterUserView.as_view(), name='register'),

    path('reset/password/', ForgottenPasswordView.as_view(), name='forgotten_password'),
    path('set/password/<uidb64>/<token>', ChangePasswordView.as_view(), name='password_reset_confirm'),
]
