@echo off
mklink /D \s $(Build.SourcesDirectory)
mklink /H \azure-pipelines.yml $(Build.SourcesDirectory)\azure-pipelines.yml
dir d:\s