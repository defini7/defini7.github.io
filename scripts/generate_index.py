# This script updates all links to notes in the index.html file

def generate_index():
    BEFORE = """<!DOCTYPE html>

    <html lang="en">
        <head>
            <title>Alex Blog</title>
            <meta charset="utf-8">

            <link rel="stylesheet" href="static/styles.css">
            <link rel="icon" type="image/x-icon" href="static/favicon.ico">
        </head>
        <body>
            <header>
                <h1><a href="/">Alex Blog</a></h1>
                <h3>anything about everything</h1>
            </header>
            <main>"""

    AFTER = """</main>
            <footer>
                All material contained on this website is copyright of Alex S., 2024-2025
            </footer>
        </body>
    </html>"""

    with open("index.html", "w") as f:
        f.write(BEFORE)

        with open("notes.csv", "r") as csv:
            lines = reversed([l.strip() for l in csv.readlines()])

            for line in lines:
                title, date, path = line.strip('"\n\r ').split('","')

                f.write('<div class="note">')
                f.write(f'<span class="date">{date}</span>')
                f.write(f'<a href="{path}">{title}</a>')
                f.write("</div>")

        f.write(AFTER)
