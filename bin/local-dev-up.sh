#!/bin/bash

declare -a MODULES=(
  'github.com/dnb-org/debugprint'
  'github.com/dnb-org/components/functions'
  'github.com/dnb-org/components/netlification'
  'github.com/dnb-org/libraries/bootstrap5'
  'github.com/themefisher/core-docs'
)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR"/replacements.sh

for i in "${!MODULES[@]}"; do
  go mod edit -replace "${MODULES[$i]}"="${REPLACE[$i]}"
done
