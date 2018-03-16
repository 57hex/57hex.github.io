from firebase import firebase

GET_YOUR_OWN_TOKEN = "Go get your own god-damn token"
i = 1
email = input(str("Enter your own email(starts with /):"))
email1 = email.split(".")
email = str("_".join(email1) + "/data")

authentication = firebase.FirebaseAuthentication(GET_YOUR_OWN_TOKEN, 'Your own email', True, True)
firebase.authentication = authentication
user = authentication.get_user()

firebase = firebase.FirebaseApplication('https://project-4fe4c.firebaseio.com', authentication=authentication)


def showUnfinish():
    while True:
        count = str(i)
        result = firebase.get(email, count)
        if result['finished'] == "False"
            i += 1
            continue
        if not result:
            break
        print(result['content'])
        i += 1
        
        
def showFinish():
    while True:
        count = str(i)
        result = firebase.get(email, count)
        if result['finished'] == "True"
            i += 1
            continue
        if not result:
            break
        print(result['content'])
        i += 1
        
        
showFinish()
showUnfinish()
