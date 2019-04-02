#!/bin/bash

set -x
source ./verdaccio.sh
root_path=$PWD
echo $(date)
startVerdaccio "$root_path"/tasks/verdaccio.yaml
restoreRegistryUrls
echo $(date)
