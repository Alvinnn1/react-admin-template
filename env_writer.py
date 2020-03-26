#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys

file_dir = os.path.split(sys.argv[1])[0]
if not os.path.isdir(file_dir):
    os.makedirs(file_dir)

f = open(sys.argv[1],'w')

f.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"></head>')
f.write('<body>')
f.write('<h3>pipe: '+ os.environ['pipe']+"\n"+'</h3>')
f.write('<h3>version: '+ os.environ['version']+"\n"+'</h3>')
f.write('<h3>commitId: '+ os.environ['commitId']+"\n"+'</h3>')
f.write('<h3>commitMessage: '+ os.environ['commitMessage']+"\n"+'</h3>')
f.write('<h3>commitTimeFormat: '+ os.environ['commitTimeFormat']+"\n"+'</h3>')
f.write('</body>')
f.write('</html>')
f.close()
