actual_number=45
attempt=0
while True:
    attempt+=1
    guess=int(input("enter the number:"))
    if guess<actual_number:
        print("your guess was too high")
    elif guess>actual_number:
        print("your gues was too low")

    else:
        print("you guessed the number")