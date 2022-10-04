# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


def even_or_odd(num)
  if num.to_i.even?
   p "#{num} is even."
  elsif num.to_i.odd?
   p "#{num} is odd."
  else
    p "Does not compute."
  end
end

even_or_odd(num1) #output: "7 is odd."
even_or_odd(num2) #output: "42 is even."
even_or_odd(num3) #output: "221 is odd."
even_or_odd(num4) #output: "13 is odd."
even_or_odd(num5) #output: "64 is even."



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'



def remove_vowel(str)
  temp_str = str.delete('aeiou')
  p temp_str.delete('AEIOU')
 end
 
 remove_vowel(beatles_album1) #output: "Rbbr Sl"
 remove_vowel(beatles_album2) #output: "Sgt Pppr"
 remove_vowel(beatles_album3) #output: "bby Rd"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def valid_palindrome(str)
  if str.downcase == str.downcase.reverse
    p "#{str} is a palindrome."
  elsif str.downcase != str.downcase.reverse
    p "#{str} is NOT a palindrome."
  else
    p "Oops, something went wrong..."
  end
end

valid_palindrome(palindrome_tester1) #output: "Racecar is a palindrome."
valid_palindrome(palindrome_tester2) #output: "LEARN is NOT a palindrome."
valid_palindrome(palindrome_tester3) #output: "Rotator is a palindrome."
