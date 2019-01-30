@echo off
mklink /D \s %Build_SourcesDirectory%
mklink /H \azure-pipelines.yml %Build_SourcesDirectory%\azure-pipelines.yml
dir d:\s