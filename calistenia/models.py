from re import M
from unittest.util import _MAX_LENGTH
from django.db import models
from django.core.validators import MaxLengthValidator , MinLengthValidator

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    telefono = models.IntegerField(
        default = 1,
        validators=[MinLengthValidator(9),MaxLengthValidator(9)]
    )
    correo = models.EmailField(max_length = 200)
    tema = models.CharField(max_length=20)
    mensaje = models.CharField(max_length = 400)
    class Meta:
        db_table = "Contacto"
    def __str__(self):
        return f'{self.correo}'
    
    