/** Ahmed OS: four illustrative joke files typed in the laptop editor. Not real or executed code. */
export const files = [
  {
    name: 'ahmed_core.py',
    code: `ahmed = AIEngineer()

ahmed.sleep()       # Feature not found
ahmed.give_up()     # Permission denied
ahmed.build()       # Always running

# Giving up is not installed.`,
  },
  {
    name: 'brain_train.py',
    code: `model.train(on="ambition")
future = model.predict("Ahmed")

print(future)
# Output: Beyond expectations 🚀`,
  },
  {
    name: 'life_debug.py',
    code: `bugs = ["sleep", "deadlines", "coffee"]

fix(bugs)

# Error: coffee dependency missing ☕`,
  },
  {
    name: 'coffee_model.py',
    code: `while coffee > 0:
    ideas += 1
    sleep -= 1

# RuntimeError: Need more coffee.`,
  },
];

export type Token = { t: string; c: string };

// One pass per line; comments and strings never span lines in these snippets.
const TOKEN =
  /(#.*$)|("[^"]*")|\b(while|for|in|if|else|def|return|import|from|not|and|or)\b|\b(\d+)\b|\b(print|range|len)\b(?=\()|\b([A-Z]\w*)\b|\b([a-z_]\w*)(?=\()|(\w+)(?==)|([=+\-<>*/]+)/g;
const CLASSES = ['com', 'str', 'kw', 'num', 'bi', 'cls', 'fn', 'arg', 'op'];

export function tokenize(code: string): Token[][] {
  return code.split('\n').map((line) => {
    const out: Token[] = [];
    let last = 0;
    for (const m of line.matchAll(TOKEN)) {
      if (m.index > last) out.push({ t: line.slice(last, m.index), c: '' });
      const group = m.slice(1).findIndex((g) => g !== undefined);
      out.push({ t: m[0], c: CLASSES[group] ?? '' });
      last = m.index + m[0].length;
    }
    if (last < line.length) out.push({ t: line.slice(last), c: '' });
    return out;
  });
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Renders the first `n` characters (newlines count as one) as highlighted lines, with the cursor at the end. */
export function render(lines: Token[][], n = Infinity, cursor = true) {
  let left = n;
  let html = '';
  let row = 0;
  let col = 0;
  for (let i = 0; i < lines.length && left >= 0; i++) {
    let body = '';
    let typed = 0;
    for (const tok of lines[i]!) {
      if (left <= 0) break;
      // Array.from keeps emoji (surrogate pairs) whole while typing.
      const chars = Array.from(tok.t);
      const part = chars.slice(0, left).join('');
      left -= Math.min(chars.length, left);
      typed += Array.from(part).length;
      body += tok.c ? `<span class="${tok.c}">${esc(part)}</span>` : esc(part);
    }
    const lineLen = lines[i]!.reduce((a, tok) => a + Array.from(tok.t).length, 0);
    const done = typed === lineLen && left > 0;
    const current = !done || i === lines.length - 1;
    if (current) { row = i + 1; col = typed + 1; }
    html += `<div class="ln${current ? ' cur' : ''}">${body}${current && cursor ? '<i class="caret"></i>' : ''}</div>`;
    if (current) break;
    left -= 1; // the newline
  }
  return { html, row, col };
}

export const charCount = (code: string) => Array.from(code).length;
