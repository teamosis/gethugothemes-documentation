#!/bin/bash

hugo mod get -u ./...
hugo --gc --minify
