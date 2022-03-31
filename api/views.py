from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.serializers import NoteSerializer
from api.models import Note

from users.models import ProfileUser


class NotesListView(generics.ListAPIView):
    """
    Return all user's notes
    """
    permission_classes = [IsAuthenticated]
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user.pk
        return Note.objects.filter(owner=user)


class NoteCreateView(generics.CreateAPIView):
    """
    Create a user's note
    """
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def perform_create(self, serializer):
        user = self.request.user.pk
        profile = ProfileUser.objects.get(pk=user)
        serializer.save(owner=profile)


class NoteListView(generics.RetrieveUpdateDestroyAPIView):
    """
    Return a user's note
    """
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    lookup_url_kwarg = 'note_uuid'
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        user = self.request.user.pk
        return Note.objects.filter(owner=user)
