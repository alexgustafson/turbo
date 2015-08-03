#!/usr/bin/env python
# -*- coding: utf-8 -*-

import shutil
import os

os.system("git init")
os.system("git add .")
os.system("git commit -m 'initial commit'")
os.system("bower install")
os.system("npm install")
os.system("grunt")