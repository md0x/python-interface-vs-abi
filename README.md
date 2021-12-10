With python-interface-vs-abi , you can:

Compare a list of python interfaces files and contracts artifacts to find the differences between.


## Instructions

1. Update `OCEAN_PY_PATH` in [config.js](config.js) with your `ocean.py` folder path.
2. Update `relativePaths` in [config.js](config.js) with the interfaces and artifacts you want to compare, the format should be:
```js
relativePaths=[
  [
    ["relative paths to python interface from OCEAN_PY_PATH","...rest of .py inherited interfaces"],
    "relative path to json artifact from OCEAN_ARTIFACTS_PATH"
  ],
  ...
]
```
3. Run the script:
 ```
npm run start
 ```

