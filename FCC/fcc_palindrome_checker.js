function palindrome(str) {
  // Cleaning up the string: removing all non-alphanumeric characters
  var raw_input = str.replace(/[\W_]/g, "");

  // Cleaning up the string: changing all letters to lower case
  var raw_input = raw_input.toLowerCase();

  // Changing string to array
  var input = raw_input.split("");

  // Calculating how many steps are needed to check for palindrome
  var steps = Math.floor(input.length / 2);

  var start = 0;
  var end = input.length - 1;

  for (steps; steps > 0; steps--) {
    if (input[start] == input[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}

palindrome("never odd or even");
