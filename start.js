document.write('<h2>Table of FN</h2>');
for (i = 0, j = 1, k = 0, fib = 0; i < 50; i++, fib = j + k, j = k, k = fib) {
    document.write('fib (' + i + ') = ' + fib);
    document.write('<br>');
}