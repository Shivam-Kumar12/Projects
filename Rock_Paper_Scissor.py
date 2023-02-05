import random
def gamewin(comp,you):
    if comp== you:
        return None
    if comp=='Y':
        if you=='X':
            return False
    elif you=='Z':
        return True
    elif comp=='X':
        if you=='Z':
            return False
    elif you=='Y':
        return True
    elif comp=='Z':
        if you=='Y':
            return False
    elif you=='X':
        return True

print("comp turn:Stone(X) paper(Y) or Scissor(Z)?")
randomNo=random.randint(1, 3)
if randomNo == 1:
    comp ='Z'
elif randomNo == 2:
    comp ='Y'
elif randomNo == 3:
    comp ='X'

you=input("your turn:Stone(X) paper(Y) or Scissor(Z)?")
a = gamewin(comp,you)

print(f"Computer choose:{comp}")
print(f"you choose:{you}")

if a == None:   
    print("the game is tied")
elif a:
    print("you win!!")
else :
    print("You lose")