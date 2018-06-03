# boggle-1

<!-- PSEUDOCODE  -->

<!-- Logic think -->

<!-- Release 0 -->

<!--
set new variable input receiving input value from command line

  Create a class named Boggle with constructor an integer of input length, a string of input, and an array for the boggle board itself

      Create a method to create a randomized alphabetic character.
          create variable that contain a-z alphabetic character, sorted.
          get random number from 1 - 26.
          transform random number into alphabetic character by index.
          return the character.

      Create a method to create a boggle board and fill with the the character as the dimensions from input length.
          create array to fill row as much as input length.
              call a method to get randomized alphabetic character.
              push character into array level j.
          push array level j into array boggle board.
        call a method to print boggle board.

      Create a method to print the boggle board. Transform from array type board into a string type board for a better look.
          loop as length input.
              print boggle board row in level j, use join to clear. array look.

      Create a method to solve the boggle game, but only use/ code on release 1. Empty method.
          loop as boggle length (index i)
              loop boggle as the length in index i (index j)
                  if value of array boggle in index i, j equals to string word in index 0
                      set variable adjacentStatus with true, this variable will used for the next while
                      set variable string to receive the nearest adjacent chacater (strCollected)

                      loop as adjacentStatus equals true and variable k counts lower than input length -1

                          call method find adjacent with params row value, column value and the next word to compare, the result will be an array
                          set new row value from index 0 of result array
                          set new column value with index 1 of result array
                          increment k

                          if adjacentStatus equals to true
                              add strCollected with character/ value from bogge in index i, j

                              if length of strCollected equals to input length
                                  print strCollected


      Create method to find nearest adjacent character with params row value, column value, and restword that include character to be compared
          create an array that will contain the output

          if row-1 higher than 0 and boggle in index row -1 and index col equals restWord
              push row-1 into array output
              push col into array output
              push boolean value true into array output


              if row+1 is less than boggle board length and boggle in index row + 1 and index col equals restWord
                  push row+1 into array output
                  push col into array output
                  push boolean value true into array output

              if col-1 is bigger than 0 and boggle in index row and index col-1 equals restWord
                  push row into array output
                  push col-1 into array output
                  push boolean value true into array output

              if col+1 is less than boggle board length and boggle in index row and index col+1 equals restWord
                  push row into array output
                  push col+1 into array output
                  push boolean value true into array output

              if row-1 higher than 0 and col-1 is higher than 0 and boggle in index row-1 and index col-1 equals restWord
                  push row-1 into array output
                  push col-1 into array output
                  push boolean value true into array output

              if row-1 higher than 0 and col+1 is less than boggle board length and boggle in index row-1 and index col+1 equals restWord
                  push row-1 into array output
                  push col+1 into array output
                  push boolean value true into array output

              if row+1 is less than boggle board and col-1 is bigger than 0 and boggle in index row+1 and index col-1 equals restWord
                  push row+1 into array output
                  push col-1 into array output
                  push boolean value true into array output

              if row+1 is bigger than boggle board length and col+1 is bigger than boggle board length and boggle in index row -1 and index col equals restWord
                  push row+1 into array output
                  push col+1 into array output
                  push boolean value true into array output

          push 0 into array output
          push 0 intu array output
          push boolean value false into array output

          return output


SET new variable game and assign with new class Boggle with param (input in index 2, input in index 3)


call game class method createBoggle

call game class method solve

-->



















//
