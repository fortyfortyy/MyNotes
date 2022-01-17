from django.urls import path

from api.views import NotesListView, NoteListView, NoteCreateView

urlpatterns = [
    path('notes/', NotesListView.as_view(), name='notes-view'),
    path('notes/new/', NoteCreateView.as_view(), name='note-create-view'),
    path('notes/<uuid:note_uuid>/', NoteListView.as_view(), name='note-view'),
]
