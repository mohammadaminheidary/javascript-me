count = []
while(True):
    num = int(input('enter a number:'))
    c = num % 10
    if c == 0:
        print(len(count))
        break
    else:
        count.append(c)
        continue