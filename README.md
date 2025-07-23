# defini7.github.io
My blog, also used as a place for deploying some demos.

# Uploading posts

1) Start python virtual environment in scripts directory:
```sh
source ./scripts/bin/activate
```

2) Install **markdown** module
```sh
python3 -m pip3 install markdown
```

3) Write a post to the **post.md** file

4) Update **index.html** and create the post file
```sh
python3 scripts/upload.py
```
