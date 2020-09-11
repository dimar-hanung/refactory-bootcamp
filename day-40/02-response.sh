#!/bin/bash
response=$(curl -s -w "\n%{http_code}" $1?format=json)
response=(${response[@]}) # convert to array
code=${response[-1]} # get last element (last line)
body=${response[@]::${#response[@]}-1} # get all elements except last
name=$(echo $body | jq '.name')
echo $code
echo $body | jq .