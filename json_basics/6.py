
# PYTHON TO JSON:

import json

# a Python object (dict):
x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)

# FORMATTING
json.dumps(x, indent=4, sort_keys=True,separators=(". ", " = "))