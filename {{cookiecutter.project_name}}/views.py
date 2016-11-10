from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.urlresolvers import reverse_lazy


class BaseMixin(LoginRequiredMixin):
    login_url = reverse_lazy('account_login')
    redirect_field_name = 'redirect_to'


class Home(TemplateView):

    template_name = '{{cookiecutter.project_name}}/home.jade'