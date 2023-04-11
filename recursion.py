# Recursion practice:

# find sum of digits using recursion

def digitSum(n):
    # assert 
    if len(str(n))==1:
        return n
    return int(str(n)[0]) + digitSum(int(str(n)[1:]))


# or

def digitSum2(n):
    assert n>0 and int(n)==n, "The number should be positive and integer."
    if n<10:
        return n
    else:
        return int(n%10) + digitSum2(n//10)
    
# print(digitSum2(33232218))

# Calculate power of a number using recursion?

def calculatePower(base, power):
    assert int(power)==power and power>0, "the exponents can be positive integer only"
    if power == 0:
        return 0
    if power == 1:
        return base
    else: return base * calculatePower(base, power-1)

# print(calculatePower(-4, 2))

# Greatest common divisor of two numbers?

def gcd(val1, val2):
    if (val2==0):
        print(val1)
        return
    else: return gcd(val2, val1%val2)


gcd(12,8)