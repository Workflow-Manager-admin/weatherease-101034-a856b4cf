#!/bin/bash
cd /home/kavia/workspace/code-generation/weatherease-101034-a856b4cf/weather_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

