#!/bin/bash
filename=$1
cat $filename | while read LINE; do
{
    IFS='/' read -ra SOURCE <<< $LINE
    file=${SOURCE[-1]}
    response=$(curl -s -w "\n%{http_code}" $LINE?format=json) exitCode=$?
    echo $'\n'
    echo $LINE | cat -v
    array=(${response[@]}) # convert to array
    code=${array[-1]} # get last element (last line)

    if [[ "$code" == "200" ]];then
        # body=${response[@]} # get all elements except last
        body=${array[@]::${#array[@]}-1}
        echo $code
        echo $body | jq .
        echo $body | jq . > data/${file}.json
        echo "${file}.json created"
    else 
        echo $response
    fi

    
};
done <"$filename"

