# Duolingo Duome Exporter

## Purpose

Duolingo has discontinued their list of words that you've encountered in a 
language. This script leverages https://Duome.eu to generate the list of words you've
encountered for a language.

## Instructions

Navigate to https://duome.eu/username/progress where username is your duolingo
username. Scroll down and click the "Words" tab. After it loads save the html
file as duome.htm in the directory of your local copy of this repo. Then simply
run `node nodeScript.js`.

(Only tested with Japanese but it should work with other languages.)

(Thx to ChatGPT and https://regex101.com/ for aiding me in easily generating
the regex.)