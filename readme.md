# Pipeline/build artifact task examples and tests

## Pipelines

Run the pipeline to see how the tasks behave in certain scenarios.

## Minimatch tests

1. Run 'yarn install'
2. Run 'node match-test.js`

### Output

```console
*** Test 1 ***
filters: [**]
a1/a.txt
a1/b.dll
a1/c/d.dll
a2/a1/d.dll
a2/e.exe
a3/f.txt
a3/g.txt

*** Test 2 ***
filters: [**/*.dll]
a1/b.dll
a1/c/d.dll
a2/a1/d.dll

*** Test 3 ***
filters: [*/*.dll]
a1/b.dll

*** Test 4 ***
filters: [a1/**]
a1/a.txt
a1/b.dll
a1/c/d.dll

*** Test 5 ***
filters: [a1/*]
a1/a.txt
a1/b.dll

*** Test 6 ***
filters: [a1/**,a2/**]
a1/a.txt
a1/b.dll
a1/c/d.dll
a2/a1/d.dll
a2/e.exe

*** Test 7 ***
filters: [a1/*,a2/*]
a1/a.txt
a1/b.dll
a2/e.exe
```