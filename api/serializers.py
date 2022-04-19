from rest_framework import serializers

from api.models import Note


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('body', 'updated', 'id')

    # def to_representation(self, obj):
    #     return {
    #         "body": obj.body,
    #         "updated": obj.updated,
    #         "id": obj.id,
    #     }

    def validate_body(self, value):
        if len(value) > 6000:
            raise serializers.ValidationError('This field can only contain max 6000 characters.')

        return value
