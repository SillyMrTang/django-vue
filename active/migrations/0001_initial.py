# Generated by Django 2.0.9 on 2018-12-27 11:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IMG',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='img')),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': '图片',
                'verbose_name': '图片',
            },
        ),
        migrations.CreateModel(
            name='PraiseRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': '点赞记录',
                'verbose_name': '点赞记录',
            },
        ),
        migrations.CreateModel(
            name='SmallType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='小类型名称')),
            ],
            options={
                'verbose_name_plural': '小类型',
                'verbose_name': '小类型',
            },
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='类型名称')),
            ],
            options={
                'verbose_name_plural': '类型',
                'verbose_name': '类型',
            },
        ),
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('openid', models.CharField(max_length=100, verbose_name='用户ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='姓名')),
                ('phone', models.CharField(blank=True, max_length=100, null=True, verbose_name='联系方式')),
                ('avater', models.CharField(blank=True, max_length=200, null=True, verbose_name='用户头像')),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': '用户登录信息',
                'verbose_name': '用户登录信息',
            },
        ),
        migrations.CreateModel(
            name='WorkInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='菜品名称')),
                ('introduce', models.CharField(max_length=200, null=True, verbose_name='菜品文字介绍')),
                ('audio', models.CharField(max_length=500, null=True, verbose_name='菜品语音介绍')),
                ('food', models.CharField(max_length=100, verbose_name='所用食材')),
                ('food_img', models.CharField(max_length=500, verbose_name='食物图片')),
                ('point_num', models.IntegerField(default=0)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('small_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='small_type', to='active.SmallType')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='type', to='active.Type')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='users', to='active.UserInfo')),
            ],
            options={
                'verbose_name_plural': '菜品列表',
                'verbose_name': '菜品列表',
            },
        ),
        migrations.AddField(
            model_name='smalltype',
            name='big_type',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='types', to='active.Type'),
        ),
        migrations.AddField(
            model_name='praiserecord',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='user', to='active.UserInfo'),
        ),
        migrations.AddField(
            model_name='praiserecord',
            name='work',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='work', to='active.WorkInfo'),
        ),
    ]
