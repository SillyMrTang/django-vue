# Generated by Django 2.0.9 on 2019-02-14 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('active', '0003_joblist'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='题目')),
                ('trip', models.CharField(max_length=100, verbose_name='提示')),
                ('answer', models.CharField(max_length=100, verbose_name='答案')),
            ],
            options={
                'verbose_name_plural': '题目列表',
                'verbose_name': '题目列表',
            },
        ),
    ]
