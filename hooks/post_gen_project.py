#!/usr/bin/env python
# -*- coding: utf-8 -*-

import shutil
import os





os.system("git init")
os.system("git add .")
os.system("git commit -m 'initial commit'")
os.system("cd {{cookiecutter.project_name}}/ && bower install")
os.system("cd {{cookiecutter.project_name}}/ && npm install")