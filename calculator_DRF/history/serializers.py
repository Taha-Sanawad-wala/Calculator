from rest_framework import serializers

class MemorySerializer(serializers.Serializer):
    number=serializers.CharField(max_length=50)

class HistorySerializer(serializers.Serializer):
    operation=serializers.CharField(max_length=50)
    result=serializers.CharField(max_length=50)