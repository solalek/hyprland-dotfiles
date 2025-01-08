#!/usr/bin/env python

import subprocess
import json

data = {}

# Command to get the brightness from ddcutil
cmd = ["ddcutil", "getvcp", "0x10"]

# Run the command and capture the output
value = subprocess.run(cmd, stdout=subprocess.PIPE).stdout.decode('utf8')

# Check if the output is valid and contains the expected data
if "current value" in value:
    # Try to extract the brightness value
    try:
        # Split based on the format "current value = <value>,"
        percentage = value.split("current value =")[1].split(",")[0].strip()
        data['percentage'] = int(percentage)
    except IndexError as e:
        data['error'] = f"Failed to parse brightness: {e}"
else:
    data['error'] = "Invalid ddcutil output"

# Print the result as a JSON object
print(json.dumps(data))
