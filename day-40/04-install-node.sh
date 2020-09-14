#!/bin/bash


if [[ $1 == 13 || $1 == 12 || $1 == 11 || $1 == 10 || $1 == 8 ]]; then
    curl -sL https://deb.nodesource.com/setup_$1.x | sudo -E bash -
    echo "Node version $1 has been installed."
else
    echo "Invalid Version!"
fi