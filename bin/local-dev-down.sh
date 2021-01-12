#!/bin/bash

declare -a MODULES=(
  'github.com/dnb-hugo/debugprint'
  'github.com/dnb-hugo/components/functions'
  'github.com/dnb-hugo/components/netlification'
  'github.com/dnb-hugo/libraries/bootstrap5'
  'github.com/themefisher/core-docs'
)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR"/replacements.sh

for i in "${MODULES[@]}"
do
  go mod edit -dropreplace "$i"
done
