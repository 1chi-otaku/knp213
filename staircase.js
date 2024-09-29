export function generateStaircase(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                result += '#'; 
            } else {
                result += ' '; 
            }
        }
        result += '\n'; 
    }

    return result;
}