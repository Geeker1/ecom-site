# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-05-10 20:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_remove_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='procat',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='procats', to='shop.Category'),
        ),
    ]
