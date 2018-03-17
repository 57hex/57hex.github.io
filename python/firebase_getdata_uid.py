from firebase import firebase
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("data.json")
firebase_admin.initialize_app(cred)
GET_YOUR_OWN_TOKEN = "Go get your own god-damn token you silly"
email = None
get_uid = input(str("Email:"))
user = auth.get_user_by_email(get_uid)
uid = str(user.uid)
uid = "/user/" + uid + "/data"
print(uid)
authentication = firebase.FirebaseAuthentication(GET_YOUR_OWN_TOKEN, 'Your own email', True, True)
firebase.authentication = authentication
user = authentication.get_user()

firebase = firebase.FirebaseApplication('https://project-4fe4c.firebaseio.com', authentication=authentication)


def showFinish():
    i = 1
    while True:
        count = str(i)
        result = firebase.get(uid, count)
        if not result:
            break
        if result['finished']:
            print(result['content'])
        i += 1


def showUnfinish():
    i = 1
    while True:
        count = str(i)
        result = firebase.get(uid, count)
        if not result:
            break
        if not result['finished']:
            print(result['content'])
        i += 1


showFinish()