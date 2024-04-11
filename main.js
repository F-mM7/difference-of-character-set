a.oninput = solve;
b.oninput = solve;

function solve() {
  const s = a.value.split("").filter((c) => /[^ \n]/.test(c));
  const t = b.value.split("").filter((c) => /[^ \n]/.test(c));

  let mp = {};
  for (c of s) {
    if (!mp[c]) mp[c] = 0;
    ++mp[c];
  }
  for (c of t) {
    if (!mp[c]) mp[c] = 0;
    --mp[c];
  }
  forward.innerHTML = "";
  backward.innerHTML = "";
  console.log(mp);

  for (c in mp)
    for (let i = 0; i < Math.abs(mp[c]); ++i)
      (mp[c] > 0 ? forward : backward).innerHTML += c;
}
