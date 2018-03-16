from firebase import firebase

GET_YOUR_OWN_TOKEN = "Go get your own god-damn token"
email = input(str("Enter your own email(starts with /):"))
email1 = email.split(".")
email = str("_".join(email1) + "/data")

authentication = firebase.FirebaseAuthentication(GET_YOUR_OWN_TOKEN, 'your@ownemail.com', True, True)
firebase.authentication = authentication
user = authentication.get_user()

firebase = firebase.FirebaseApplication('https://project-4fe4c.firebaseio.com', authentication=authentication)
result = firebase.get(email, '3')
print(result)
