#!/bin/sh
cd `dirname $0`
xdg-open "http://127.0.0.1:4001"
./init.zsp "$@"
