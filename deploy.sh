#!/bin/bash

yarn build && yarn deployToAWS && ssh aws_ec2user "sudo service nginx restart"