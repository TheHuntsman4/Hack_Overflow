# Generated by Django 4.2.1 on 2023-05-27 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baguette', '0008_remove_business_id_alter_business_buisid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='pfp',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='pfp',
            field=models.TextField(),
        ),
    ]