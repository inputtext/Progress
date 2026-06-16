#include <stdio.h>

int main() {
    int x = 5;  // Binary: 0101
    int y = 9;  // Binary: 1001

    printf("Before: x = %d, y = %d\n", x, y);

    x = x ^ y;  // Step 1
    y = x ^ y;  // Step 2
    x = x ^ y;  // Step 3

    printf("After:  x = %d, y = %d\n", x, y);
    return 0;
}
