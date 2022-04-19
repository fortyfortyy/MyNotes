from django.urls import path
from users.views import ForgottenPasswordView, ChangePasswordView, CustomTokenObtainPairView, RegisterUserView, \
    ActivateAccountView, CustomTokenRefreshView

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterUserView.as_view(), name='register'),
    path('activate/<uidb64>/<token>/',
            ActivateAccountView.as_view(), name='activate_account'),

    path('reset/password/', ForgottenPasswordView.as_view(), name='forgotten_password'),
    path('set/password/<uidb64>/<token>/', ChangePasswordView.as_view(), name='password_reset_confirm'),
]