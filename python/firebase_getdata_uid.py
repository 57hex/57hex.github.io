from firebase import firebase
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("data.json")
# initalize the certificate in order to get uid

firebase_admin.initialize_app(cred)
GET_YOUR_OWN_TOKEN = "Go get your own token :)"
get_uid = input(str("Email:"))
user = auth.get_user_by_email(get_uid)  # get uid by email
uid = str(user.uid)

uid = "/user/" + uid + "/data"
authentication = firebase.FirebaseAuthentication(
    GET_YOUR_OWN_TOKEN, 'Your own email', True, True)  # Avoid 401 error

firebase.authentication = authentication
user = authentication.get_user()

firebase = firebase.FirebaseApplication(
    'https://project-4fe4c.firebaseio.com',
    authentication=authentication)  # connect to firebase with token


def showFinish():
    i = 1
    print("Finished things:")
    while True:
        count = str(i)
        result = firebase.get(uid, count)
        if not result:
            break
        if result['finished']:
            print("\t" + result['content'])
        i += 1
    print("--------End--------")


def showUnfinish():
    i = 1
    print("Unfinished things:")
    while True:
        count = str(i)
        result = firebase.get(uid, count)
        if not result:
            break
        if not result['finished']:
            print("\t" + result['content'])
        i += 1
    print("--------End--------")


if __name__ == "__main__":
    showFinish()
    showUnfinish()
