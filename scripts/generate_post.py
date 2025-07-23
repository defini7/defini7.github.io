# This script converts the post.md file to the html page and puts
# it to the route year/month/day/<title>

from utils import *

def generate_post():
    with open("post.md", "r") as f:
        title = f.readline().replace('#', '').strip()

    date = get_date()
    before = construct_before(title)
    after = construct_after()

    year, month = get_year_month()
    path = f"{year}/{month}/{escape(title)}.html"

    import os
    os.makedirs(os.path.dirname(path), exist_ok=True)

    with open(path, "wb") as f:
        f.write(bytes(before, "utf-8"))

        from markdown import markdownFromFile
        markdownFromFile(input="post.md", output=f)

        f.write(bytes(after, "utf-8"))

    with open("notes.csv", "a") as f:
        f.write(f'"{title}","{date}","{path}"\n')
