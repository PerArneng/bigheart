#!/usr/bin/env bash
monkeyc -o bin/bigheart.prg -w -m manifest.xml -z resources/resources.xml -r source/BigHeartField.mc source/HeartFieldApp.mc source/ScalableTextDrawer.mc source/VirtualDisplay.mc 
connectiqpkg -o . -m 'manifest.xml' -n bigheart 'bin/bigheart.prg'