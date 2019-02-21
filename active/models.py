from django.db import models


# Create your models here.
class UserInfo(models.Model):
    openid = models.CharField(max_length=100, verbose_name='用户ID')
    name = models.CharField(max_length=100, verbose_name='姓名', null=True, blank=True)
    phone = models.CharField(max_length=100, verbose_name='联系方式', null=True, blank=True)
    avater = models.CharField(max_length=200, verbose_name="用户头像", null=True, blank=True)
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = '用户登录信息'
        verbose_name_plural = verbose_name


class Type(models.Model):
    name = models.CharField(max_length=100, verbose_name='类型名称')

    class Meta:
        verbose_name = '类型'
        verbose_name_plural = verbose_name


class SmallType(models.Model):
    name = models.CharField(max_length=100, verbose_name='小类型名称')
    big_type = models.ForeignKey(Type, related_name="types", on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = '小类型'
        verbose_name_plural = verbose_name


class WorkInfo(models.Model):
    name = models.CharField(max_length=100, verbose_name='菜品名称')
    introduce = models.CharField(max_length=200, verbose_name='菜品文字介绍', null=True)
    audio = models.CharField(max_length=500, verbose_name='菜品语音介绍', null=True)
    food = models.CharField(max_length=100, verbose_name='所用食材')
    type = models.ForeignKey(Type, related_name="type", on_delete=models.SET_NULL, null=True)
    small_type = models.ForeignKey(SmallType, related_name="small_type", on_delete=models.SET_NULL, null=True)
    food_img = models.CharField(max_length=500, verbose_name="食物图片")
    user = models.ForeignKey(UserInfo, related_name="users", on_delete=models.SET_NULL, null=True)
    point_num = models.IntegerField(default=0)
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = '菜品列表'
        verbose_name_plural = verbose_name


class PraiseRecord(models.Model):
    user = models.ForeignKey(UserInfo, related_name="user", on_delete=models.SET_NULL, null=True)
    work = models.ForeignKey(WorkInfo, related_name="work", on_delete=models.SET_NULL, null=True)
    create_time = models.DateField(auto_now=True)

    class Meta:
        verbose_name = '点赞记录'
        verbose_name_plural = verbose_name


class IMG(models.Model):
    img = models.ImageField(upload_to='img')
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = '图片'
        verbose_name_plural = verbose_name


class UserInfoTwo(models.Model):
    openid = models.CharField(max_length=100, verbose_name='用户ID')
    status = models.IntegerField(choices=((0, "未答题"), (1, "已答题")), verbose_name='答题状态', default=0)
    error = models.IntegerField(choices=((0, "正确"), (1, "错误")), verbose_name='答题状态', default=0)
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = '用户答题状态'
        verbose_name_plural = verbose_name


class JobList(models.Model):
    name = models.CharField(max_length=100, verbose_name="求职者姓名")
    iphone = models.CharField(max_length=11, verbose_name="求职者联系方式")
    job = models.CharField(max_length=100, verbose_name="求职岗位")
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = '招聘信息'
        verbose_name_plural = verbose_name


class Question(models.Model):
    title = models.CharField(max_length=100, verbose_name="题目")
    trip = models.CharField(max_length=100, verbose_name="提示")
    answer = models.CharField(max_length=100, verbose_name="答案")

    class Meta:
        verbose_name = '题目列表'
        verbose_name_plural = verbose_name
