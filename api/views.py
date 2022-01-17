from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from api.serializers import NoteSerializer
from api.models import Note


class NotesListView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class NoteCreateView(generics.CreateAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()


class NoteListView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg = 'note_uuid'
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
