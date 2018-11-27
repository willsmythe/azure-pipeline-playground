COMMIT_ID=57e83034ff23fcf3746e3d9c95c72814b225b129
#COMMIT_ID=2cf76febdbc0bacf1ef4cae66a415c3d0536ecc0

if [ $(git rev-list $COMMIT_ID --parents --max-count=1 | wc -w) -gt 2 ]; then
    changedFiles=$(git diff-tree --no-commit-id --name-only -r -m $COMMIT_ID)
    paths=()
    paths+=('test 1')
    paths+=('test 2')

    for filename in $changedFiles; do
        path=$(dirname $filename)
        if [ $path != '.' ]; then
            paths+=($path)
        fi
    done

    paths+=('test 1')

    uniq=$(printf "%s\n" "${paths[@]}" | sort -u)

    echo '=='
    echo "$uniq" | sort -u
    echo '=='
fi
  
