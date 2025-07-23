import re
from datetime import datetime


def escape(s: str) -> str:
    res = s.lower().replace(' ', '-').replace('_', '-')
    res = re.sub(r'[^a-z0-9-]', '', res)
    res = re.sub(r'-+', '-', res)
    return res.strip('-')


def get_date() -> str:
    # E.g. Jul, 24, 2025
    return datetime.now().strftime("%b, %d, %Y")


def get_year_month() -> tuple[int]:
    date = datetime.now()
    return (date.year, date.month)


def construct_before(title: str) -> str:
    return f"""<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Alex Blog - {title}</title>
        <meta charset="utf-8">

        <link rel="stylesheet" href="../../static/styles.css">
        <link rel="icon" type="image/x-icon" href="../../static/favicon.ico">
    </head>
    <body>
        <header>
            <h1><a href="/">Alex Blog</a></h1>
            <h3>anything about everything</h1>
        </header>
        <main>"""


def construct_after() -> str:
    return """</main>
        <footer>
            All material contained on this website is copyright of Alex S., 2024-2025
        </footer>
    </body>
</html>"""