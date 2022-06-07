#!/bin/bash

declare -a MODULES=(
  'github.com/davidsneighbour/debugprint'
  'github.com/davidsneighbour/components/functions'
  'github.com/davidsneighbour/components/netlification'
  'github.com/davidsneighbour/libraries/bootstrap5'
  'github.com/themefisher/core-docs'
)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR"/replacements.sh

for i in "${MODULES[@]}"
do
  go mod edit -dropreplace "$i"
done
