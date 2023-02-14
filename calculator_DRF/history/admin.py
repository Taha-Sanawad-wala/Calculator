from django.contrib import admin
from history.models import History,Memory
# Register your models here.
class HistoryAdmin(admin.ModelAdmin):
    list_display=("operation","result")

admin.site.register(History,HistoryAdmin)
admin.site.register(Memory)