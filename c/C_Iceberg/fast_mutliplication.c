#include <stdio.h>

int main() {
    int num = 10; // Binary: 0000 1010

    // Multiplication by 2^n using Left Shift (<<)
    int multiplied = num << 2; // Shifts left by 2 positions (10 * 2^2)

    // Division by 2^n using Right Shift (>>)
    int divided = num >> 1;    // Shifts right by 1 position (10 / 2^1)

    printf("Original: %d\n", num);
    printf("Multiplied (num << 2): %d\n", multiplied); // Expect 40
    printf("Divided    (num >> 1): %d\n", divided);    // Expect 5
    return 0;
}
