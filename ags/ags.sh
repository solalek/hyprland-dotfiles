#!/usr/bin/env sh

killall -q ags

while pgrep -x ags >/dev/null; do sleep 1; done

ags
