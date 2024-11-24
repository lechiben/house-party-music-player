from django.urls import path
from .views import RoomView

urlpatterns = [
    path('api/room', RoomView.as_view()),
]
