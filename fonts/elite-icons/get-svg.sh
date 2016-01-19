#!/bin/bash

set -e
cd ${0%/*}/../..
rm -rf fonts/elite-icons/source
mkdir -p fonts/elite-icons/source
find img -type f -name \*.svg -exec cp -p {} fonts/elite-icons/source \;
for f in img/pilots-federation/explorer/*.svg; do
	cp "$f" fonts/elite-icons/source/${f//img\/pilots-federation\/explorer\/rank/rank-explorer}
done
for f in fonts/elite-icons/source/*.svg; do
	mv "$f" `echo "${f// /_}" | tr [:upper:] [:lower:]`
done
find fonts/elite-icons/source -type f -name \*.svg -exec sed -i '' 's/\#[A-Za-z0-9]*/#000000/g' {} \;
