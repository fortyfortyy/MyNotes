from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from api.views import NotesListView, NoteListView, NoteCreateView, MyTokenObtainPairView, ForgottenPasswordView, ChangePasswordView

urlpatterns = [
    path('notes/', NotesListView.as_view(), name='notes-view'),
    path('notes/new/', NoteCreateView.as_view(), name='note-create-view'),
    path('notes/<uuid:note_uuid>/', NoteListView.as_view(), name='note-view'),

    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('reset/password/', ForgottenPasswordView.as_view(), name='forgotten_password'),
    path('set/password/<uidb64>/<token>', ChangePasswordView.as_view(), name='password_reset_confirm'),
]
