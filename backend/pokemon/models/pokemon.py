from math import floor

import numpy as np
from django.db import models

# Create your models here.
TYPES = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy'
]

class PokeType(models.Model):

    TYPE_CHOICES = [(str(i), TYPES[i]) for i in range(1,18)]
    name = models.CharField(max_length=30, choices=TYPE_CHOICES)

class Pokemon(models.Model):
    name = models.CharField(max_length=30)
    types = models.ManyToManyField(PokeType)
    number = models.IntegerField(primary_key=True)

    def get_number(self):
        number_of_zeros = 2 - floor(np.log10(self.number))
        return number_of_zeros * '0' + str(self.number)
