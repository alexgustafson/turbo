#!/usr/bin/env python
# -*- coding: utf-8 -*-

import shutil
import os

os.system("npm install")
os.system("bower install")

{% if cookiecutter.with_susy == 'yes' %}
os.system("bower install susy --save")
{% endif %}

{% if cookiecutter.with_breakpoint_sass == 'yes' %}
os.system("bower install breakpoint-sass --save")
{% endif %}

{% if cookiecutter.with_modernizer == 'yes' %}
    "modernizer": "~2.8.2",
{% endif %}

{% if cookiecutter.with_compass_mixins == 'yes' %}
os.system("bower install compass-mixins --save")
{% endif %}

{% if cookiecutter.with_bourbon == 'yes' %}
os.system("bower install bourbon --save")
os.system("bower install neat --save")
os.system("bower install bitters --save")
{% endif %}

{% if cookiecutter.with_foundation == 'yes' %}
os.system("bower install foundation --save")
{% endif %}

{% if cookiecutter.with_jquery == 'yes' %}
os.system("bower install jquery --save")
{% endif %}

{% if cookiecutter.with_angular == 'yes' %}
os.system("bower install angular --save")
{% endif %}


os.system("grunt serve")