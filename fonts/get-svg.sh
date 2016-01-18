#!/bin/bash

set -e
cd ${0%/*}/..
find img -type f -name \*.svg -exec cp -p {} fonts/elite-icons/source \;
find fonts/elite-icons/source -type f -name \*.svg -exec sed -i '' 's/\#[A-Za-z0-9]*/#000000/g' {} \;
