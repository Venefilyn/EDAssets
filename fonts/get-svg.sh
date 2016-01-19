#!/bin/bash

set -e
cd ${0%/*}/..
mkdir -p fonts/elite-icons/source
find img -type f -name \*.svg -exec cp -p {} fonts/elite-icons/source \;
for f in fonts/elite-icons/source/*.svg; do mv "$f" "${f// /_}"; done
for f in fonts/elite-icons/source/*.svg; do mv $f `echo $f | tr [:upper:] [:lower:]`; done
find fonts/elite-icons/source -type f -name \*.svg -exec sed -i '' 's/\#[A-Za-z0-9]*/#000000/g' {} \;
