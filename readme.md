# Pipeline/build artifact task examples and tests

## Pipelines

Run the pipeline to see how the tasks behave in certain scenarios.

## Minimatch tests

1. Run 'yarn install'
2. Run 'node match-test.js`

### Output

```console
Filters: [**]
a1/a.txt
a1/b.dll
a1/c/d.dll
a2/a1/d.dll
a2/e.exe
a3/f.txt
a3/g.txt

Filters: [**/*.dll]
a1/b.dll
a1/c/d.dll
a2/a1/d.dll

Filters: [*/*.dll]
a1/b.dll

Filters: [a1/**]
a1/a.txt
a1/b.dll
a1/c/d.dll

Filters: [a1/*]
a1/a.txt
a1/b.dll

Filters: [a1/**,a2/**]
a1/a.txt
a1/b.dll
a1/c/d.dll
a2/a1/d.dll
a2/e.exe

Filters: [a1/*,a2/*]
a1/a.txt
a1/b.dll
a2/e.exe
```