# Generated by Django 4.1.6 on 2023-02-09 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='history',
            old_name='operator1',
            new_name='operand1',
        ),
        migrations.RenameField(
            model_name='history',
            old_name='operator2',
            new_name='operand2',
        ),
        migrations.RenameField(
            model_name='history',
            old_name='operand',
            new_name='operator',
        ),
    ]
