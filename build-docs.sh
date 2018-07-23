#!/bin/bash
clear
cd www
pip install mkdocs
mkdocs --version
mkdocs build
