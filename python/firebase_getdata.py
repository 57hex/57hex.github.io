from firebase import firebase
import json

GET_YOUR_OWN_TOKEN = "ZNIJipjwcaZ1huybwWKlc6NzHFO5CdQaj1B0c31i"
email = input(str("Enter your own email(starts with /):"))
email1 = email.split(".")
email = str("_".join(email1) + "/data")
print(email)

authentication = firebase.FirebaseAuthentication(GET_YOUR_OWN_TOKEN, 'Your own email', True, True)
firebase.authentication = authentication
user = authentication.get_user()

firebase = firebase.FirebaseApplication('https://project-4fe4c.firebaseio.com', authentication=authentication)


def showFinish():
    i = 0
    while True:
        count = str(i)
        result = firebase.get(email, count)
        if not result:
            break
        if result['finished'] == True:
            print(result['content'])
        i += 1


def showUnfinish():
    i = 0
    while True:
        count = str(i)
        result = firebase.get(email, count)
        if not result:
            break
        if result['finished'] == False:
            print(result['content'])
        i += 1


showFinish()
showUnfinish()
