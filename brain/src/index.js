const code = document.getElementById("code");
const output = document.getElementById("output");
const runButton = document.getElementById("run-code");

function parseCode(source) {
    let stack = new Array(30000).fill(0);

    let cur = 0;
    let b = 0;

    output.innerHTML = "";

    let i = 0;
    while (source[i]) {
        switch (source[i]) {
            case '>': cur++; break;
            case '<': cur--; break;
            case '+': stack[cur]++; break;
            case '-': stack[cur]--; break;
            case '.': output.innerHTML += String.fromCharCode(stack[cur]); break;
            
            case '[':
            {
                if (!stack[cur])
                {
                    b++;
                    while (b)
                    {
                        switch (source[++i])
                        {
                            case '[': b++; break;
                            case ']': b--; break;
                        }
                    }
                }
            }
            break;

            case ']':
            {
                if (stack[cur])
                {
                    b++;
                    while (b)
                    {
                        switch (source[--i])
                        {
                            case '[': b--; break;
                            case ']': b++; break;
                        }
                    }
                    i--;
                }
            }
            break;
        }

        i++;
    }
}

runButton.addEventListener("click", () => {
    parseCode(code.value);
});
